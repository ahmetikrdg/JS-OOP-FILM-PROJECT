const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");


//Tüm eventleri yükleme
eventListeners();
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films=Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });
    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
    }
    
}


function deleteFilm(e){
    console.log(e.target);
    if(e.target.id==="delete-film")
    {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStrorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);//e.target a elementi verir bir önceki tr yi.trnin içindeki tdye gittim onun bir üst kardeşime onun bir üst kardeşine gittim yani 2 önceki tdye
        UI.displayMessages("Silme işlemi başarılı...","warning");
    }
}


function addFilm(e){
    const title= titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title===""||director===""||url===""){
        UI.displayMessages("Tüm alanları doldurunuz...","danger")
    }
    else
    {
        //Yeni film
        const newFilm= new Film(title,director,url);
        UI.addFilmToUI(newFilm);//arayüze film ekleme
        Storage.addFilmToStorage(newFilm);//stroage film ekleme
        UI.displayMessages("Film Başarıyla eklendi...","success");
    }


    UI.clearInputs(titleElement,urlElement,directorElement);
    e.preventDefault();
}