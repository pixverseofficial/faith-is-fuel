window.addEventListener("load", () => {

    document.querySelector(".hero-content")?.animate(
        [
            {
                opacity: 0,
                transform: "translateY(60px)"
            },
            {
                opacity: 1,
                transform: "translateY(0)"
            }
        ],
        {
            duration: 1500,
            easing: "ease-out",
            fill: "forwards"
        }
    );

});

/* PAGE LOADER */

const loader = document.querySelector(".page-loader");

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        if (
            href &&
            !href.startsWith("#") &&
            !href.startsWith("http")
        ) {

            e.preventDefault();

            loader.classList.add("show");

            setTimeout(() => {

                window.location.href = href;

            }, 1000);

        }

    });

});

/* LIBRARY TAB SWITCH */

function showTab(tabId) {

    document.querySelectorAll(".library-tab")
        .forEach(tab => {
            tab.style.display = "none";
        });

    document.getElementById(tabId)
        .style.display = "block";

    document.querySelectorAll(".switch-btn")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    event.target.classList.add("active");
}

/* Q&A DATABASE */

const questions = [

    {
        question: "What is Salah?",
        answer: "Salah is the obligatory prayer performed five times daily."
    },

    {
        question: "What is Sabr?",
        answer: "Sabr means patience and perseverance for the sake of Allah."
    },

    {
        question: "Music Haram Ano?",
        answer: "Different scholarly opinions exist. Consult authentic scholars for detailed guidance."
    }

];

/* SEARCH FUNCTION */

function searchQuestion() {

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const area = document
        .getElementById("resultArea");

    const result = questions.find(q =>
        q.question.toLowerCase().includes(input)
    );

    if (result) {

        area.innerHTML = `
            <h3>${result.question}</h3>
            <p>${result.answer}</p>
        `;

    } else {

        area.innerHTML = `
            <h3>No Results Found</h3>
            <p>You may submit this question later.</p>
            <button class="btn primary-btn">
                Submit Question
            </button>
        `;

    }

}
