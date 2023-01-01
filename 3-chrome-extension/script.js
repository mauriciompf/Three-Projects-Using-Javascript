let myLeads = []
const inputEl = document.querySelector("#input-el")
const saveBtn = document.querySelector("#input-btn")
const tabBtn = document.querySelector("#tab-btn")
const deleteBtn = document.querySelector("#delete-btn")
const ulEl = document.querySelector("#nav-list")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
	myLeads = leadsFromLocalStorage
	render(myLeads)
}

saveBtn.addEventListener("click", function saveLead() {
	myLeads.push(inputEl.value)
	inputEl.value = ""
	localStorage.setItem("myLeads", JSON.stringify(myLeads))
	render(myLeads)
})

tabBtn.addEventListener("click", function saveTab() {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		myLeads.push(tabs[0].url)
		localStorage.setItem("myLeads", JSON.stringify(myLeads))
		render(myLeads)
	})
})

deleteBtn.addEventListener("dblclick", function deleteLead() {
	localStorage.clear()
	myLeads = []
	render(myLeads)
})

function render(leads) {
	let listItems = ""

	for (let i = 0; i < leads.length; i++) {
		listItems += `
			<li class='item-list'>
				<a class='link' target='_blank' href='${leads[i]}'>
					${leads[i]}
				</a>
			</li>
		`
	}

	ulEl.innerHTML = listItems
}