import {
db,
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "./firebase.js";

window.addReel = async function(){

const title =
document.getElementById("reelTitle").value;

const description =
document.getElementById("reelDescription").value;

const link =
document.getElementById("reelLink").value;

if(
title.trim() === "" ||
description.trim() === "" ||
link.trim() === ""
){
document.getElementById("reelStatus")
.innerHTML = "❌ Fill all fields";
return;
}

try{

await addDoc(
collection(db,"reels"),
{
title:title,
description:description,
link:link,
createdAt:Date.now()
}
);

document.getElementById("reelStatus")
.innerHTML = "✅ Reel Published Successfully";

document.getElementById("reelTitle").value = "";
document.getElementById("reelDescription").value = "";
document.getElementById("reelLink").value = "";

loadReels();
loadStats();

}
catch(error){

document.getElementById("reelStatus")
.innerHTML = "❌ Upload Failed";

console.log(error);

}

}

window.addArticle = async function(){

const title =
document.getElementById("articleTitle").value;

const content =
document.getElementById("articleContent").value;

if(
title.trim() === "" ||
content.trim() === ""
){
document.getElementById("articleStatus")
.innerHTML = "❌ Fill all fields";
return;
}

try{

await addDoc(
collection(db,"articles"),
{
title:title,
content:content,
createdAt:Date.now()
}
);

document.getElementById("articleStatus")
.innerHTML = "✅ Article Published Successfully";

document.getElementById("articleTitle").value = "";
document.getElementById("articleContent").value = "";

loadArticles();
loadStats();

}
catch(error){

document.getElementById("articleStatus")
.innerHTML = "❌ Upload Failed";

console.log(error);

}

}

async function loadArticles(){

const snapshot =
await getDocs(collection(db,"articles"));

const articlesList =
document.getElementById("articlesList");

articlesList.innerHTML = "";

if(snapshot.empty){
articlesList.innerHTML = "No Articles Found";
return;
}

snapshot.forEach(articleDoc => {

const article = articleDoc.data();

articlesList.innerHTML += `

<div style="margin-bottom:15px;border-bottom:1px solid #333;padding-bottom:10px;">

<h4>${article.title}</h4>

<button
class="delete-btn"
onclick="deleteArticle('${articleDoc.id}')">

<i class="fa-solid fa-trash"></i>
Delete

</button>

</div>

`;

});

}

async function loadReels(){

const snapshot =
await getDocs(collection(db,"reels"));

const reelsList =
document.getElementById("reelsList");

reelsList.innerHTML = "";

if(snapshot.empty){
reelsList.innerHTML = "No Reels Found";
return;
}

snapshot.forEach(reelDoc => {

const reel = reelDoc.data();

reelsList.innerHTML += `

<div style="margin-bottom:15px;border-bottom:1px solid #333;padding-bottom:10px;">

<h4>${reel.title}</h4>

<button
class="delete-btn"
onclick="deleteReel('${reelDoc.id}')">

<i class="fa-solid fa-trash"></i>
Delete

</button>

</div>

`;

});

}

async function loadStats(){

const articleSnap =
await getDocs(collection(db,"articles"));

const reelSnap =
await getDocs(collection(db,"reels"));

document.getElementById("totalArticles")
.innerText = articleSnap.size;

document.getElementById("totalReels")
.innerText = reelSnap.size;

}

window.deleteArticle = async function(id){

if(!confirm("Delete this article?")) return;

await deleteDoc(
doc(db,"articles",id)
);

loadArticles();
loadStats();

}

window.deleteReel = async function(id){

if(!confirm("Delete this reel?")) return;

await deleteDoc(
doc(db,"reels",id)
);

loadReels();
loadStats();

}

loadArticles();
loadReels();
loadStats();
