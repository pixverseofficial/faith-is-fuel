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
        }, 1000);

    });

});
