
let myLeads = []
const textEl = document.getElementById("text-el");
let inputBtnEl = document.getElementById("input-btn");
let pgEl = document.getElementById("pg-el");
  
  //1. Store the delete button in a deleteBtn variable. (const because no reassign)
  const deleteBtn = document.getElementById("delete-btn");

  //2. Store the tab button in a tabBtn variable.
  const tabBtn = document.getElementById("save-tab");

  //it works with small data_base to store value in localStorage.
    //lFLS has some ["lead1", "lead2"] or null( after localStorage.clear() )
    // pick the values of myLeads form localStorage...
    let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
    
    //it will run when the localStorage has values (myLeads value store into the localStorage)..
    //jump control from this condition if leadsFromLocalStorage = null;
     if (leadsFromLocalStorage) {
       myLeads = leadsFromLocalStorage;  //assign the localStorage value to the myLeads for display when the myLeads goes to null (means in start)
       renderLeads(myLeads);  //just for display the value on the screen...
     } 
  
  
  // const tabs = [
  //   {url: "https://www.maazahmadpage.com"}
  // ]

  //2. Listen for clicks on tabBtn. console.log links
  tabBtn.addEventListener("click", function() { 

  // console.log(tabs)
  // console.log(tabs[0])
  // console.log(tabs[0].url)
  
  // how to get the current_tab(that is open on the chrome) into maaz extension.....
  //1. chrome.tabs _ (chrome is variable) so called API only avaiable to us, when we're running the code in the context of a Chrome extension (maaz_extension)...
  //2. tabs (tab is an object) that has a query method saying that, hey Chrome, I want to grab aholdof your tabs, OR I want to query you some of the tabs...
  //3. which tabs is the next question? we'll specify that inside of the query using an object... {that is on screen OR active tab}
  //4. if we have more than one Chrome Window opened so currentWindow tab will saved....
  //5. query function()
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  console.log(tabs) 
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads(myLeads)
  })

  // this is just for tabs url link 
  // // use the Chrome API to get the tab....
  // // push the url in myLeads when it's clicked...
  // myLeads.push(tabs[0].url)
  // // store the url in localStorage and when the save_tab is clicked...
  // localStorage.setItem ("myLeads_url", JSON.stringify(myLeads))
  // //show the url in the bottom when it's clicked!
  // renderLeads(myLeads)
  }) 


  // put the renderfunction() here from bottom to refactor(pass parameter)...!   
  // renderfunction() for display the values of myLeads Array!
  function renderLeads(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {

        listItems  += ` 
         <li>
           <a target=_black href=${ leads[i] } >  
             ${ leads[i] } 
           </a>
         </li> `
    }
    pgEl.innerHTML = listItems;
  }

  //Make the delete button work......
    // 2. listen for double_clicks on the delete button (Google it!)!
    // 3. when clicked, clean localStorage, myLeads and DOM value!

    deleteBtn.addEventListener("dblclick", function() {

     console.log("double Clicked!")
     localStorage.clear()  //clear the localStorage!
     myLeads = [];        // reassign it with the empty array!
     renderLeads(myLeads);      // after reassign myLeads with empty array call renderLeads() so that empty value show!

  })
  
  inputBtnEl.addEventListener("click", function() {
     let inputValue = textEl.value;  //that is the value from inputText         
     myLeads.push(inputValue)
     pgEl.textContent = myLeads;           
     textEl.value = "";

     renderLeads(myLeads);

     //set the value into localStorage when the button clicked!
     localStorage.setItem("myLeads", JSON.stringify(myLeads))   
          
  })
  
  
  

  

