let currentUrl = window.location.href;
console.log(currentUrl);

let everything = currentUrl.split("?");
let formData = everything.length > 1 ? everything[1].split("&") : [];

function show(field) {
    let result = "";
    formData.forEach((element) => {
        if (element.startsWith(field)) {
            result = decodeURIComponent(element.split("=")[1]).replaceAll("+", " ");
        }
    });
    return result;
}

let currentDateTime = new Date().toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
});

let showInfo = document.querySelector("#results");
showInfo.innerHTML = `
    <p>We appreciate you taking the time to fill out our form. Your information has been received.</p>
    <p>${show("first_name")} ${show("last_name")}</p>
    <p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
    <p>Your Age and height:${show("age")} years old ${show("height")} cm</p>
    <p>Your phone: ${show("phone")}</p>
    <p>Position: ${show("Position")}</p>     
    <p>Preferred Foot: ${show("foot")}</p>
    <p>Submitted on ${currentDateTime}.</p>   
    <p>We will add your informations to our database.</p>
    <p>We hope see you on next game</p>
    <p>Have a great day!</p>
`;

