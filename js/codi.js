TweenMax.to("#esglesia", 3, {
    morphSVG: {
        shape: "#mort",
        type: "rotational"
    },
    repeat: -1,
    repeatDelay: 3,
    yoyo: true,
    ease: Power0.easeNone
});

//TweenMax.to("#globus", 3, {
//    morphSVG: {
//        shape: "#panyals",
//        shapeIndex: 12,
//        type: "rotational"
//    },
//    repeat: -1,
//    repeatDelay: Math.random()*4,
//    yoyo: true,
//    ease: Power0.easeNone
//});

let tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 1
});

tl.to("#globus", 3, {
    morphSVG: {
        shape: "#panyals",
        shapeIndex: 12,
        type: "rotational"
    },
    ease: Power0.easeNone
})
    .to("#globus", 3, {
    morphSVG: {
        shape: "#globus",
        shapeIndex: 12,
        type: "rotational"
    },
    ease: Power0.easeNone
},  "+=1");