
// Create the grid
const container = document.querySelector("#container");
const resetButton = document.querySelector("#reset");

function createDivBoxes(numberOfBoxes) {

    const fixedSize = 500;
    container.style.width = `${fixedSize}px`;
    container.style.height = `${fixedSize}px`;
  
    container.style.display = "flex"; // Enable flexbox on the container
    container.style.flexWrap = "wrap"; // Allow boxes to wrap to new lines
    container.textContent = "";

    const boxSize = fixedSize/ numberOfBoxes

    for (let i = 0; i < numberOfBoxes * numberOfBoxes; i++) {
      const content = document.createElement("div");
      content.classList.add("content");
      content.style.border = "1px solid white";
      content.style.boxSizing = "border-box"; //Important to keep consistent sizing.
      content.style.backgroundColor = "	#F0F8FF";
      content.style.width = `${boxSize}px`;
      content.style.height= `${boxSize}px`;
      content.style.flexShrink = "0"; // prevents boxes from shrinking

      content.hoverCount = 0;
      content.randomColour = null;
      
      content.addEventListener("mouseover", (event) => { 
        event.target.hoverCount++;

        if (!event.target.randomColour) {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            event.target.randomColour = `rgb(${red}, ${green}, ${blue})`;

        }

        const opacity = event.target.hoverCount /10;

        if (event.target.randomColour) {
            event.target.style.backgroundColor = `rgba(${event.target.randomColour.slice(4, -1)}, ${opacity})`;
        }
        });
        
        container.appendChild(content);
    }
}

function clearBoxes () {
    if (container) {
        const boxes = document.querySelectorAll(".content");
        boxes.forEach (box => {
            box.classList.remove("hovered");
            box.style.backgroundColor = "	#F0F8FF";
            box.hoverCount = 0;
            box.randomColour = null;
        });
    }

}

function promptAndCreateBoxes () {
    const userInput = prompt("How many boxes would you like?");
    const numberOfBoxes = parseInt(userInput);

    if (!isNaN(numberOfBoxes) && numberOfBoxes >0 && numberOfBoxes <101){
        createDivBoxes(numberOfBoxes);
    } else {
        alert ("Please enter a valid positive number up to 100.")
        createDivBoxes (16);
    }
}

resetButton.addEventListener("click", () => {
    clearBoxes();
    promptAndCreateBoxes();

});

promptAndCreateBoxes();


const heading = document.querySelector("h1");
const headingText = heading.textContent;
heading.innerHTML = ""; // Clear original text

for (let i = 0; i < headingText.length; i++) {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const randomColor = `rgb(${red}, ${green}, ${blue})`;

  heading.innerHTML += `<span style="color: ${randomColor};">${headingText[i]}</span>`;
}
