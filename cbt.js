let currentQues = 0
let quizTimer;

let quesArr = [
  {question: 'Which HTML tag is used to define an internal style sheet?',
    opt1: '<script>',
    opt2: '<css>',
    opt3: '<style>'
  },
  {question: 'Which is correct CSS syntax?',
    opt1: 'body:color=black',
    opt2: '{body:color=black;}',
    opt3: 'body{color:black;}'
  },
  {question: 'How do you insert a comment in a CSS file?',
    opt1: '// this is a comment',
    opt2: '//this is a comment//',
    opt3: '/*this is a comment*/'
  },
  {question: 'Which property is used to change the background color?',
    opt1: 'background-color',
    opt2: 'color',
    opt3: 'bgcolor'
  },
  {question: 'Which CSS property is used to change the text color of an element?',
    opt1: 'fgcolor',
    opt2: 'text-color',
    opt3: 'color'
  }
]

function displayQues() {
  quest.innerText = quesArr[currentQues].question
  ans1.value = quesArr[currentQues].opt1
  label1.innerText = quesArr[currentQues].opt1
  ans2.vaue = quesArr[currentQues].opt2
  label2.innerText = quesArr[currentQues].opt2
  ans3.value = quesArr[currentQues].opt3
  label3.innerText = quesArr[currentQues].opt3
  head.innerText = `Question ${currentQues + 1} of ${quesArr.length}`
}

displayQues()

function next() {
  
currentQues < quesArr.length -1 ? currentQues++ : currentQues = quesArr.length -1

  displayQues();
}

function prev() {

  currentQues !== 0 ? currentQues-- : currentQues = 0
    

  displayQues();
}

function timer() {
  let mins = 0
  let secs = 0

 quizTimer = setInterval(() => {
    if (secs < 59) {
      secs++
    } else {
      mins++
      secs = 0
    }
  timming.innerText = `${padZero(mins)}:${padZero(secs)}`;
  }, 1000);
}

function padZero(num) {
  return num.toString().padStart(2, '0');
}

let timeOut = setTimeout(() => {
  quizDiv.style.display = 'none'
  timeUp.style.display = 'flex'
  clearInterval(quizTimer)
}, 40000);

function subMit() {
  window.location.href = 'submit.html'
  clearTimeout(timeOut)
}

function startQuiz() {
  window.location.href = 'cbt.html'
}

timer()