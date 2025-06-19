/*
Top Up Assignment. Website builder
Author: Maripi Maluenda
Date: June 19 2025
Description: Website which content and style is coming directly from the script

*/
window.onload = function () {
    //-----------------HTML-------------------
    //Create the body elements
    const div = document.createElement("div");
    const txt = document.createElement("p");
    const btn = document.createElement("button");

    //Wrap up both elements in a Div for better control
    div.appendChild(txt);
    div.appendChild(btn);

    //Add the text
    txt.innerHTML = "Hello ";
    btn.innerHTML = "Professor";

    //Add event listener
    btn.onclick = toggleClick;

    //Actually add the contents to the body
    document.body.appendChild(div);

    //-----------------STYLE-------------------

    //Add classes to the elements;
    div.classList.add("dv");
    txt.classList.add("txt");
    btn.classList.add("btn");

    //Creating a style element
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
    body{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dv{
        display: flex;
        flex-direction: row;
    }
    .txt{
        font-family: Arial, Helvetica, sans-serif;
        color: red;
        font-weight: bold;
        margin: 1em;
        font-size: 2em;
    }
    .btn{
        font-size: 2em;
        padding:.5em;
    }
        `;
    //Adding the style element to the head of the document.
    document.head.appendChild(styleElement);
};

function toggleClick() {
    setTimeout(() => {
        alert("This is Maripi");
    }, 1000);
}
