import data from './modules/data.js';

// TODO ########## import the functions createHeading, createNavigation, and createGrid from dom.js
import { createHeading, createNavigation, createGrid } from './modules/dom.js';
createHeading(1, "Influential Figures in Computer Technology", "header");

// TODO ########## use createHeading to create an h2 heading in the <main> tag with text 'Full List of Figures'
createHeading(2, "Full List of Figures", "main");

createNavigation(
    ["About", "Langara"],
    ["about.html", "http://langara.ca"]
);

// TODO ########## use createNavigation to create a list of links in the 'secondary-nav' area.
createNavigation(data.map(item => item.name), data.map(item => "#"+item.id), "#secondary-nav");

const buildCell = cellData => {
    // TODO ########## complete this function to take one object from the data array, convert it into HTML, and return it.
    const {id, name, contribution, image} = cellData;

    const container = document.createElement("div");
    container.setAttribute("id", id);

    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name;

    const images = document.createElement("img");
    images.src = `../images/${image}`;

    const summary = document.createElement("p");
    summary.textContent = contribution;

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", ()=>{
        container.remove();
    });

    container.append(nameHeading);
    container.append(images);
    container.append(summary);
    container.append(closeButton);

    return container;
}

createGrid(2, data, buildCell, "main");
