class Storage{
    static addFilmToStorage(newFilm){
        let films=this.getFilmsFromStorage();//storageden aldığım filmlere
        films.push(newFilm);//newfilmden gelen filmi ekledim
        localStorage.setItem("films",JSON.stringify(films));//ve yeni verileri gönderdim
     }
     
     static getFilmsFromStorage(){
         let films;
     
         if(localStorage.getItem("films")===null){
             films=[];
         }
         else
         {
             films=JSON.parse(localStorage.getItem("films"));
         }
         return films;
     }
     
     static deleteFilmFromStrorage(filmTitle){
         let films=this.getFilmsFromStorage();
     
         films.forEach(function(film,index) {
             if(film.title===filmTitle){
                 films.splice(index,1);
             }
         });
     
         localStorage.setItem("films",JSON.stringify(films));
     }
     
     static clearAllFilmsFromStorage(){
         localStorage.removeItem("films");//films keyini kaldırıyorum
     }
}

