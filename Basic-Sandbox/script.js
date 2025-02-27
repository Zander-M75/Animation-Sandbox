document.getElementById("animateBtn").addEventListener("click", () => {
    gsap.to(".box", {
        duration: 1,
        x: 100,
        rotation: 360,
        stagger: 0.2,
        ease: "bounce.out"
    });

    gsap.to("#icon", {
        duration: 1.5,
        scale: 1.5,
        rotation: 360,
        ease: "elastic.out(1, 0.3)"
    });
});
