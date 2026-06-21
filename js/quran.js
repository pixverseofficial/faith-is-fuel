const surahList = document.getElementById("surahList");

fetch("https://api.alquran.cloud/v1/surah")
.then(res => res.json())
.then(data => {

    surahList.innerHTML = "";

    data.data.forEach(surah => {

        surahList.innerHTML += `
        <div class="card">

            <h3>
                ${surah.number}. ${surah.englishName}
            </h3>

            <a href="surah.html?id=${surah.number}"
            class="read-more-btn">

                Open Surah

            </a>

        </div>
        `;

    });

});
