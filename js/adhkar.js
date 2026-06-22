const adhkar = [



{

category:"Morning",

title:"Morning Remembrance",

arabic:"اللّهـمَّ بِكَ أَصْـبَحْنا",

translation:"O Allah, by You we enter the morning."

},



{

category:"Evening",

title:"Evening Remembrance",

arabic:"اللّهـمَّ بِكَ أَمْسَيْنا",

translation:"O Allah, by You we enter the evening."

},



{

category:"Sleep",

title:"Before Sleeping",

arabic:"بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",

translation:"In Your name O Allah I die and I live."

},



{

category:"Home",

title:"Entering Home",

arabic:"بِسْمِ اللَّهِ وَلَجْنَا",

translation:"In the name of Allah we enter."

},



{

category:"Food",

title:"Before Eating",

arabic:"بِسْمِ اللَّهِ",

translation:"In the name of Allah."

},



{

category:"Prayer",

title:"After Salah",

arabic:"أَسْتَغْفِرُ اللَّهَ",

translation:"I seek forgiveness from Allah."

}



];



const container = document.getElementById("adhkarContainer");

const searchInput = document.getElementById("adhkarSearch");



function renderAdhkar(list){



container.innerHTML="";



list.forEach(item=>{



container.innerHTML += `

<div class="card">



<h3>${item.title}</h3>



<p style="font-size:2rem;line-height:2;">

${item.arabic}

</p>



<p>${item.translation}</p>



</div>

`;



});



}



renderAdhkar(adhkar);



searchInput.addEventListener("input",()=>{



const term = searchInput.value.toLowerCase();



const filtered = adhkar.filter(item =>

item.title.toLowerCase().includes(term) ||

item.translation.toLowerCase().includes(term)

);



renderAdhkar(filtered);



});



document.querySelectorAll(".switch-btn").forEach(btn=>{



btn.addEventListener("click",()=>{



document.querySelectorAll(".switch-btn")

.forEach(b=>b.classList.remove("active"));



btn.classList.add("active");



const category = btn.dataset.category;



if(category==="All"){

renderAdhkar(adhkar);

return;

}



renderAdhkar(

adhkar.filter(item=>item.category===category)

);



});



});
 
