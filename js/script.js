const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();    

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    
    localStorage.setItem('lead',  JSON.stringify( {name: name, email: email} ) )

    showLoad()
    
    setTimeout( () => showLoad(false),  3000 )
})


const showLoad = ( showDisplay = true ) => {
    document.getElementById("content").style.display = showDisplay ? "none" : "block" ;
    document.getElementById("loader").style.display = showDisplay ? "block" : "none";

    if( showDisplay == true )
        clearForm();

    if( showDisplay == false ) 
        alert("Cadatro efutuado com sucesso");
        
}

const clearForm = () => {   
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
}