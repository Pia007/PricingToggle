const switchToggle = document.getElementById("toggle");
const colorToggle = document.getElementById("t-label");
const basicMonthly = document.getElementById("bs-monthly");
const basicAnnually = document.getElementById("bs-yearly");
const profMonthly = document.getElementById("pf-monthly");
const profAnnually = document.getElementById("pf-yearly");
const masMonthly = document.getElementById("ms-monthly");
const masAnnually = document.getElementById("ms-yearly");
const basicButton = document.getElementById("b");
const profButton = document.getElementById("p");
const masButton = document.getElementById("m");


switchToggle.addEventListener("click", () =>{
    if(switchToggle.checked) {
        colorToggle.style.backgroundColor = "#9397E6";    
        basicAnnually.classList.remove('hidden');
        basicMonthly.classList.add('hidden');
        profAnnually.classList.remove('hidden');
        profMonthly.classList.add('hidden');
        masAnnually.classList.remove('hidden');
        masMonthly.classList.add('hidden');
        basicButton.classList.add('bp2');
        profButton.classList.remove('bp');
        masButton.classList.add('bp2');   

    }else {
        basicAnnually.classList.add('hidden');
        basicMonthly.classList.remove('hidden');
        profAnnually.classList.add('hidden');
        profMonthly.classList.remove('hidden');
        masAnnually.classList.add('hidden');
        masMonthly.classList.remove('hidden');
        // basicButton.classList.remove('bp2');
        // profButton.classList.add('bp');
        // masButton.classList.remove('bp2');
    }   
});





