var myVar;
let loader = document.getElementById('loader')
let page = document.getElementById('myDiv')
let podlist = document.querySelector('.pods-lists')
let topBar = document.querySelector('.top-bar')
let mainPart = document.querySelector('.main-part')

function myFunction() {
    myVar = setTimeout(showPage, 300);
}

function showPage() {
    loader.style.display = "none";
    page.style.display = "flex";
}

let togglePods = false;

function justPods() {
    if (togglePods == false) {
        openPodsList();
    } else {
        closePodsList();
    }
}

function openPodsList() {
    togglePods = true;
    console.log("True");
    podlist.setAttribute("style", "display: flex;")
    topBar.setAttribute("style", "display: none;")
    mainPart.setAttribute("style", "margin-top: 60px;")
    document.querySelector('.dropdown').setAttribute("style", "margin-top: 60px")
    document.querySelector('.dropdown').setAttribute("style", "margin-bottom: 30px")
    document.querySelector('.logo').setAttribute("style", "margin-bottom: 60px;")

}

function closePodsList() {
    togglePods = false;
    console.log("False");
    podlist.setAttribute("style", "display: none;")
    topBar.setAttribute("style", "display: flex;")
    mainPart.setAttribute("style", "margin-top: 0px;")
    document.querySelector('.dropdown').setAttribute("style", "margin-top: 0px")
    document.querySelector('.dropdown').setAttribute("style", "margin-bottom: 0px")
    document.querySelector('.logo').setAttribute("style", "margin-bottom: 0px;")
}