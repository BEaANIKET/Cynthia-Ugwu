
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstpageanium() {

   var t1=gsap.timeline();
   
    t1.to(".hiddenEle",{
            y:0,
            ease:Expo.easeout,
            duration:1,     
            stagger:.3
    })
    .from("#herofooter",{
            y:-10,
            opacity:0,
            ease:Expo.easeout,
            duration:2,
            delay:-1,
            stagger:.2
    })
}

var timerout=0;
function circleChaptaKro(){

    var xprev=0;
    var yprev=0;

    var xscale=1;
    var yscale=1;

    window.addEventListener("mousemove" , function(dats){

        clearTimeout(timerout);
        xscale=gsap.utils.clamp(.8,1.4,Math.abs(dats.clientX-xprev));
        yscale=gsap.utils.clamp(.8,1.4,Math.abs(dats.clientY-yprev));

        xprev=dats.clientX;
        yprev=dats.clientY;

        circleMouse(xscale,yscale);

        timerout=setTimeout(function(){
            document.querySelector('#miniCircle').style.transform= `translate(${dats.clientX}px ,${dats.clientY}px) scale(1,1)`;
        },100);
    });
}

// console.log(document.querySelector('.imgheight').clientHeight);

document.querySelectorAll(".elem").forEach(function(elem){  

    var rotate=0;
    var diffrotate=0;

    elem.addEventListener("mouseleave",function(dats){
        gsap.to(elem.querySelector("img"),{
            opacity:0,
            ease: Power3,
        })
           
    })

    elem.addEventListener("mousemove",function(dats){
        var diff=dats.clientY - elem.getBoundingClientRect().top; 
        diffrotate=dats.clientX - rotate;
        rotate=dats.clientX;

        gsap.to(elem.querySelector("img"),{
            opacity:1,
            ease: Power1,
            top:diff,
            left: dats.clientX,
            rotate: gsap.utils.clamp(-20 , 20 , diffrotate),
        })
           
    })

})



function circleMouse(xscale,yscale){
    window.addEventListener("mousemove", function(dates){
        document.querySelector('#miniCircle').style.transform= `translate(${dates.clientX}px ,${dates.clientY}px) scale(${xscale},${yscale})`;
    })
}

circleMouse();
firstpageanium();
circleChaptaKro();