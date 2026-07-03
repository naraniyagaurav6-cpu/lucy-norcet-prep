let currentQuestion = 0;
let score = 0;
let currentQuestions = [];

let timer;
let timeLeft = 30;

const home = document.getElementById("home");
const quizBox = document.getElementById("quizBox");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const timerEl = document.getElementById("timer");

const scoreEl = document.getElementById("score");

const nextBtn = document.getElementById("nextBtn");

function startOBG(){

home.style.display="none";
quizBox.style.display="block";

currentQuestion=0;
score=0;

const subject=document.getElementById("subject").value;

if(subject==="obg"){
currentQuestions=[...questions];
}else{
alert("Questions Coming Soon...");
location.reload();
return;
}

shuffleQuestions();

loadQuestion();

}
function shuffleQuestions(){

for(let i=currentQuestions.length-1;i>0;i--){

const j=Math.floor(Math.random()*(i+1));

[currentQuestions[i],currentQuestions[j]]=
[currentQuestions[j],currentQuestions[i]];

}

}

function loadQuestion(){

clearInterval(timer);

timeLeft=30;

const q=currentQuestions[currentQuestion];

questionEl.innerText=q.question;

optionsEl.innerHTML="";

progressBar.style.width=
((currentQuestion+1)/currentQuestions.length)*100+"%";

progressText.innerText=
"Question "+(currentQuestion+1)+" / "+currentQuestions.length;

q.options.forEach((option,index)=>{

const btn=document.createElement("button");

btn.className="option";

btn.innerText=option;

btn.onclick=()=>checkAnswer(index,btn);

optionsEl.appendChild(btn);

});

nextBtn.style.display="none";

startTimer();

}
function checkAnswer(selected,btn){

clearInterval(timer);

const correct=currentQuestions[currentQuestion].answer;

document.querySelectorAll(".option").forEach(button=>{
button.disabled=true;
});

if(selected===correct){

btn.classList.add("correct");

score++;

}else{

btn.classList.add("wrong");

document.querySelectorAll(".option")[correct].classList.add("correct");

}

scoreEl.innerText="Score : "+score;

const exp=document.createElement("p");

exp.style.marginTop="15px";

exp.style.fontWeight="bold";

exp.innerHTML="📖 Explanation : "+currentQuestions[currentQuestion].explanation;

optionsEl.appendChild(exp);

nextBtn.style.display="block";

}

nextBtn.onclick=function(){

currentQuestion++;

if(currentQuestion<currentQuestions.length){

loadQuestion();

}else{

showResult();

}

};
function startTimer(){

clearInterval(timer);

timeLeft=30;

timerEl.style.color="#2563eb";
timerEl.innerText="⏱️ "+timeLeft+"s";

timer=setInterval(()=>{

timeLeft--;

timerEl.innerText="⏱️ "+timeLeft+"s";

if(timeLeft<=10){
timerEl.style.color="red";
}

if(timeLeft<=0){

clearInterval(timer);

currentQuestion++;

if(currentQuestion<currentQuestions.length){

loadQuestion();

}else{

showResult();

}

}

},1000);

}

function showResult(){

clearInterval(timer);

let percentage=Math.round((score/currentQuestions.length)*100);

let grade="";

if(percentage>=90){
grade="A+";
}else if(percentage>=75){
grade="A";
}else if(percentage>=60){
grade="B";
}else if(percentage>=40){
grade="C";
}else{
grade="Fail";
}

questionEl.innerHTML="🎉 Quiz Completed!";

optionsEl.innerHTML=`
<h2>✅ Score : ${score} / ${currentQuestions.length}</h2>
<h3>📊 Percentage : ${percentage}%</h3>
<h3>🏆 Grade : ${grade}</h3>

<button onclick="location.reload()">
🔄 Restart Quiz
</button>
`;

nextBtn.style.display="none";
scoreEl.style.display="none";

}