const container = document.getElementById("adhkarContainer");

fetch("data/adhkar.json")
.then(res => res.json())
.then(data => {
    renderAdhkar(data);
});

function renderAdhkar(list){
    container.innerHTML = "";
    list.forEach(item => {
        container.innerHTML += `
            <div class="card">
                <h3>${item.title}</h3>
                <p>${item.translation}</p>
                <a href="adhkar-view.html?cat=${item.category.toLowerCase()}"
                   class="btn primary-btn"
                   style="margin-top:20px;display:inline-block;">
                   Open Adhkar
                </a>
            </div>
        `;
    });
}
