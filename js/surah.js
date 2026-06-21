const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahId}`)
.then(res => res.json())
.then(result => {

    console.log(result);

    const ayahs = result.verses;

    document.getElementById("surahName").innerText =
    "Surah " + surahId;

    const muqattaat = [
        "الم","الر","المر","المص",
        "كهيعص","طه","طس","طسم",
        "يس","ص","حم","عسق",
        "ق","ن"
    ];

    let verses = "";
    verses += `<div class="quran-page">`;

    let ayahsList = [...ayahs];

    if(surahId !== "1" && surahId !== "9"){
        verses += `
        <div class="bismillah">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
        `;
    }

    if(surahId !== "1" && surahId !== "9"){
        ayahsList[0].text =
        ayahsList[0].text.replace(
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        ""
        ).trim();
    }

    ayahsList.forEach(ayah => {

        if(ayah.verse_number === 1){
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
            ${ayah.verse_number}
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
