// Step 1: create a 16 x 16 grid of square divs

function init(){
    // initialises the 16 x 16 grid of square divs
    let parent = document.querySelector(".gridContainer")
    let rowDiv = document.createElement("div");

    rowDiv.className = "row";
    rowDiv.style.display = "flex";
    rowDiv.style.flexGrow = 1;

    const box = document.createElement("div");
    box.className = "box";
    box.style.flexGrow = 1;

    for (var i = 0; i < 16; i++){
        rowDiv.appendChild(box.cloneNode(true));
    };

    rowDiv.style.display = "flex"

    for (var i = 0; i < 16; i++){
        parent.appendChild(rowDiv.cloneNode(true));
    };
};

init();