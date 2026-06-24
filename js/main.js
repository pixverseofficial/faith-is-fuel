const loader = document.querySelector(".page-loader");

window.addEventListener("pageshow", () => {
    if (loader) {
        loader.classList.remove("show");
    }
});

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:")
        ) {
            return;
        }

        e.preventDefault();

        if (loader) {
            loader.classList.add("show");
        }

        setTimeout(() => {
            window.location.href = href;
        }, 2500);

    });

});

// navbar scroll effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,.75)";
        navbar.style.backdropFilter = "blur(30px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }else{

        navbar.style.background = "rgba(0,0,0,.25)";
        navbar.style.boxShadow = "none";

    }

});
