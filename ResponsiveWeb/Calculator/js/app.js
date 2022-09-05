let currentInput = document.querySelector('.current-input');
let answerScreen = document.querySelector('.answers');
let buttons = document.querySelectorAll('button');
let clear = document.querySelector('#clear');
let erase = document.querySelector('#erase');
let evaluate = document.querySelector('#evaluate');

let realTimeScreenValue = [];

clear.addEventListener('click', () => {
    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    answerScreen.className = 'answers';
    currentInput.className = 'current-input';
    answerScreen.style.color = "rgba(150,150,150,0.87)";
});


buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
        //I when clicked button is not erased button
        if (!btn.id.match('erase')) {
            //1l To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {
                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
            }
        }

        //11 When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }
        // When clicked but ton is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answers';
            answerScreen.className = 'current-input';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join("")) == "undefined ") {
            answerScreen.innerHTML = 0
        }
    })
})