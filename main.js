window.onload=function()
{
    //other animations
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    //typeIt
    new TypeIt("#main.type-effect", {
        waitUntilVisible: true,
        speed:40
    })
        .type('Aspiring Product Manger and Front End Software Engineer')
        .go();

    new TypeIt("#major", {
        waitUntilVisible: true,
        speed:20
    })
        .type('Computer Science Major and Data Science Minor')
        // .pause(500)
        // .break()
        // .type("Data Science Minor")
        .go();


    new TypeIt("#mission",{
        waitUntilVisible:true,
        speed: 30
    })
        .pause(2500)
        .type('Discover and fulfill underlying user demands to drive better design and curate unique solutions')
        .go();

    //animate.css
    const element = document.querySelector("h1")
    //document.getElementById("experience").getElementsByClassName("mb-5")
    element.classList.add('animated', 'fadeInDown')
    //element.addEventListener('animationend', function() { doSomething() })
    //animateOnScroll
    AOS.init();

// You can also pass an optional settings object
// below listed default settings
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 400, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });

// //waypoint
//
//     var sticky = new Waypoint.Sticky({
//         element: $('#stuck')[0]
//     })
//     var waypoint = new Waypoint({
//         element: document.getElementById('stuck'),
//         handler: function(direction) {
//             alert('Triggered once, now destroyed')
//             this.destroy()
//         },
//         offset: 'bottom-in-view'
//     })
}
