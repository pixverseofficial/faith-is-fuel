const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

fetch(`https://api.alquran.cloud/v1/surah/${surahId}/quran-uthmani`)
.then(res => res.json())
.then(result => {

```
const surah = result.data;

document.getElementById("surahName").innerText =
surah.englishName;

let ayahs = [...surah.ayahs];

let html = `<div class="quran-page">`;

if(surah.number !== 1 && surah.number !== 9){

    html += `
    <div class="bismillah">
        بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </div>
    `;

    ayahs[0].text =
    ayahs[0].text.replace(
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

if(ayahs.length){

    const firstAyah = ayahs[0];

    const firstWord =
    firstAyah.text.split(" ")[0];

    if(muqattaat.includes(firstWord)){

        html += `
        <div class="muqattaat">
            ${firstWord}
            <span class="ayah-number">1</span>
        </div>
        `;

        firstAyah.text =
        firstAyah.text.replace(firstWord,"").trim();

        html += `
        ${firstAyah.text}
        <span class="ayah-number">2</span>
        `;

        for(let i=1;i<ayahs.length;i++){

            html += `
            ${ayahs[i].text}
            <span class="ayah-number">
                ${i+2}
            </span>
            `;
        }

    }else{

        ayahs.forEach(ayah=>{

            html += `
            ${ayah.text}
            <span class="ayah-number">
                ${ayah.numberInSurah}
            </span>
            `;

        });
    }
}

html += `</div>`;

document.getElementById("surahContent").innerHTML =
html;
```

})
.catch(error => {

```
console.log(error);

document.getElementById("surahContent").innerHTML =
"Failed to load Surah.";
```

});
