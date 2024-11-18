// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();



// EVENT LISTENERS
let morningBtn = document.getElementsByClassName('btn')[0];
let afternoonBtn = document.getElementsByClassName('btn')[1];
let nightBtn = document.getElementsByClassName('btn')[2];
console.log(morningBtn,afternoonBtn,nightBtn);







console.log(hour);
hour =23;


if (hour < 12) {
    // Morning
    document.getElementById("greeting").innerText = "Good Morning";
    document.getElementById("images").src = "img/Sun-10.webp";
    document.body.style.background = "rgb(255, 255, 255)"; // Set solid background color
    document.body.style.background = "radial-gradient(circle, rgba(255,255,255,1) 2%, rgba(239,247,255,1) 8%, rgba(0,117,255,1) 100%)"; // Set radial gradient
    document.querySelector(".night").classList.add("d-none");
    document.querySelector(".afternoon").classList.add("d-none");
} else if (hour < 17) {
    // Afternoon
    document.getElementById("greeting").innerText = "Good Afternoon";
    document.getElementById("images").src = "img/sun2.gif";
    document.getElementById("images").src = "img/shovel.jpg";
    document.querySelector(".morning").classList.add("d-none");
   document.querySelector(".night").classList.add("d-none");
   document.body.style.background = "rgb(255, 255, 255)"; // Set solid background color
document.body.style.background = "radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(0,226,255,1) 100%)"; // Set radial gradient

   }  
else {
    // Night
    document.getElementById("greeting").innerText = "Good Night";
    document.getElementById("images").src = "img/moon.webp";
    document.querySelector(".morning").classList.add("d-none");
    document.querySelector(".afternoon").classList.add("d-none");
    document.body.style.background = "rgb(255, 245, 245)"; // Set solid background color
document.body.style.background = "linear-gradient(90deg, rgba(255, 245, 245, 1) 0%, rgba(0, 0, 0, 1) 45%)"; // Set linear gradient

 
}



//  let greetingElement = document.getElementById("Greeting");
// console.log(greetingElement)

