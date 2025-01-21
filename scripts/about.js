// TODO ########## import the functions createHeading, createNavigation, and createGrid from dom.js. You don't need to import the data from data.js, as it's not used on this page.
import { createHeading, createNavigation, createGrid } from "./modules/dom.js";
// TODO ########## use createHeading to create both h1 and h2 headings.
createHeading(1, "Influential Figures in Computer Technology", "header");
createHeading(2, "About", "main");
// TODO ########## create navigation links in the 'primary-nav' area to link back to home page of this site and to Langara home page
createNavigation(
    ["Home", "Langara"],
    ["index.html", "http://langara.ca"]
);

// This function simply takes the cellData and inserts it into a <div> as HTML. This only works if cellData contains valid HTML code.
const buildCell = cellData => {
    // make a div for this cell's data
    let container = document.createElement("div");
    // place the cell data in the div as HTML code
    container.innerHTML = cellData;
    return container;
}

// The data to be used in the grid for this page, with the above buildCell function. 
let data = [
    // TODO ########## Replace the content of the paragraph tags with your own unique text.
    `<h3>Why I'm Taking CPSC 2600</h3>
    <p>From being an Electrical Engineer, I fell in love with coding when I started to explore and learn Python, and now I want to become a web developer/programmer.</p>
    `,
    `<h3>The Person in Tech I Admire Most:</h3>
    <p>Elon Musk</p>
    `
]

// TODO ########## call createGrid to create a grid in the <main> element with one column, using the data above. 
createGrid(1, data, buildCell, "main");


