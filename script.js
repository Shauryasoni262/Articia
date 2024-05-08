function openNav() {
  document.querySelector(".black").style.height = "100vh";
}

function closeNav() {
  document.querySelector(".black").style.height = "0%";
}
var tl4 = gsap.timeline()
tl4.from("#logo a",{
  y:-30,
  duration:1,
//  opacity:0,
  delay:0.5,
  stagger:0.1
})

tl4.from(".overlay-content a",{
  y:-20,
  duration:1,
  opacity:.2
})
tl4.from(".explore-word h1",{
  y:-5,
  duration:0.5,
  opacity:0
})
tl4.from("#img2",{
  x:5,
  duration:0.5,
  opacity:0
})

tl4.from("#img1",{
  x:-5,
  duration:0.3,
  opacity:0
})
tl4.from("#img3",{
  x:10,
  duration:0.1,
  opacity:0,
  stagger:0.1
})
tl4.from(".scroll",{
  y:10,
  duration:0.5,
  opacity:0,
  stagger:0.1
})

var tl3 = gsap.timeline()
tl3.to("#page2 .text-h2", {
  transform: "translateX(-200%)",
  fontWeight: "700",
  scrollTrigger: {
    trigger: "#page2", 
    scroller: "body", 
  //  markers: true, 
    start: "top 0", 
    end: "top 60%", 
    scrub: 3, 
    pin: true  
  }
});
tl3.to("#page2 .text-h3", {
  transform: "translateX(-150%)",
  fontWeight: "700",
  scrollTrigger: {
    trigger: "#page2", 
    scroller: "body", 
  markers: true, 
    start: "top -30%", 
    end: "top -60%", 
    scrub: 3, 
    pin: true  
  }
});

gsap.to("#page3 img", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top top",
            end: "50% 350%",
           // markers:true,
        //  pin: true,
            scrub: 5
        },
        width: "100vw",
        height: "100vh",
        ease: "none"
    });

var tl = gsap.timeline();
tl.from(".scroll", {
  y: 30, 
  repeat: -1, 
  duration: 0.7, 
  yoyo: true 
});

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page4",
  start:"top 80%",
  end:"bottom 20%",
  toggleActions:"restart none none none",
  },
  yoyo:true,
  
});
tl2.to("#create1", {
y:"0%",
  duration:0.7,
  ease: "power3.out", 
  stagger: {
    amount: 0.3, 
  },
})
tl2.to("#create2", {
  y:"0%",
  duration:0.7,
  stagger:0.2,
})
tl2.to("#create3", {
  y:"0%",
  duration:0.7,
  stagger:0.2,
})
tl2.to("#create4", {
  y:"0%",
  duration:0.7,
  stagger:0.2,
});
