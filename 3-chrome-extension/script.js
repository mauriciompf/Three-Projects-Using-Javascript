let myLeads = [];
const inputEl = document.querySelector("#input-el");
const saveBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#nav-list");

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage;
	renderLeads();
}

saveBtn.addEventListener("click", function saveLead() {
	myLeads.push(inputEl.value);
	inputEl.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	renderLeads();
})

deleteBtn.addEventListener("dblclick", function deleteLead() {
	localStorage.clear();
	myLeads = [];
	renderLeads();
})

function renderLeads() {
	let listItems = "";

	for (let i = 0; i < myLeads.length; i++) {
		listItems += `
			<li class='item-list'>
				<a class='link' target='_blank' href='${myLeads[i]}'>
					${myLeads[i]}
				</a>
			</li>
		`;
	}

	ulEl.innerHTML = listItems;
}