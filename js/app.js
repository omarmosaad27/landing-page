

// Define Global Variables


// nav ul
let navBarList = document.querySelector("#navbar__list") 
// all section in the page
let sections = document.querySelectorAll("section")
let sectionsArray = Array.from(sections)
console.log(sectionsArray);
console.log(sectionsArray.length);



// build menu
// 1- function to make nav items dynamically depend on the number of sections in the page
function makeNav() {
    for (let i = 0; i < sectionsArray.length; i++){
        const navList = document.createElement("li");
        const navLink = document.createElement("a");
        navLink.classList.add("menu__link"); 
        // navLink.href = "#";
        navLink.setAttribute("data-nav",`section${i + 1}`)
        navLink.textContent = `section ${i + 1}`;
        navList.append(navLink);
        navBarList.append(navList);
    }
}
makeNav()

// 2-
// Scroll to section on link click// all navlinks
let links = document.querySelectorAll(".menu__link")
console.log(links);
// loop over all links
links.forEach((e) => {
    // attach click event on the target link 
    e.addEventListener("click", function () {
        // remove active class from all links
        links.forEach(link => link.classList.remove("active"))
        // scroll to section that have the same id as the data attribute
        const section = document.getElementById(e.getAttribute("data-nav"))
        section.scrollIntoView({
            behavior:"smooth"
        })
        // add active class to the link clicked
        e.classList.add("active")
    })

})

// 3-
// highlight links when reach the section 
// attach event to window on scroll
window.onscroll = function () {
    // get the window scroll y
    const scrollY = window.scrollY
    // loop over all sections
    sectionsArray.forEach((section) => {
        // get info about section (offsetHeight - offsetTop)
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute("id")
        // check if scrollY > section offsetTop && scrollY < section offsetTop + section offsetHeight
        // if true attach active class to the link that have data-nav as same as section id
        if (scrollY > sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelector(`li a[data-nav=${sectionId}]`).classList.add("active")
            // set active class section when reach it 
            section.classList.add("your-active-class")
        }else{
            document.querySelector(`li a[data-nav=${sectionId}]`).classList.remove("active")
            // remove active class when leave it 
            section.classList.remove("your-active-class")
        }
    })
}

// 4-
// toggle burger menu in small screens 

const burgerMenu = document.querySelector(".burger-menu")
const navUl = document.querySelector(".navbar__menu ul ")
// attach click event on burger menu and toggle class open
burgerMenu.addEventListener("click", () => {
    navUl.classList.toggle("open")
})

// 5-
// scroll to top button 
let scrollBtn = document.querySelector(".scroll-to-top")
window.addEventListener("scroll",function () {
    if (window.scrollY >= 400) {
        scrollBtn.style.display = "flex"
    } else {
        scrollBtn.style.display = "none"
    }
})
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0 ,
        left: 0,
        behavior:"smooth"
    })
})


