const ulList = document.querySelector('.marks')
const input = document.querySelector('.addInput')
const btn = document.querySelector('.add')
const error = document.querySelector('.errorMessage')
const weight = document.querySelector('.addWeight')
const numbers = /[0-9]/;
let numberI = 0;
const averanges = document.querySelector('.averanges')
const changeInfo = document.querySelector('.changeinfo')
let allValue = 0;
const count = document.querySelector('.count')
let flag = true;
const calc = document.querySelector('.calculate')
setInterval(() => {
    if (flag === true) {
        changeInfo.textContent = 'Mark...';
        flag = false;
    }
    else {
        changeInfo.textContent = 'Number';
        flag = true;
    }
}, 5000)

const createMark = () => {
    const liList = document.createElement('li');
    const liMessage = document.createElement('b')
    const liWeightMessage = document.createElement('b')
    const remButton = document.createElement('button');
    remButton.classList.add('rem')
    remButton.textContent = 'Remove'
    liMessage.textContent = `${input.value}; Wagi - `
    liWeightMessage.textContent = `${weight.value}`
    liList.appendChild(liMessage);
    liList.appendChild(liWeightMessage);
    liList.appendChild(remButton);
    ulList.appendChild(liList);
    console.log(`Stworzono ocene ${input.value}`);
    let intvalue = parseInt(input.value)
    numberI++;
    allValue += intvalue;
    count.textContent = numberI;

}

const checkMarkFunction = () => {
    if(input.value === '') {
        error.textContent = 'Wprowadz Liczbe';
        error.style.color = '#bccad6';
    }
    else {
        error.textContent = ''
        if(input.value.match(numbers)) {
            createMark()
        }
        else {
        error.textContent = 'Wprowadz Liczby! 0-9';
        error.style.color = '#bccad6';
        }
    }
}

btn.addEventListener('click', checkMarkFunction);

    document.addEventListener('click', (e) => {
      if(e.target.classList.contains('rem')) {
       e.target.closest('li').remove()
      numberI = numberI - 1;
   allValue = allValue - e.target.closest('li').firstChild.textContent;
   averanges.textContent = ''
   count.textContent = numberI;
}
})
calc.addEventListener('click', () => {
    let upCalc = 0;
    let downCalc = 0;
    const liAll = document.querySelectorAll('li')
    liAll.forEach((e) => {
        console.log('Dzialanie na liscie')
        console.log(e.children[1]);
        upCalc += parseInt(e.firstChild.textContent) * parseInt(e.children[1].textContent);
        downCalc += parseInt(e.children[1].textContent);
    })
    let x = upCalc / downCalc
    console.log(x);
    averanges.textContent = x.toFixed(2);
})