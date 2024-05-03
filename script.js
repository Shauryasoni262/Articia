function openNav() {
  document.querySelector(".black").style.height = "100vh";
}

function closeNav() {
  document.querySelector(".black").style.height = "0%";
}

gsap.to("#page2 h1", {
  transform: "translateX(-600%)",
  fontWeight: "900",
  scrollTrigger: {
    trigger: "#page2", 
    scroller: "body", 
  //  markers: true, 
    start: "top 0", 
    end: "top -50%", 
    scrub: 5, 
    pin: true  
  }
});

gsap.to("#page3 img", {
        scrollTrigger: {
            trigger: "#page3",
            start: "top top",
            end: "50% 350%",
            markers:true,
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
