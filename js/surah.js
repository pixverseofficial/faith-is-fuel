const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)
.then(res => res.json())
.then(result => {

    const surah = result.data;

    document.getElementById("surahName").innerText =
    surah.englishName;

    let verses = `<div class="quran-page">`;

    // Bismillah separate
    if(surah.number !== 1 && surah.number !== 9){
        verses += `
        <div class="bismillah">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </div>`;
    }

    let ayahs = [...surah.ayahs];

    // remove bismillah from first ayah
    if(surah.number !== 1 && surah.number !== 9){
        ayahs[0].text = ayahs[0].text
        .replace("بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ","")
        .trim();
    }

    const muqattaat = [
        "الم","الر","المر","المص",
        "كهيعص","طه","طس","طسم",
        "يس","ص","حم","عسق",
        "ق","ن"
    ];

    const firstWord = ayahs[0].text.split(" ")[0];

    if(muqattaat.includes(firstWord)){
        verses += `
        <div class="muqattaat">
            ${firstWord}
            <span class="ayah-number">1</span>
        </div>
        `;

        ayahs[0].text =
        ayahs[0].text.replace(firstWord, "").trim();
    }

    ayahs.forEach((ayah,index)=>{

        let ayahNumber = index + 1;

        if(muqattaat.includes(firstWord)){
            ayahNumber = index + 2;
        }

        verses += `
        ${ayah.text}
        <span class="ayah-number">
        ${ayahNumber}
        </span>
        `;
    });

    verses += `</div>`;

    document.getElementById("surahContent").innerHTML =
    verses;
});
