const homebutton = document.getElementById("homebutton");
const whatbutton = document.getElementById("whatbutton");
const whybutton = document.getElementById("whybutton");
const howbutton = document.getElementById("howbutton");

const whatbuttonmain = document.getElementById("whatmainbutton");
const whybuttonmain = document.getElementById("whymainbutton");
const howbuttonmain = document.getElementById("howmainbutton");

const homepage = document.getElementById("home");
const whatpage = document.getElementById("what");
const whypage = document.getElementById("why");
const howpage = document.getElementById("how");

homebutton.onclick = () => {
    homepage.scrollIntoView({"behavior": "smooth"});
}
whatbutton.onclick = () => {
    whatpage.scrollIntoView({"behavior": "smooth"});
}
whybutton.onclick = () => {
    whypage.scrollIntoView({"behavior": "smooth"});
}
howbutton.onclick = () => {
    howpage.scrollIntoView({"behavior": "smooth"});
}

whatbuttonmain.onclick = () => {
    whatpage.scrollIntoView({"behavior": "smooth"});
}
whybuttonmain.onclick = () => {
    whypage.scrollIntoView({"behavior": "smooth"});
}
howbuttonmain.onclick = () => {
    howpage.scrollIntoView({"behavior": "smooth"});
}
