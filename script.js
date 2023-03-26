const p1 = document.createElement("p");
p1.textContent = "Hi! My name is Shania Lopez and currently I'm a preschool teacher. I'm thrilled to make a career change into software engineering. I graduated from Franklin & Marshall College in 2021 with a degree I absolutely do not use! Rediscovering a passion for code has lead me to Flatiron School and I cannot wait to see where this profession journey takes me.";
document.querySelector("#body").appendChild(p1);

document.getElementById("about").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("about").innerHTML = "About Me";
}
