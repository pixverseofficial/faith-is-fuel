window.addEventListener("load",()=>{

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

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        const href = this.getAttribute("href");

        if(
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ){

            e.preventDefault();

            loader.classList.add("show");

            setTimeout(()=>{

                window.location.href = href;

            },1000);

        }

    });

});
function showTab(tabId){

document
.querySelectorAll(".library-tab")
.forEach(tab=>{
tab.style.display="none";
});

document
.getElementById(tabId)
.style.display="block";

document
.querySelectorAll(".switch-btn")
.forEach(btn=>{
btn.classList.remove("active");
});

event.target.classList.add("active");
}

function searchQuestion(){

let q=
document
.getElementById("searchInput")
.value
.toLowerCase();

let result=
document.getElementById("resultArea");

if(q.includes("music")){

result.innerHTML=`
<h3>Music Haram Ano?</h3>
<p>Sample answer here...</p>
`;

}else{

result.innerHTML=`
<h3>No Results Found</h3>
<p>You may submit this question later.</p>
`;
}
}
