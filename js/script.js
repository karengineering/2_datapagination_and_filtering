/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

let itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
2 parameters:
list: represent student data that will be passed as an argument when the function is called
page:  represent the page number that will be passed as an argument when the function is called
*/
function showPage(list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;
   let studentList = document.querySelector(".student-list");

   studentList.innerHTML = ""; //will remove any students that might have previously been displayed

   for (i=0; i<list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentHTML = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${data[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${data[i].name.first} ${data[i].name.last}</h3>
                  <span class="email">${data[i].email}</span>
               </div>
               <div class="joined-det ails">
                  <span class="date">Joined ${data[i].registered.date}</span>
               </div>
            </li>
         `;
         studentList.insertAdjacentHTML("beforeend", studentHTML);  
      }
   }
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
1 parameter:
list: represents student data that will be passed as an argument when the function is called
*/
function addPagination(list) {
   let numOfBtns = Math.ceil(list.length / itemsPerPage);
   let linkList = document.querySelector(".link-list"); 

   linkList.innerHTML = ''; //remove any pagination buttons that might have previously been displayed

   for (let i = 1; i <= numOfBtns; i++) {
      let btnHTML= `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      linkList.insertAdjacentHTML("beforeend", btnHTML);  
      let firstBtn = document.querySelector("button"); 
      firstBtn.className = "active";

      linkList.addEventListener('click', (event) => {
         if (event.target.tagName === "BUTTON") {
            linkList.querySelector("[class=active]").removeAttribute("class");
            event.target.setAttribute("class", "active");
            showPage(list, event.target.textContent);
         }
      });
   }
} 

// Call functions
showPage(data, 1);
addPagination(data); 