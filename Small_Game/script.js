const questions=[
    {image:'picture2.jpg',text:'你喜欢这个发呆的可爱小熊吗？'},
    {image:'picture3.jpg',text:'你真的喜欢这个爱睡懒觉的可爱小熊吗？'},
    {image:'picture4.jpg',text:'你确定喜欢这个爱发脾气的可爱小熊吗？'},
    {image:'picture5.jpg',text:'你真的喜欢这个爱哭的可爱小熊吗？'},
    {image:'picture6.jpg',text:'真的不喜欢这个可爱小熊吗？'},
];

let currentIndex=0;
let noClickCount=0;

const startPage=document.getElementById('start-page');
const gamePage=document.getElementById('game-container');
const startBtn=document.getElementById('start-btn');
const bgMusic=document.getElementById('bg-music');
const questionImage=document.getElementById('question-image');
const questionText=document.getElementById('question-text');
const yesBtn=document.getElementById('yes-btn');
const noBtn=document.getElementById('no-btn');

const finalResult = {
    image: 'picture7.jpg',
    text: '可爱小熊也很喜欢你呀！最喜欢小宝了，抱抱小宝～'
};


function startGame(){
    startPage.style.display='none';
    gamePage.style.display='block';
    bgMusic.play();
    showQuestion();
}

function showQuestion(){
    const current=questions[currentIndex];
    questionImage.src=current.image;
    questionText.textContent=current.text;

    if (currentIndex === questions.length - 1) {
        yesBtn.textContent = '否';
        noBtn.textContent = '是';
    } 
    else {
        yesBtn.textContent = '是';
        noBtn.textContent = '否';
    }
}

function handleNo(){
    noClickCount++;

    const scale=1+(noClickCount*0.2);
    yesBtn.style.transform=`scale(${scale})`;

    currentIndex++;

    if(currentIndex<questions.length){
        showQuestion();
    }
    else{
        currentIndex=questions.length-1;
        showQuestion();
    }
}

function handleYes(){
    questionImage.src = finalResult.image;
    questionText.textContent = finalResult.text;
    document.getElementById('buttons').style.display = 'none';
}

startBtn.addEventListener('click',startGame);
noBtn.addEventListener('click',handleNo);
yesBtn.addEventListener('click',handleYes);