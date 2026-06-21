const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
.then(res => res.json())
.then(result => {

    const surah = result.data;

    document.getElementById("surahName").innerText =
    surah.englishName;

    let verses = "";

    surah.ayahs.forEach(ayah => {

        verses += `
        ${ayah.text}

        <span class="ayah-number">
            ${ayah.numberInSurah}
        </span>
        `;

    });

    document.getElementById("surahContent").innerHTML =
    verses;

})
.catch(error => {

    console.log(error);

    document.getElementById("surahContent").innerHTML =
    "Failed to load Surah.";

});
