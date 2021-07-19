const amontToPay = document.querySelector(".amounttopay");
const amontYouGave = document.querySelector(".amountyougive");
const calculateBtn = document.querySelector(".calculate");
let output = document.querySelector(".output");
const nextBtn = document.querySelector(".next");
const hide = document.querySelector(".hide");

let currencies = [2000, 500, 100, 50, 20, 10, 1];
let notes = [0, 0, 0, 0, 0, 0, 0];
let amount;


  function firstStep() {
    amount = amontToPay.value;
    amontYouGave.style.display = "block";
    nextBtn.style.display = "none";
    hide.style.display = "block";
  }

  nextBtn.addEventListener("click", firstStep);



  function change() {
    let totalGiven = amontYouGave.value;
    let changeTo = parseInt(totalGiven) - parseInt(amount);

    for (let i = 0; i < currencies.length; i++) {
      if (changeTo > currencies[i]) {
        let note = Math.floor(changeTo / currencies[i]);
        changeTo = changeTo - currencies[i] * note;
        notes[i] = note;
      }
    }

    
        for (let i = 0; i < notes.length; i++) {
            if (notes[i]) {
              console.log(`You have to pay ${notes[i]} notes of : ${currencies[i]}`)
              output.innerText = `You have to pay ${notes[i]} notes of : ${currencies[i]}`
            }
          }

    amontToPay.value = "";
    amontYouGave.value = "";
    totalGiven = "";
    changeTo = "";
  }
   
  calculateBtn.addEventListener('click', change);
  

