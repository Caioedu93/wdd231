const currentUrl = window.location.href;
console.log

const everything = currentUrl.split('?')

let formData = everything[1].split('&')

function show(cup) {
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split('=')[1].replace("%40", "@").replaceAll("+", " ").replaceAll("%2B", " ")
        }
    })
    return (result)
}


const currentDateTime = new Date().toLocaleString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true 
});


const showInfo = document.querySelector('#results')
showInfo.innerHTML = `
<p>We appreciate you taking the time to fill out our form. Your information has been received.</p>
<p>${show("first")} ${show("last")}</p>
<p>${show("title")} on ${show("business_name")} at ${currentDateTime}.</p>
<p>intending to join to the  São Paulo chamber of commerce at the ${show("membership_level")} mambership level</p>
<p>Your phone: ${show("phone")}</p> 
<p>Your Email: <a href="mailto:${show("email")}">${show("email")}</a></p>        
<p>We will review your submission and get back to you shortly.</p>
<p>Have a great day!</p>
`

