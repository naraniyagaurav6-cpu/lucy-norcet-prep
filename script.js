let currentQuestion = 0;
let score = 0;
let currentQuestions = [];
let timer;
let timeLeft = 30;

// 🟢 STEP 1: LocalStorage se bookmarks load karna (Permanent Save)
let bookmarks = JSON.parse(localStorage.getItem('lucy_bookmarks')) || [];

const home = document.getElementById("home");
const quizBox = document.getElementById("quizBox");

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");

const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");

const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");

const nextBtn = document.getElementById("nextBtn");
const bookmarkBtn = document.getElementById("bookmarkBtn");

function selectSubject(subject){
    document.getElementById("subject").value = subject;
    startOBG();
} // Extra bracket fixed here

function startOBG(){
    home.style.display="none";
    quizBox.style.display="block";

    currentQuestion=0;
    score=0;

    const subject=document.getElementById("subject").value;

    if(subject==="obg"){
        currentQuestions=[...questions]; // Make sure 'questions' array globally defined ho
    } else {
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
        [currentQuestions[i],currentQuestions[j]]=[currentQuestions[j],currentQuestions[i]];
    }
}

function loadQuestion(){
    clearInterval(timer);
    timeLeft=30;

    const q=currentQuestions[currentQuestion];
    questionEl.innerText=q.question;
    optionsEl.innerHTML="";

    progressBar.style.width=((currentQuestion+1)/currentQuestions.length)*100+"%";
    progressText.innerText="Question "+(currentQuestion+1)+" / "+currentQuestions.length;

    q.options.forEach((option,index)=>{
        const btn=document.createElement("button");
        btn.className="option";
        btn.innerText=option;
        btn.onclick=()=>checkAnswer(index,btn);
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display="none";
    
    // Update Bookmark Button UI for current question
    updateBookmarkButtonUI();

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
    } else {
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
    } else {
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
            } else {
                showResult();
            }
        }
    },1000);
}

function showResult(){
    clearInterval(timer);
    let percentage=Math.round((score/currentQuestions.length)*100);
    let grade="";

    if(percentage>=90){ grade="A+"; }
    else if(percentage>=75){ grade="A"; }
    else if(percentage>=60){ grade="B"; }
    else if(percentage>=40){ grade="C"; }
    else { grade="Fail"; }

    questionEl.innerHTML="🎉 Quiz Completed!";
    optionsEl.innerHTML=`
        <h2>✅ Score : ${score} / ${currentQuestions.length}</h2>
        <h3>📊 Percentage : ${percentage}%</h3>
        <h3>🏆 Grade : ${grade}</h3>
        <button onclick="location.reload()" style="margin-top:20px; padding: 10px 20px; cursor:pointer;">
            🔄 Restart Quiz
        </button>
    `;

    nextBtn.style.display="none";
    scoreEl.style.display="none";
}

// 🟢 STEP 2: BOOKMARK TOGGLE LOGIC (Save & Delete)
bookmarkBtn.onclick = function() {
    const q = currentQuestions[currentQuestion];
    
    // Check if already bookmarked
    const index = bookmarks.findIndex(b => b.question === q.question);
    
    if (index === -1) {
        // Not bookmarked -> Add it
        bookmarks.push(q);
        alert("📌 Question saved permanently!");
    } else {
        // Already bookmarked -> Remove it
        bookmarks.splice(index, 1);
        alert("🗑️ Removed from bookmarks!");
    }
    
    // Sync with localStorage
    localStorage.setItem('lucy_bookmarks', JSON.stringify(bookmarks));
    updateBookmarkButtonUI();
};

// 🟢 STEP 3: Bookmark Button UI Dynamic Visual Indicator
function updateBookmarkButtonUI() {
    const q = currentQuestions[currentQuestion];
    const isBookmarked = bookmarks.some(b => b.question === q.question);
    
    if (isBookmarked) {
        bookmarkBtn.innerText = "⭐ Bookmarked";
        bookmarkBtn.style.background = "#fbbf24"; // Yellow color when active
        bookmarkBtn.style.color = "#000";
    } else {
        bookmarkBtn.innerText = "🔖 Bookmark";
        bookmarkBtn.style.background = ""; // Reset to default CSS
        bookmarkBtn.style.color = "";
    }
}
// 🟢 SCREEN NAVIGATION LOGIC

function showBookmarks(){
    // Quiz Box aur Home ko chhupao, Bookmark Box ko dikhao
    home.style.display = "none";
    quizBox.style.display = "none";
    
    const bookmarkBox = document.getElementById("bookmarkBox");
    bookmarkBox.classList.remove("hidden");
    bookmarkBox.style.display = "block";
    
    // List render karo
    renderBookmarks();
}

function goBackToHome(){
    const bookmarkBox = document.getElementById("bookmarkBox");
    if(bookmarkBox) {
        bookmarkBox.classList.add("hidden");
        bookmarkBox.style.display = "none";
    }
    
    quizBox.style.display = "none";
    home.style.display = "block";
    
    // Home screen par aakar window reload ya state manage kar sakte hain
    // Agar active state change karni ho bottom nav ki toh yahan kar sakte hain
}

// 🟢 RENDER BOOKMARKS LIST FROM LOCALSTORAGE
function renderBookmarks() {
    const listContainer = document.getElementById("bookmarksList");
    listContainer.innerHTML = ""; // Purani list clear karo
    
    if (bookmarks.length === 0) {
        listContainer.innerHTML = '<p class="empty-msg">Abhi tak koi question bookmark nahi kiya gaya hai! 🔖</p>';
        return;
    }
    
    bookmarks.forEach((q, index) => {
        const item = document.createElement("div");
        item.className = "bookmark-item";
        item.innerHTML = `
            <p><strong>Q${index + 1}:</strong> ${q.question}</p>
            <p class="correct-ans">✅ Correct Ans: ${q.options[q.answer]}</p>
            <p style="font-size:13px; color:#64748b; margin-top:5px;">📖 ${q.explanation}</p>
            <button onclick="removeSpecificBookmark(${index})" style="background:#ef4444; padding:8px; font-size:14px; margin-top:10px; width:auto; border-radius:8px;">
                🗑️ Remove
            </button>
        `;
        listContainer.appendChild(item);
    });
}

// 🟢 REMOVE BOOKMARK FROM LIST
function removeSpecificBookmark(index) {
    bookmarks.splice(index, 1);
    localStorage.setItem('lucy_bookmarks', JSON.stringify(bookmarks));
    renderBookmarks(); // List refresh karo
    alert("🗑️ Question removed from bookmarks!");
}
