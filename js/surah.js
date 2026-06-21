const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)
.then(res => res.json())
.then(result => {

    const surah = result.data;

    document.getElementById("surahName").innerText =
    surah.englishName;

    let content = "";

    surah.ayahs.forEach(ayah => {

        content += `
        ${ayah.text}
        <span class="ayah-number">
            ${ayah.numberInSurah}
        </span>
        `;
    });

    document.getElementById("surahContent").innerHTML =
    `<div class="quran-page">${content}</div>`;

});
