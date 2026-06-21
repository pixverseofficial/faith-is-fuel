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

    ayahs.forEach((ayah,index)=>{

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
});
