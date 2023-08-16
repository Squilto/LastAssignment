// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

var submit = document.getElementById("submit-button");
submit.addEventListener("click", submitpage);

function submitpage()
{
    const paragraph = document.createElement("p");
    document.getElementById("contact-page").innerHTML = '';
    paragraph.innerHTML = "Thank you for your message!";
    paragraph.setAttribute("class", "large-text");
    paragraph.style.textAlign = "center";
    document.getElementById("contact-page").append(paragraph);
}