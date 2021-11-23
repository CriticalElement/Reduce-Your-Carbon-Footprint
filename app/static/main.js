// buttons
const homebutton = document.getElementById("homebutton");
const whatbutton = document.getElementById("whatbutton");
const whybutton = document.getElementById("whybutton");
const howbutton = document.getElementById("howbutton");
const iconbutton = document.getElementById("icon");

const whatbuttonmain = document.getElementById("whatmainbutton");
const whybuttonmain = document.getElementById("whymainbutton");
const howbuttonmain = document.getElementById("howmainbutton");

const homepage = document.getElementById("home");
const whatpage = document.getElementById("what");
const whypage = document.getElementById("why");
const howpage = document.getElementById("how");

homebutton.onclick = () => {
    homepage.scrollIntoView({behavior: "smooth"});
}
iconbutton.onclick = () => {
    homepage.scrollIntoView({behavior: "smooth"});
}
whatbutton.onclick = () => {
    whatpage.scrollIntoView({behavior: "smooth"});
}
whybutton.onclick = () => {
    whypage.scrollIntoView({behavior: "smooth"});
}
howbutton.onclick = () => {
    howpage.scrollIntoView({behavior: "smooth"});
}

whatbuttonmain.onclick = () => {
    whatpage.scrollIntoView({behavior: "smooth"});
}
whybuttonmain.onclick = () => {
    whypage.scrollIntoView({behavior: "smooth"});
}
howbuttonmain.onclick = () => {
    howpage.scrollIntoView({behavior: "smooth"});
}

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
    }
];
console.log(animElements);
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
        {threshold: 0.2}
    );
    observer.observe(start);
    observer.observe(end);
}

animElements.forEach(element => {
    handleAnimations(element.start, element.startid, element.end, element.endid, element.elementList);
})
