const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahId}`)
.then(res => res.json())
.then(result => {

    console.log(result);

    const ayahs = result.verses;

    document.getElementById("surahName").innerText =
    "Surah " + surahId;

    let ayahsList = [...ayahs];
    let verses = "";
    verses += `<div class="quran-page">`;

    if(surahId !== "1" && surahId !== "9"){
        verses += `
        <div class="bismillah">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>
        `;

        ayahsList[0].text =
        ayahsList[0].text.replace(
        "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        ""
        ).trim();
    }

    const muqattaat = [
        "الم","الر","المر","المص",
        "كهيعص","طه","طس","طسم",
        "يس","ص","حم","عسق",
        "ق","ن"
    ];

    if(ayahsList.length){
        const firstAyah = ayahsList[0];
        const firstWord = firstAyah.text.split(" ")[0];

        if(muqattaat.includes(firstWord)){
            verses += `
            <div class="muqattaat">
                ${firstWord}
                <span class="ayah-number">1</span>
            </div>
            `;

            firstAyah.text =
            firstAyah.text.replace(firstWord,"").trim();

            verses += `
            ${firstAyah.text}
            <span class="ayah-number">2</span>
            `;

            for(let i=1; i<ayahsList.length; i++){
                verses += `
                ${ayahsList[i].text}
                <span class="ayah-number">
                    ${i+2}
                </span>
                `;
            }
        } else {
            ayahsList.forEach((ayah, index) => {
                verses += `
                ${ayah.text}
                <span class="ayah-number">
                    ${index + 1}
                </span>
                `;
            });
        }
    }

    verses += `</div>`;

    document.getElementById("surahContent").innerHTML =
    verses;

})
.catch(error => {

    console.log(error);

    document.getElementById("surahContent").innerHTML =
    "Failed to load Surah.";

});
