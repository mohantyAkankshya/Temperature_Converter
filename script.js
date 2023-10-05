let celInput=document.getElementById("cel");
let ferInput=document.getElementById("far");
let kelInput=document.getElementById("kel");
let button=document.getElementById("btn");

celInput.addEventListener("input",()=>{
    let cel=parseFloat(celInput.value);
    let fer=((cel*9/5)+32).toFixed(1);
    let kel=(273.15+cel).toFixed(2);

    ferInput.value=fer;
    kelInput.value=kel;
})


ferInput.addEventListener("input",()=>{
    let fer=parseFloat(ferInput.value);
    let cel=((fer-32)*5/9).toFixed(3); 
    let kel=(((fer-32)*5/9)+273.15).toFixed(2); 

    celInput.value=cel;
    kelInput.value=kel;
})

kelInput.addEventListener("input",()=>{
    let kel=parseFloat(kelInput.value);
    let fer=((kel-273.15)*9/5+32).toFixed(2);
    let cel=(kel-273.15).toFixed(3);

    ferInput.value=fer;
    celInput.value=cel;
})

button.addEventListener("click",()=>{
    celInput.value="";
    ferInput.value="";
    kelInput.value="";
})
    