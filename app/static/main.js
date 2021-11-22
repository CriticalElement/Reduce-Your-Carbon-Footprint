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
let homePageElements = document.querySelectorAll(".home");
let titleintersecting = false;
let bottomintersecting = false;
let callback = (entries) => {
    entries.forEach(entry => {
        if (entry.target.id === "hometitle") {
            if (entry.isIntersecting) {
                titleintersecting = true;
            } 
            else {
                titleintersecting = false;
            }
        }
        if (entry.target.id == "buttoncontainer") {
            if (entry.isIntersecting) {
                bottomintersecting = true;
            }
            else {
                bottomintersecting = false;
            }
        }
        if (titleintersecting || bottomintersecting) {
            homePageElements.forEach(element => {
                element.classList.add("animation");
            })
        }
        if (!bottomintersecting && !titleintersecting) {
            homePageElements.forEach(element => {
                element.classList.remove("animation");
            });
        }   
    });
};
let observer = new IntersectionObserver(
    callback, 
    {threshold: 0.2}
);
let target = document.querySelector("#hometitle");
let deactivate = document.querySelector("#buttoncontainer");
observer.observe(target);
observer.observe(deactivate);
