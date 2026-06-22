const params = new URLSearchParams(window.location.search);
const category = params.get("cat");

document.getElementById("categoryTitle").innerText = category.toUpperCase() + " ADHKAR";

const adhkarList = document.getElementById("adhkarList");

fetch("data/full-adhkar.json")
.then(res => res.json())
.then(data => {
    const list = data[category] || [];
    adhkarList.innerHTML = "";
    list.forEach(item => {
        adhkarList.innerHTML += `
            <div class="adhkar-card">
                <div class="arabic">
                    ${item.arabic}
                </div>
                <div class="english">
                    ${item.english}
                </div>
                <div class="adhkar-count">
                    ${item.count}
                </div>
            </div>
        `;
    });
});
