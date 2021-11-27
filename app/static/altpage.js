const host = `${window.location.protocol}//${window.location.host}/#`

const homebutton = document.getElementById("homebutton");
const whatbutton = document.getElementById("whatbutton");
const whybutton = document.getElementById("whybutton");
const howbutton = document.getElementById("howbutton");
const iconbutton = document.getElementById("icon");

const homedropdownbutton = document.getElementById("homedropdownbutton");
const whatdropdownbutton = document.getElementById("whatdropdownbutton");
const whydropdownbutton = document.getElementById("whydropdownbutton");
const howdropdownbutton = document.getElementById("howdropdownbutton");

const buttonLinks = [
    [homebutton, "home"],
    [whatbutton, "what"],
    [whybutton, "why"],
    [howbutton, "how"],
    [iconbutton, "home"],
    [homedropdownbutton, "home"],
    [whatdropdownbutton, "what"],
    [whydropdownbutton, "why"],
    [howdropdownbutton, "how"]
];

buttonLinks.forEach(buttons => {
    buttons[0].onclick = () => {
        window.location.assign(`${host}${buttons[1]}`);
    }
});

const dropdown = document.getElementById("dropdown");
const buttons = [...document.querySelectorAll(".dropdownbutton"), document.getElementById("dropdownicon")];
const closebutton = document.getElementById("closebutton");
var dropdownstate = false;

function open() {
    dropdown.style.display = "block";
    dropdown.style.height = "100%";
    closebutton.style.opacity = "1";
    closebutton.style.display = "grid";
    buttons.forEach(button => {
        button.style.display = "block";
        button.style.opacity = "1";
    });
    dropdownstate = true;
}

function close() {
    dropdown.style.height = "0%";
    closebutton.style.opacity = "0%";
    buttons.forEach(button => {
        button.style.opacity = "0%";
    });
    dropdownstate = false;
    setTimeout(() => {
        if (!dropdownstate) {
            dropdown.style = "";
            closebutton.style = "";
            buttons.forEach(button => {
                button.style = "";
            })
        }
    }, 500);
}

const menubutton = document.getElementById("menubutton");
function openOrClose() {
    if (dropdownstate) {
        close();
    }
    else {
        open();
    }
}
menubutton.onclick = () => {
    openOrClose();
}
closebutton.onclick = () => {
    openOrClose();
}
