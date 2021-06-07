// Define the element -- The '#fooBar' can be changed to anything else.
var element = document.querySelector(".card:nth-child(1) svg circle:nth-child(2)");
var element2 = document.querySelector(".card:nth-child(2) svg circle:nth-child(2)");
var element3 = document.querySelector(".card:nth-child(3) svg circle:nth-child(2)");



// Define how much of the element is shown before something happens.
var scrollClipHeight = 0 /* Whatever number value you want... */;

// Function to change an element's CSS when it is scrolled in.
const doSomething = function doSomething() {

    /** When the window vertical scroll position plus the
     *   window's inner height has reached the
     *   top position of your element.
    */
    if (
           (window.innerHeight + window.scrollY) - (scrollClipHeight || 1200) >= 
           element.getBoundingClientRect().top
    )
        // Generally, something is meant to happen here.
        element.style = "stroke-dashoffset: 40; transition:5s;"
};


const doSomething2 = function doSomething2() {

    /** When the window vertical scroll position plus the
     *   window's inner height has reached the
     *   top position of your element.
    */
    if (
           (window.innerHeight + window.scrollY) - (scrollClipHeight || 1200) >= 
           element2.getBoundingClientRect().top
    )
        // Generally, something is meant to happen here.
        element2.style = "stroke-dashoffset: 88; transition:5s;"
};


const doSomething3 = function doSomething3() {

    /** When the window vertical scroll position plus the
     *   window's inner height has reached the
     *   top position of your element.
    */
    if (
           (window.innerHeight + window.scrollY) - (scrollClipHeight || 1200) >= 
           element3.getBoundingClientRect().top
    )
        // Generally, something is meant to happen here.
        element3.style = "stroke-dashoffset: 154; transition:5s;"
};

// Call the function without an event occurring.
doSomething();
doSomething2();
doSomething3();

// Call the function when the 'window' scrolls.
addEventListener("scroll", doSomething, false)
addEventListener("scroll", doSomething2, false)
addEventListener("scroll", doSomething3, false)