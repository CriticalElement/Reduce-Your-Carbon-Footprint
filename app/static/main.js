// buttons
const homebutton = document.getElementById("homebutton");
const whatbutton = document.getElementById("whatbutton");
const whybutton = document.getElementById("whybutton");
const howbutton = document.getElementById("howbutton");
const iconbutton = document.getElementById("icon");

const whatbuttonmain = document.getElementById("whatmainbutton");
const whybuttonmain = document.getElementById("whymainbutton");
const howbuttonmain = document.getElementById("howmainbutton");

const whattowhy = document.getElementById("whattowhy");
const whytohow = document.getElementById("whytohow");

const homepage = document.getElementById("home");
const whatpage = document.getElementById("what");
const whypage = document.getElementById("why");
const howpage = document.getElementById("how");

const buttonLinks = [
    [homebutton, homepage],
    [iconbutton, homepage],
    [whatbutton, whatpage],
    [whybutton, whypage],
    [howbutton, howpage],
    [whatbuttonmain, whatpage],
    [whybuttonmain, whypage],
    [howbuttonmain, howpage],
    [whattowhy, whypage],
    [whytohow, howpage]
];

buttonLinks.forEach(buttons => {
    buttons[0].onclick = () => {
        buttons[1].scrollIntoView({behavior: "smooth"});
    }
})

// animations
let animElements = [
    {
        start: document.querySelector("#hometitle"),
        startid: "hometitle",
        end: document.querySelector("#buttoncontainer"),
        endid: "buttoncontainer",
        elementList: document.querySelectorAll(".home")
    },
    {
        start: document.querySelector("#whattitle"),
        startid: "whattitle",
        end: document.querySelector("#what"),
        endid: "what",
        elementList: document.querySelectorAll(".what")
    },
    {
        start: document.querySelector("#whytitle"),
        startid: "whytitle",
        end: document.querySelector("#why"),
        endid: "why",
        elementList: document.querySelectorAll(".why")
    },
    {
        start: document.querySelector("#howtitle"),
        startid: "howtitle",
        end: document.querySelector("#how"),
        endid: "how",
        elementList: document.querySelectorAll(".how")
    }
];
const header = document.getElementById("header");

function handleAnimations(start, startid, end, endid, elementList) {
    let header = document.getElementById("header");
    let titleintersecting = false;
    let bottomintersecting = false;
    let callback = (entries) => {
        entries.forEach(entry => {
            if (entry.target.id === startid) {
                if (entry.isIntersecting) {
                    titleintersecting = true;
                } 
                else {
                    titleintersecting = false;
                }
            }
            if (entry.target.id == endid) {
                if (entry.isIntersecting) {
                    bottomintersecting = true;
                }
                else {
                    bottomintersecting = false;
                }
            }
            if (titleintersecting || bottomintersecting) { // handle the animation for the home page and header
                elementList.forEach(element => {
                    element.classList.add("animation");
                });
                if (startid === "hometitle") {
                    header.classList.replace("headeranimation", "headeranimationrev");
                }
            }
            if (!bottomintersecting && !titleintersecting) {
                elementList.forEach(element => {
                    element.classList.remove("animation");
                });
                if (startid === "hometitle") {
                    header.classList.replace("headeranimationrev", "headeranimation");
                }
            }   
        });
    };
    let observer = new IntersectionObserver(
        callback, 
        {threshold: 0.1}
    );
    observer.observe(start);
    observer.observe(end);
}

animElements.forEach(element => {
    handleAnimations(element.start, element.startid, element.end, element.endid, element.elementList);
})

// dropdown menu
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

const homedropdownbutton = document.getElementById("homedropdownbutton");
const whatdropdownbutton = document.getElementById("whatdropdownbutton");
const whydropdownbutton = document.getElementById("whydropdownbutton");
const howdropdownbutton = document.getElementById("howdropdownbutton");
homedropdownbutton.onclick = () => {
    homepage.scrollIntoView({behavior: "smooth"});
    close();
}
whatdropdownbutton.onclick = () => {
    whatpage.scrollIntoView({behavior: "smooth"});
    close();
}
whydropdownbutton.onclick = () => {
    whypage.scrollIntoView({behavior: "smooth"});
    close();
}
howdropdownbutton.onclick = () => {
    howpage.scrollIntoView({behavior: "smooth"});
    close();
}
