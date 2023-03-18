// Step 1: create a 16 x 16 grid of square divs

function init(size = 16){
    // initialises the 16 x 16 grid of square divs
    const parent = document.querySelector(".gridContainer")
    const rowDiv = document.createElement("div");

    rowDiv.className = "row";
    rowDiv.style.display = "flex";
    rowDiv.style.flexGrow = 1;

    const box = document.createElement("div");
    box.className = "box";
    box.style.flexGrow = 1;

    for (var i = 0; i < size; i++){
        rowDiv.appendChild(box.cloneNode(true));
    };

    for (var i = 0; i < size; i++){
        parent.appendChild(rowDiv.cloneNode(true));
    };
};

init();

const update = () => {
    let box = document.querySelectorAll(".box")
    box.forEach(box => box.addEventListener('mouseenter', function(){
        const hue = Math.floor(Math.random() * 360); // Generate a random hue value
        box.style.backgroundColor = `hsl(${hue}, 50%, 50%)`; // Set the background color with the random hue value
    }))
};
update();


let size = document.getElementById("size")
size.addEventListener("input", function() {
    document.querySelector(".gridContainer").innerHTML = '' //wipe all child nodes
    init(size = this.value)
    update();
})