const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  alert(greeting = "Good day");
} else {
  alert(greeting = "Good evening");
}

console.log(greeting);