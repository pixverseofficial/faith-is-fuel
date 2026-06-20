const params = new URLSearchParams(window.location.search);
const surahId = params.get("id");

document.getElementById("surahName").innerText =
"Surah " + surahId;

document.getElementById("surahContent").innerHTML = `
<p>
Surah content will be added here later.
</p>
`;

fetch(`https://api.alquran.cloud/v1/surah/${surahId}`)
.then(res => res.json())
.then(data => {
    console.log(data);
});
