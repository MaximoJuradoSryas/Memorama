let energias = ["https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20210425155929/Energía_Agua_%28Espada_y_Escudo_TCG%29.png",
"https://images.wikidexcdn.net/mwuploads/wikidex/3/37/latest/20210422133208/Energía_Planta_%28Espada_y_Escudo_TCG%29.png",
"https://images.wikidexcdn.net/mwuploads/wikidex/0/0d/latest/20220726101957/Energía_Rayo_%28Astros_Brillantes_TCG%29.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGrp_WBKa_5UD0PDNuwJC1bAY5PZn4BxxYw&usqp=CAU",
"https://images.wikidexcdn.net/mwuploads/wikidex/c/c1/latest/20210423092741/Energía_Fuego_%28Espada_y_Escudo_TCG%29.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAeIzqQNDecoxAvImkWPhaR8Q-3jsIWIGjlA&usqp=CAU"]


energias =energias.concat(energias)
energias= revolver(energias)


document.querySelectorAll(".cartas").forEach(carta => { 
    carta.addEventListener("click", () => {
        if(document.querySelectorAll(".open").length < 2){
            open(carta)
            if (document.querySelectorAll(".open").length == 2){
                 setTimeout(() => {
                    comparar()
                 }, 1000);   
                
            }
        }
         
    })

})

function open(carta){
    carta.classList.add('open')
    setTimeout(() => {
        carta.innerHTML = '<img src="'+energias[carta.id-1]+'" alt="">'
        
    }, 500);

    
}

function comparar(){
    if (document.querySelectorAll(".open")[0].innerHTML != document.querySelectorAll(".open")[1].innerHTML){
        
    
        close(document.querySelectorAll(".open")[0])
        close(document.querySelectorAll(".open")[0])

        

    }else{
        document.querySelectorAll(".open")[0].classList.replace('open','encontradas')
        document.querySelectorAll(".open")[0].classList.replace('open','encontradas')
        if(document.querySelectorAll(".encontradas").length==12){

            setTimeout(() => {
                ganar()
            }, 1000);
        }
    }
}

function close(carta){
    setTimeout(() => {
        carta.innerHTML = '<img src="./descarga.jfif" alt=""></img>'
    }, 500);
    
    
    carta.classList.replace('open','closing')
    setTimeout(() => {
        carta.classList.remove('closing')
    }, 1000);

}

function revolver(array){
        let newarray = []
        let index = null
        while(array.length >0) {
            index = Math.floor(array.length * Math.random())
            newarray.push(array[index])
            array.splice(index,1)
            
        }
        return newarray
}


function ganar(){
    alert("You won, please refresh de window")
}