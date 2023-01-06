const adviceNumber = document.querySelector('.adviceContent');
const adviceText = document.querySelector('.adviceText');
const button = document.querySelector('.changeAdvice');

const url = 'https://api.adviceslip.com/advice';

getAdviceInfo();
pressButton();

function pressButton() {
  button.addEventListener('click', event => {
    getAdviceInfo();
    button.classList.add('ativo');
    button.removeEventListener('click', event);

    setTimeout(function () {
      button.classList.remove('ativo');
      button.addEventListener('click', event);
    }, 2000);
  });
}

async function getAdviceInfo() {
  const response = await fetch(url);
  const data = await response.json();

  adviceNumber.textContent = `ADVICE #${data.slip.id}`;
  adviceText.textContent = data.slip.advice;
}
