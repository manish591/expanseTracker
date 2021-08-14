const amontToPay = document.querySelector(".amounttopay");
const amontYouGave = document.querySelector(".amountyougive");
const calculateBtn = document.querySelector(".calculate");
let output = document.querySelector(".output");
const nextBtn = document.querySelector(".next");
const hide = document.querySelector(".hide");
const numNote = document.querySelectorAll('.numofnotes');
const error = document.querySelector('.error');
const outputContainer = document.querySelector('.outputContainer');

let currencies = [2000, 500, 100, 20, 10, 5, 1];
let notes = [0, 0, 0, 0, 0, 0, 0];


function clearNote () {
  for(let notes of numNote){
    notes.innerText = "";
 }
}

  function firstStep() {

    if (amontToPay.value === '') {
        error.innerText = 'Please Enter A Value!';
        return;
    }
   
    if (Math.sign(Number(amontToPay.value)) === -1 || Number(amontToPay.value) === 0) {
      error.innerText = 'Please enter a value 1 or more than 1!';
      return;
    }

    amontYouGave.style.display = "block";
    nextBtn.style.display = "none";
    hide.style.display = "block";
    error.innerText = '';
  }

  nextBtn.addEventListener("click", firstStep);



  function change () {
    clearNote();
    let totalBillAmount = Number(amontToPay.value);
    let totalGiven = Number(amontYouGave.value);
    let changeTo = totalGiven - totalBillAmount;
    outputContainer.classList.remove('hide');


    if (amontToPay.value === '') {
      error.innerText = 'Please Enter A Value!';
      outputContainer.classList.add('hide');
      return;
    }
 
    if (Math.sign(Number(amontToPay.value)) === -1 || Number(amontToPay.value) === 0) {
    error.innerText = 'Please enter a value 1 or more than 1!';
    outputContainer.classList.add('hide');
    return;
    }

    if (amontYouGave.value === '') {
      error.innerText = 'Please Enter A Value!';
      outputContainer.classList.add('hide');
      return;
    }

    if (Math.sign(totalGiven) === -1 || totalGiven === 0) {
      error.innerText = 'Please enter a value 1 or more than 1!';
      outputContainer.classList.add('hide');
      return;
    }

    if (totalGiven < totalBillAmount) {
       error.innerText = 'Amount Given Is very Low than Bill Amount!';
       outputContainer.classList.add('hide');
       return;
    }

    if (totalGiven === totalBillAmount) {
      error.innerText = 'No amount is left to return.';
      outputContainer.classList.add('hide');
      return;
   }

    error.innerText = '';
    for (let i = 0; i < currencies.length; i++) {
      if (changeTo >= currencies[i]) {
        notes[i] = Math.floor(changeTo / currencies[i]);
        changeTo = changeTo - currencies[i] * notes[i];
        numNote[i].innerText = `${notes[i]}`
      }
    }

    console.log(notes);
  }
   
  calculateBtn.addEventListener('click', change);
  
