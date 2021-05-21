const termAnnual = document.getElementById("term-annually");
const termMonthly = document.getElementById("term-monthly");
const hitToggle = document.getElementById("toggle");
const priceBasic = document.getElementById("bas");
const priceProfessional = document.getElementById("prof");
const priceMaster = document.getElementById("mast");
const basicButton = document.getElementById("b");
const profButton = document.getElementById("p");
const mastButton = document.getElementById("m");


console.log(priceBasic);
console.log(priceMaster);
console.log(termAnnual);


hitToggle.addEventListener("click", () =>{
    // hitToggle.checked = true;
    priceBasic.innerHTML = "$199.99";
    priceProfessional.innerHTML = "$249.99";
    priceMaster.innerHTML = "$399.99";
    basicButton.classList.add('bp');
    mastButton.classList.add('bp');
    profButton.classList.add('change');
});




