function changeMode(size,weight,transform,background,color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}
function main() {
    let spooky = changeMode("9px","bold","uppercase","pink","green");
    let darkMode = changeMode("12px","bold","capitalize","black","white");
    let screamMode = changeMode("12px","normal","lowercase","white","black");

    const paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);

    const spookyBtn = document.createElement("button");
    spookyBtn.textContent="Spooky";
    document.body.appendChild(spookyBtn);
    spookyBtn.addEventListener("click", spooky);

    const darkBtn = document.createElement ("button");
    darkBtn.textContent = "Dark mode";
    document.body.appendChild(darkBtn);
    darkBtn.addEventListener("click","darkMode");

    const screamBtn = document.createElement("button");
    screamBtn.textContent = "Scream Mode";
    document.body.appendChild(screamBtn);
    screamBtn.addEventListener("click",screamMode);
}
main();