     let count = 0; /* initialized outside because if we initilize inside the function, repeat the value of count by 
     zero when we call the function onclick therefore initilize outside the function */

     //let countEl = document.getElementById("count-el"); "count-el" pass in argument.
     //document.write(countEl);
     function increment() {
       
            count = count+1;
            document.getElementById("count-el").innerText = count;        
     }

     // The Document Object Model (DOM) (Real thing(id="count-el"), model(doucment.getElementById("count-el"))
   
     //display the count with innerText.. 
     //Create a function with save() name, which logs out the count when it's called.
     function save() {
       let conuntStr = count + " _ ";
       let totalPeople = document.getElementById("totalpeople").innerHTML; 
       document.getElementById("totalpeople").innerText = totalPeople + conuntStr; 

       // difference between innerText and textContent iT don't pick human readable data but the tC pick all type of data like spaces...
       /* let totalPeople = document.getElementById("totalpeople");  //hold only the element id..
       totalPeople.innerText += countStr;    */ 

       /* after display previous entering again count start form zero...this will happen when
       the save button entered... */
       count = 0;
       document.getElementById("count-el").innerText = count;   //here the count will be zero and again entering start from zero..

}