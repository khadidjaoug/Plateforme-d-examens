//bouton valider qcm
let checkAnswersButton = document.getElementById('check-answers');
let qcm = document.getElementById('qcm');

checkAnswersButton.addEventListener('click', () => {
let selectedAnswers = qcm.querySelectorAll('input[type="checkbox"]:checked');
  //  les réponses sélectionnées
      selectedAnswers.forEach((selectedAnswer) => {
          const isCorrect = selectedAnswer.value === '1';
    
          const input = selectedAnswer.parentElement;
          if (isCorrect) {
          input.classList.add('correct-answer');
          } else {
          input.classList.add('wrong-answer');
          }
    });
});

//bouton reset qcm
 const checkboxes = document.querySelectorAll('.checkbox');
 const resetAnswersButton = document.getElementById('reset-answers');

  resetAnswersButton.addEventListener('click', () => {

      for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
      console.log(checkboxes[i].className)
      checkboxes[i].className = "checkbox";
      checkboxes[i].classList.remove('correct-answer');
      checkboxes[i].classList.remove('wrong-answer');
      }   
    });

 /* function resetQuiz() {
    
    // Supprimer la couleur des réponses 
    var answers = document.querySelectorAll('.qcm_input');
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.remove('correct-answer');
      answers[i].classList.remove('wrong-answer');
    }
  }*/
  
  /*checkbox.classList.remove('correct-answer');
    checkbox.classList.remove('wrong-answer');*/

  
//bouton valider liste deroulante
const validationButton = document.getElementById("check-answers");
  validationButton.addEventListener("click", () => {
        const mySelect = document.getElementById("mySelect").children;

        for (let i = 0; i < mySelect.length; i++) {
          const select = mySelect[i].querySelector("select");
          const selectedValue = select.value === '1';
          
          if (selectedValue) {
            select.classList.add("correct-answer");
          } else {
            select.classList.add("wrong-answer");
          }
        }
    });


//bouton reset liste deroulante
const selects = document.querySelectorAll('.select');
const resetButton = document.getElementById('reset-answers');

    resetButton.addEventListener('click', () => {

    for (let i = 0; i < selects.length; i++) {
    selects[i].selected = false;
    }

    });


//bouton valider paragraphe

function checkAnswer() {
  var answer = document.getElementById("input").value;
  
  if (answer === "Javascript") {
    document.getElementById("paragraph").innerHTML = "Le Javascript est un langage de programmation qui peut s'exécuter directement dans le navigateur.";
    document.getElementById("input").style.display = "none";
    document.getElementById("button").style.display = "none";
    } else {
      alert('fausse réponse')
    }
}

//bouton reset paragraphe


//puzzle
  const pieces = document.querySelectorAll('.puzzle-piece');
  let selectedPiece = null;

  pieces.forEach(piece => {
    piece.addEventListener('dragstart', () => {
      selectedPiece = piece;
      setTimeout(() => {
        piece.classList.add('selected');
      }, 0);
    });

    piece.addEventListener('dragend', () => {
      selectedPiece.classList.remove('selected');
      selectedPiece = null;
      checkPuzzle();
    });

    piece.addEventListener('dragover', event => {
      event.preventDefault();
    });

    piece.addEventListener('drop', () => {
      if (selectedPiece) {
        const selectedOrder = parseInt(selectedPiece.getAttribute('data-order'));
        const targetOrder = parseInt(piece.getAttribute('data-order'));

        selectedPiece.setAttribute('data-order', targetOrder);
        piece.setAttribute('data-order', selectedOrder);

        const tempNode = document.createElement('div');
        piece.parentNode.insertBefore(tempNode, piece);
        selectedPiece.parentNode.insertBefore(piece, selectedPiece);
        tempNode.parentNode.insertBefore(selectedPiece, tempNode);
        tempNode.parentNode.removeChild(tempNode);
      }
    });
  });

  


























    
   
