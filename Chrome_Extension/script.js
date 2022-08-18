
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")


if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener("click", function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(leads) {
  var listItems = ""
  for (let i = 0; i < leads.length; i++) {
    // listItems += "<li><a href='#' target='_blank' >" + myLeads[i] + "</a></li>"
    listItems += `
      <li>
        <a href='#' target='_blank' >
          ${leads[i]}
        </a>
      </li>`
    
  
    // Alternate way to do the above
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
  
  }
  ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function() {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})


function render() {
  for (let i = 0; i < imgs.length; i++) {
    return imgs[i]
  }
}