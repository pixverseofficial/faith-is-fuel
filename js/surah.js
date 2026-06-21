const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.quran.com/api/v4/chapters/${surahId}`)
.then(res => res.json())
.then(result => {

    console.log(result);

    const surah = result.data;

    document.getElementById("surahName").innerText =
    surah.englishName;

    const muqattaat = [
        "الم","الر","المر","المص",
        "كهيعص","طه","طس","طسم",
        "يس","ص","حم","عسق",
        "ق","ن"
    ];

    let verses = "";
    verses += `<div class="quran-page">`;

    let ayahs = [...surah.ayahs];

    if(surah.number !== 1 && surah.number !== 9){
        verses += `
        <div class="bismillah">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
        `;
    }

    if(surah.number !== 1 && surah.number !== 9){
        ayahs[0].text =
        ayahs[0].text.replace(
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        ""
        ).trim();
    }

    ayahs.forEach(ayah => {

        if(ayah.numberInSurah === 1){
            const firstWord =
            ayah.text.split(" ")[0];

            if(muqattaat.includes(firstWord)){
                verses += `
                <div class="muqattaat">
                    ${firstWord}
                </div>
                `;

                ayah.text =
                ayah.text.replace(firstWord,"").trim();
            }
        }

        verses += `
        ${ayah.text}

        <span class="ayah-number">
            ${ayah.numberInSurah}
        </span>
        `;

    });

    verses += `</div>`;

    document.getElementById("surahContent").innerHTML =
    verses;

})
.catch(error => {

    console.log(error);

    document.getElementById("surahContent").innerHTML =
    "Failed to load Surah.";

});
