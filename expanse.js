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
let amount;


  function firstStep() {
    amount = amontToPay.value;

    if (amontToPay.value === '') {
        error.innerText = 'Please Enter A Value!';
        return;
    }
    amontYouGave.style.display = "block";
    nextBtn.style.display = "none";
    hide.style.display = "block";
    error.innerText = '';
  }

  nextBtn.addEventListener("click", firstStep);



  function change () {
    let totalGiven = amontYouGave.value;
    let changeTo = parseInt(totalGiven) - parseInt(amount);
    outputContainer.classList.remove('hide');

    if (amontYouGave.value === '') {
      error.innerText = 'Please Enter A Value!';
      return;
    }

    if (parseInt(totalGiven) < parseInt(amount)) {
       error.innerText = 'Amount Given Is very Low than Bill Amount!';
       return;
    }

    for (let i = 0; i < currencies.length; i++) {
      if (changeTo >= currencies[i]) {
        let note = Math.floor(changeTo / currencies[i]);
        changeTo = changeTo - currencies[i] * note;
        notes[i] = note;
      }
    }

    console.log(notes)
        for (let i = 0; i < notes.length; i++) {
            if (notes[i]) {
              console.log(`You have to pay ${notes[i]} notes of : ${currencies[i]}`)
              numNote[i].innerText = `${notes[i]}`
            }
          }
    
    amontToPay.value = "";
    amontYouGave.value = "";
    totalGiven = "";
    changeTo = "";
    error.innerText = '';
  }
   
  calculateBtn.addEventListener('click', change);
  

