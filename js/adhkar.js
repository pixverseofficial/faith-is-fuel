const container = document.getElementById("adhkarContainer");

function renderAdhkar(list){

    container.innerHTML = "";

    list.forEach(item => {

        container.innerHTML += `
            <a href="adhkar-view.html?cat=${item.category.toLowerCase()}" class="card" style="text-decoration:none;color:white;">

                <h3>${item.title}</h3>

                <p>${item.translation}</p>

            </a>
        `;
    });
}
