const body = document.querySelector("body");

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let square = document.createElement("div");
square.className = "square";

let content = "";

for (let i = 0; i < 256; i++){
    content += `<div class="square"></div>`;
    container.innerHTML = content;
};

