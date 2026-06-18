window.addEventListener("load", () => {

    document.querySelector(".hero-content")?.animate(
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


const loader = document.querySelector(".page-loader");

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ){

            e.preventDefault();

            loader.classList.add("show");

            setTimeout(() => {

                window.location.href = href;

            }, 1500);

        }

    });

});
