// This function initializes a grid of div elements within a parent div 
// The size of the grid is determined by the size slider, which defaults to 16.
// When the user hovers over a div, it changes to a random colour.

const parent = document.querySelector(".gridContainer")
const boxTemplate = '<div class="box" style="flex-grow: 1;"></div>'

function init(size = 16){
    // initialises the grid of square divs
    const rowDiv = document.createElement("div");
    rowDiv.innerHTML = `${boxTemplate.repeat(size)}`
    rowDiv.style.display = "flex";
    rowDiv.style.flexGrow = 1;

    for (var i = 0; i < size; i++){
        parent.appendChild(rowDiv.cloneNode(true));
    };
};

function update(){
    parent.addEventListener('mouseover', (event) => {
        if (event.target.matches('.box')) {
            const hue = Math.floor(Math.random() * 360); // Generate a random hue value
            event.target.style.backgroundColor = `hsl(${hue}, 50%, 50%)`; // Set the background color with the random hue value
        }
    })};

init();
update();

let size = document.getElementById("size")
size.addEventListener("change", function() {
    parent.innerHTML = '' //wipe all child nodes
    init(size = this.value)
    update();
})