//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")

const carica=()=> {
    let casellaTesto=document.querySelectorAll("input[type='text']")
    //ciclo for - colori
    for(let i=0; i<casellaTesto.length; i++) {
        casellaTesto[i].style.backgroundColor = "red";
        casellaTesto[i].style.color = "yellow";
    }
    //for each - scrivo dentro
    casellaTesto.forEach(
        function (element, index){
            element.value="ITIS RIVOIRA"
        }
    )
}