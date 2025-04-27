//preloader data

//this is the preloading variable assiged through an id 
const preloader = document.getElementById("preloader")

//this is the eventlistener when acts an loading the document this function which has setTimeOut function gets runned where it disables the div preloader which was previously enable that was shown on the screen
window.addEventListener("load", function () {
    setTimeout(() => {
        preloader.style.display = "none";
    },1800)
})
//const assigned to background variable which an array containing images links
const background = ['images/bg1.jpeg', 'images/bg2.jpeg', 'images/bg3.jpeg', 'images/bg4.jpeg', 'images/bg5.jpg', 'images/bg6.jpeg', 'images/bg7.jpeg', 'images/bg8.jpeg', 'images/bg9.jpg', 'images/bg10.jpg', 'images/3792297.jpg', 'images/9220917 (1).jpg', 'images/1606363.jpg', 'images/1606363.jpg', 'images/1606363.jpg', 'images/9220926.jpg']

//a button which is accessed with and id changeBg
let changeBG = document.getElementById("changeBg")

//a event listener is add to that changeBg button which takes the function changeBackground()
changeBG.addEventListener("click", function () {
    changeBackground()
})
//function to change background randomly using Math.random function which ranges from[0 to 1] and it is multiplied with length of the background array indexes where the value is given to the variable named randomIndex. then that variable which is nothing but a index value given to background array, that is a particular image number in an array ex:background[3], and that thing is assigned to a variable  called randomBg. Now we need to give back the value which we got to that and convert that index to url and assign to element using DOM.
function changeBackground() {
    const randomIndex = Math.floor(Math.random() * background.length);
    const randomBg = background[randomIndex];
    document.body.style.backgroundImage = `url('${randomBg}')`;
}
changeBackground();// this function is called here because, to set the initial background to be random on page.

//timer
//accessing the continousTimer id of that element
const continousTimer = document.getElementById("continousTimer")
//this variable is used to asigning a constructor which is specialized method.
let startTime
//this variable is assigned to a setInterval() function 
let timeInterval

//this function is takes an argument i.e., duration, now continousTimer variable is set to '0' initially, startTime variable takes the current Date() constructor because the setInterval is not accurate in giving time where it gives around [1sec=0.8] like that so.., constructor is used to take current time.
//then timeInterval runs a function where it is assigning the initial value of that varibale to getTimerTime() function. which is calculated time function(1,2,3,4,..). Now the if condition is comes into picture and checks the conditon of the getTimerTime() and duration time which are the radio type value. clearInterval is used to clear the running time function. then displays the final results will be happen after of word comption,scores, that are enable here.
function continousTimerFun(duration) {
    continousTimer.innerText = 0
    startTime = new Date()
    timeInterval = setInterval(() => {
        continousTimer.innerText = getTimerTime(duration)
        if (getTimerTime(duration) >= duration) {
            clearInterval(timeInterval);
            updateFinalResults();
            document.getElementById("scoreBoard").style.visibility = "visible"
            scoreBoard();
        }
    }, 1000)
}
//durations are nothing but the values of the radio type inputs when user need to play that duration of time. 
function getTimerTime(duration) {
    return Math.floor((new Date() - startTime) / 1000)
}

//async and await will return promises, which is asynchronous nature of javaScript This allows you to write asynchronous code that looks synchronous. The await keyword is used to pause the execution of an async function until a promise is settled.
async function getDataRandom() {
    const response = await fetch('https://random-word-api.herokuapp.com/word?length=5'); //fetch the data using link 
    const data = await response.json();// is a method in JavaScript used to extract the JSON body content from a Response object obtained from an HTTP request, specifically when using the Fetch API or other similar APIs that return promises.
    return data[0]; // Return the first word from the array
}

//Accessing all the box elements through id and const is used to assign the variable on once, and they can't be reassigned later
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");

//to display each seperate word in the box in on single div through id boxName
const boxName = document.getElementById('boxName');
//this variable is used to track the box which we are currently on it and initially the box will be 1, let is used to declare the varible because they can be reassigned later.
let currentButton = 1;

//after completion of word the next word will be fetched using this function
async function renderNextWord() {
    const word = await getDataRandom();
    boxName.innerText = word;
    box1.innerText = word[0];
    box2.innerText = word[1];
    box3.innerText = word[2];
    box4.innerText = word[3];
    box5.innerText = word[4];
    currentButton = 1; // Reset current button to the first button
    enableNextButton(); // Enable the first button
}
// Function to enable the next button 
function enableNextButton() {
    switch (currentButton) {
        case 1:
            box1.disabled = false;
            break;
        case 2:
            box2.disabled = false;
            break;
        case 3:
            box3.disabled = false;
            break;
        case 4:
            box4.disabled = false;
            break;
        case 5:
            box5.disabled = false;
            break;
    }
}
//whenever the box is pressed this function is used to indicate the pressed button.
//it takes the argument keyressBtn which is the class name of the box of particular boxclass. and setTimeOut is used to click remove the style for the box at 0.3 seconds.
function applyBoxPressedStyle(keypressBtn) {
    var boxClass = document.querySelector("." + keypressBtn)
    boxClass.classList.add("pressed")
    setTimeout(function () {
        boxClass.classList.remove("pressed")
    }, 100)
}
//not only keypress, but also click sequence order of click is also acceptable
// Attach click event listeners to the boxes
// when 1 button is clicked current=1 will be triggered and innerText of the button will be accessed. and the button gets enabled and indication will be accessed though the function called applyBoxPressedStyle()
box1.addEventListener("click", function () {
    if (currentButton === 1) {
        switchAudioKeys(this.innerText);
        currentButton++;
        enableNextButton();
        applyBoxPressedStyle(this.innerText);
    }
});
box2.addEventListener("click", function () {
    if (currentButton === 2) {
        switchAudioKeys(this.innerText);
        currentButton++;
        enableNextButton();
        applyBoxPressedStyle(this.innerText);
    }
});
box3.addEventListener("click", function () {
    if (currentButton === 3) {
        switchAudioKeys(this.innerText);
        currentButton++;
        enableNextButton();
        applyBoxPressedStyle(this.innerText);
    }
});
box4.addEventListener("click", function () {
    if (currentButton === 4) {
        switchAudioKeys(this.innerText);
        currentButton++;
        enableNextButton();
        applyBoxPressedStyle(this.innerText);
    }
});
box5.addEventListener("click", function () {
    if (currentButton === 5) {
        switchAudioKeys(this.innerText);
        currentButton++;
        enableNextButton();
        applyBoxPressedStyle(this.innerText);
    }
    if (currentButton > 4) {
        renderNextWord();
        newCompletedWordCount++;
        score += 10
        updateScore();
        updateCompletedWordCount();

    }
});
//start button
//Start button is used to proceed the game when it is clicked the randowm words will be generated coming from an API 
const startButton = document.getElementById('startButton');
// attach click event listener to the start button
startButton.addEventListener("click", function () {
    renderNextWord();
    const selectedRadio = document.querySelector('input[name="minutes"]:checked');
    const duration = parseInt(selectedRadio.value);
    continousTimerFun(duration);
});
//informarion Div
const infoDiv=document.getElementById("infoDiv")
//Documentation button
const infoButton=document.getElementById("infoButton")
infoButton.addEventListener("click",function(){
    infoDiv.style.visibility="visible"
})

//goBack() fuction 
document.getElementById("goBack").addEventListener("click",function (){
   infoDiv.style.visibility="hidden"
})
//when the last box is clicked or pressed then that means the word tying is completed and the scores should be updated by add +1 to it, though completedWordCountDiv will display the score of number of words.
const completedWordCountDiv = document.getElementById("completedWordCountDiv");
//the scoreDiv will be used here to diplay the score which means if 1 complete word is equal to +10 points. 
const scoreDiv = document.getElementById("score");
//this variables is is used to update the words complition and scores 
let newCompletedWordCount = 0;
let score = 0;
//attach keypress event listener to the document
document.addEventListener("keypress", function (e) {
    const pressedKey = e.key.toLowerCase(); // convert the pressed key to lowercase
    const boxesContent = [box1.innerText, box2.innerText, box3.innerText, box4.innerText, box5.innerText];//array of box inner text 
    const currentBoxContent = boxesContent[currentButton - 1];//this give the index values of boxContent and given to variable currentBoxContent
    if (pressedKey === currentBoxContent) { //pressed key and currentBoxContent will be equal then the following will be posible
        switchAudioKeys(pressedKey);//fuction which contains all the audio specified with that alphabet with specific function
        applyBoxPressedStyle("box-class" + currentButton);//this the keypressBtn argument passd here, which button will be pressed to give pressed styling property
        currentButton++;//incrementing currentbutton value to 2 then so on when ever the button is presses.
        enableNextButton();//disabled button gets anabled here
        if (currentButton > 5) {//if current button is more than 5 means last keypress then following
            renderNextWord();//render next word should happen
            newCompletedWordCount++;//incrementing the word count by 1 after 1 word completion
            score += 10//incrementing +10 scores
            updateScore();//this function will be allowing to print the score on into the document
            updateCompletedWordCount();//this function will be allowing to print the completed word count into the document
        }
    } else {//pressed key and currentBoxContent will be not equal
        alert("Enter valid key");//tell alert that you pressed wrong key
    }
});

//this function will be allowing to print the score on into the document
function updateScore() {
    scoreDiv.textContent = "Score:" + score;
}
//this function will be allowing to print the completed word count into the document
function updateCompletedWordCount() {
    completedWordCountDiv.textContent = "Word Completed:" + newCompletedWordCount;
}
//this will final score details which will be given to the score board to show how much the score is and how man count of you made
function updateFinalResults() {
    document.getElementById("finalScore").innerText = score;
    document.getElementById("finalCompletedWords").innerText = newCompletedWordCount;
}
//here it tells the preformance and improvements and those given to the function score board, which checks the condition where the count words are less than or more than assigned numbers
const performance = document.getElementById("performance")
const improvement = document.getElementById("improvement")
function scoreBoard() {
    if (newCompletedWordCount > 150) {
        performance.innerHTML = `
        <div>5 Minute : EXPERT</div>`
        improvement.innerText = "Maintain high typing speed and accuracy through regular practice and continuous improvement."
    } else if (newCompletedWordCount > 140 && newCompletedWordCount <= 150) {
        performance.innerHTML = `
        <div>5 Minute : PROFICIENT</div>`
        improvement.innerText = "Fine-tune typing skills by practicing advanced techniques like touch typing and typing exercises."
    } else if (newCompletedWordCount > 130 && newCompletedWordCount <= 140) {
        performance.innerHTML = `
        <div>5 Minute : PROFICIENT</div>`
        improvement.innerText = "Fine-tune typing skills by practicing advanced techniques like touch typing and typing exercises."
    } else if (newCompletedWordCount > 120 && newCompletedWordCount <= 130) {
        performance.innerHTML = `
        <div>5 Minute : PROFICIENT</div>`
        improvement.innerText = "Fine-tune typing skills by practicing advanced techniques like touch typing and typing exercises."
    } else if (newCompletedWordCount > 110 && newCompletedWordCount <= 120) {
        performance.innerHTML = `
        <div>5 Minute : PROFICIENT</div>`
        improvement.innerText = "Fine-tune typing skills by practicing advanced techniques like touch typing and typing exercises."
    } else if (newCompletedWordCount > 100 && newCompletedWordCount <= 110) {
        performance.innerHTML = `
        <div>5 Minute : INTERMEDIATE</div>`
        improvement.innerText = "Work on reducing errors and increasing typing speed through consistent practice."
    } else if (newCompletedWordCount > 90 && newCompletedWordCount <= 100) {
        performance.innerHTML = `
        <div>5 Minute : INTERMEDIATE</div>`
        improvement.innerText = "Work on reducing errors and increasing typing speed through consistent practice."
    } else if (newCompletedWordCount > 80 && newCompletedWordCount <= 90) {
        performance.innerHTML = `
        <div>5 Minute : INTERMEDIATE</div>`
        improvement.innerText = "Work on reducing errors and increasing typing speed through consistent practice."
    } else if (newCompletedWordCount > 70 && newCompletedWordCount <= 80) {
        performance.innerHTML = `<div>2 Minute : EXPERT</div>
        <div>5 Minute : INTERMEDIATE</div>`
        improvement.innerText = "Maintain high typing speed and accuracy through regular practice and continuous improvement."
    } else if (newCompletedWordCount > 60 && newCompletedWordCount <= 70) {
        performance.innerHTML = `<div>2 Minute : PROFICIENT</div>
        <div>5 Minute : NOVICE</div>`
        improvement.innerText = "Fine-tune typing skills by practicing advanced techniques like touch typing and typing exercises."

    } else if (newCompletedWordCount > 50 && newCompletedWordCount <= 60) {
        performance.innerHTML = `<div>2 Minute : INTERMEDIATE</div>
        <div>5 Minute : NOVICE</div>`
        improvement.innerText = "Work on reducing errors and increasing typing speed through consistent practice."
    } else if (newCompletedWordCount > 40 && newCompletedWordCount <= 50) {
        performance.innerHTML = `<div>1 Minute : EXPERT</div>
        <div>2 Minute : INTERMEDIATE</div>
        <div>5 Minute : NOVICE</div>`;
        improvement.innerText = "Maintain high typing speed and accuracy through regular practice and continuous improvement."
    } else if (newCompletedWordCount > 30 && newCompletedWordCount <= 40) {
        performance.innerHTML = `<div>1 Minute : PROFICIENT</div>
        <div>2 Minute : NOVICE</div>
        <div>5 Minute : BEGINNER</div>`;
        improvement.innerText = "Fine-tune typing skills by practicing advanced techniques like touch typing and typing exercises."
    } else if (newCompletedWordCount > 20 && newCompletedWordCount <= 30) {
        performance.innerHTML = `<div>1 Minute : INTERMEDIATE</div>
        <div>2 Minute : NOVICE</div>
        <div>5 Minute : BEGINNER</div>`;
        improvement.innerText = "Work on reducing errors and increasing typing speed through consistent practice."
    } else if (newCompletedWordCount > 10 && newCompletedWordCount <= 20) {
        performance.innerHTML = `<div>1 Minute : NOVICE</div>
        <div>2 Minute : BEGINNER</div>
        <div>5 Minute : BEGINNER</div>`;
        improvement.innerText = "Practice typing regularly to increase speed and accuracy."
    } else {
        performance.innerHTML = `<div>1 Minute : BEGINNER</div>
        <div>2 Minute:BEGINNER</div>
        <div>5 Minute : BEGINNER</div>`;
        improvement.innerText = "Focus on learning proper finger placement and keyboard layout."
    }
}
//here switchAudioKey is a function taking an argument as a key value which is nothing but keyboard value. Using switch case which key value is pressed that case will be triggered and performs the action. In action there is a sound which is drum sounds is given as a constructor and play() object is used to play that sound.
function switchAudioKeys(key) {
    switch (key) {
        case 'a':
            var a = new Audio('sound/tom-1.mp3')
            a.play()
            break;
        case 'b':
            var b = new Audio('sound/tom-2.mp3')
            b.play()
            break;
        case 'c':
            var c = new Audio('sound/tom-3.mp3')
            c.play();
            break;
        case 'd':
            var d = new Audio('sound/tom-4.mp3')
            d.play();
            break;
        case 'e':
            var e = new Audio('sound/snare.mp3')
            e.play();
            break;
        case 'f':
            var f = new Audio('sound/kick-bass.mp3')
            f.play();
            break;
        case 'g':
            var g = new Audio('sound/crash.mp3')
            g.play();
            break;
        case 'h':
            var h = new Audio('sound/tom-1.mp3')
            h.play();
            break;
        case 'i':
            var i = new Audio('sound/tom-2.mp3')
            i.play();
            break;
        case 'j':
            var j = new Audio('sound/tom-3.mp3')
            j.play();
            break;
        case 'k':
            var k = new Audio('sound/tom-4.mp3')
            k.play();
            break;
        case 'l':
            var l = new Audio('sound/snare.mp3')
            l.play();
            break;
        case 'm':
            var m = new Audio('sound/kick-bass.mp3')
            m.play();
            break;
        case 'n':
            var n = new Audio('sound/crash.mp3')
            n.play();
            break;
        case 'o':
            var o = new Audio('sound/tom-1.mp3')
            o.play();
            break;
        case 'p':
            var p = new Audio('sound/tom-2.mp3')
            p.play();
            break;
        case 'q':
            var q = new Audio('sound/tom-3.mp3')
            q.play();
            break;
        case 'r':
            var r = new Audio('sound/tom-4.mp3')
            r.play();
            break;
        case 's':
            var s = new Audio('sound/snare.mp3')
            s.play();
            break;
        case 't':
            var t = new Audio('sound/kick-bass.mp3')
            t.play();
            break;
        case 'u':
            var u = new Audio('sound/crash.mp3')
            u.play();
            break;
        case 'v':
            var v = new Audio('sound/tom-1.mp3')
            v.play();
            break;
        case 'w':
            var w = new Audio('sound/tom-2.mp3')
            w.play();
            break;
        case 'x':
            var x = new Audio('sound/tom-3.mp3')
            x.play();
            break;
        case 'y':
            var y = new Audio('sound/tom-4.mp3')
            y.play();
            break;

        case 'z':
            var z = new Audio('sound/snare.mp3')
            z.play();
            break;

        default:
            alert("enter valid key");
            break;
    }
}