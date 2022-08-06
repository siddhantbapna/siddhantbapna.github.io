var pages = {
    about : {
        name : "About",
        html : ``
    },
    skills : {
        name : "Skills",
        html : ``
    },
    achievements : {
        name : "Achievements",
        html : ``
    },
    products : {
        name : "Products",
        html : ``
    }
}

var btn = document.querySelectorAll("#header > button.page")
var page = document.querySelectorAll("#footer > div.page")
var footer = document.querySelector("#footer")

//footer.style.left = innerWidth*1.5-1 + "px"

btn.forEach((elm,i) => {
    elm.onclick = function(){
        footer.style.left = elm.getAttribute("num")
        
        btn.forEach((elm,i) => {
            elm.style.borderBottom = "0px solid black"
        })
        elm.style.borderBottom = "3px solid black"
    }
})
