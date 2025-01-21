// TODO ######### write code for createHeading function
const createHeading = (level, text, loc) => {
    let headingElement = document.createElement(`h${level}`);
    headingElement.textContent = text;
    let targetLoc = document.querySelector(loc);
    targetLoc.append(headingElement);
}
// TODO ######### write code for createNavigation function
const createNavigation = (texts, links, loc = "#primary-nav") => {
    const targetLoc = document.querySelector(loc);
    let navItems = document.createElement("ul");

    texts.forEach((text, index) => {
        let listItem = document.createElement("li");
        let hyperLink = document.createElement("a");

        hyperLink.textContent = text;
        hyperLink.href = links[index];

        listItem.style.display = "inline-block";
        listItem.style.marginRight = "1rem";

        listItem.append(hyperLink);
        navItems.append(listItem);
    });
    targetLoc.append(navItems);
}

const createGrid = (numberOfColumns, dataArray, buildCell, location) => {   
    // Find the HTML element in which to insert the grid elements
    let container = document.querySelector(location);

    // Add class="grid" to the container element, which connects with the CSS in css/style.css to set the appropriate display property for grid layout
    container.classList.add("grid");

    // Initialize the CSS grid-template-columns property to an empty string
    container.style.gridTemplateColumns = "";

    // TODO ######### add 1fr to gridTemplateColumns an appropriate number of times to get the desired number of columns. (You don't have to use template literals for this if you don't want to.)
    container.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;

    // Loops through the data array, converts each data element into HTML by calling the buildCell function, and adds the HTML to the container.
    dataArray.forEach(cellData=>container.append(buildCell(cellData)));
}

// exports the above three functions for use in other files
export { createHeading, createNavigation , createGrid };