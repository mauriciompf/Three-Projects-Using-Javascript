let myLeads = [];
const saveBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#nav-list");

saveBtn.addEventListener("click", function saveLead() {
	myLeads.push(inputEl.value);
	renderLeads();
	inputEl.value = ""
}) 

function renderLeads() {
	let listItems = ""

	for (let i = 0; i < myLeads.length; i++) {
		listItems += `
			<li class='item-list'>
				<a class='link' target='_blank' href='${myLeads[i]}'>
					${myLeads[i]}
				</a>
			</li>
		`
			// "<li>" + 
			// 	"<a href=" + myLeads[i] + " target='_blank'>" + myLeads[i] + "</a>"+
			// "</li>"
	}

	ulEl.innerHTML = listItems;
}