const params = new URLSearchParams(window.location.search);

const surahId = params.get("id");

document.getElementById("surahName").innerText =
"Surah " + surahId;

document.getElementById("surahContent").innerHTML = `
<p>
Surah content will be added here later.
</p>
`;
