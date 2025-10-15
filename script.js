
const scroll = new LocomotiveScroll({
    el: document.querySelector('.Main'),
    smooth: true
});

function fistPageAnimation() {
    var time = gsap.timeline();

    time.from("#Nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
        .to(".Bouding-Element", {
            y: 0,
            duration: 2,
            ease: Expo.easeInOut,
            delay: -1,
            stagger: .2
        })
        .from(".Fist-Footer", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: Expo.easeInOut
        })
}

var timeout;

function chaptaCircale() {
    var xScale = 1;
    var yScale = 1;

    var xPrev = 0;
    var yPrev = 0;

    window.addEventListener("mousemove", function (dets) {
        clearTimeout(timeout);
        xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - xPrev);
        yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - yPrev);

        xPrev = dets.clientX;
        yPrev = dets.clientY;

        mouseCircle(xScale, yScale);
        timeout = this.setTimeout(function () {
            this.document.querySelector('.Min-Circal').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
        }, 100);
    });
}

chaptaCircale();


function mouseCircle(xScale, yScale) {
    window.addEventListener('mousemove', function (dets) {
        this.document.querySelector('.Min-Circal').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
    });
}

mouseCircle();
fistPageAnimation();


document.querySelectorAll(".Element").forEach(function (elem) {
    var rotate = 0;
    var diffRotate = 0;
    elem.addEventListener("mouseleave", function (dets) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3",
            duration: 0.5,
        });
    });


    elem.addEventListener("mousemove", function (dets) {
        var diff = dets.clientY - elem.getBoundingClientRect().top;
        diffRotate = dets.clientX - rotate;
        rotate = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: "power3",
            top: diff,
            left: dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffRotate * 0.3),
        });
    });
});
