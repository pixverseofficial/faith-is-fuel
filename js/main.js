window.addEventListener("load",()=>{

    document.querySelector(".hero-content").animate(
    [
        {
            opacity:0,
            transform:"translateY(60px)"
        },
        {
            opacity:1,
            transform:"translateY(0)"
        }
    ],
    {
        duration:1500,
        easing:"ease-out",
        fill:"forwards"
    });

});
