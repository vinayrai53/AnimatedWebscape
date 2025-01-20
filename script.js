var tl=gsap.timeline();

tl.from("#nav h3",{
    y:-50,
    duration:1,
    opacity:0,
    delay:0.5,
    stagger:0.5
})

tl.from("h1",{
    x:-500,
    duration:1,
    opacity:0,
    
    stagger:0.8
})
tl.from("img",{
    x:100,
    opacity:0,
    rotate:45,
    duration:2,
    stagger:0.5,

})

tl.from("#nav-bottom h3",{
    y:-50,
    duration:1,
    opacity:0,
    stagger:1
})

