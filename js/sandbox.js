// Create new Date object
const d = new Date();
// Store the value of getHours in variable
let hour = d.getHours();

console.log(hour);
hour =1;


if (hour < 12) {
    // Morning
    document.getElementById("greeting").innerText = "Good Morning";
    document.getElementById("images").src = "img/good.avif";

} else if (hour < 17) {
    // Afternoon
    document.getElementById("greeting").innerText = "Good Afternoon";
    document.getElementById("images").src = "img/images.jpg";
}  
else {
    // Night
    document.getElementById("greeting").innerText = "Good Night";
    document.getElementById("images").src = "img/images (1).jpg";


}



//  let greetingElement = document.getElementById("Greeting");
// console.log(greetingElement)

