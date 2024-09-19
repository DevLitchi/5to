const feedDiv = document.getElementById("statusFeed");
const showerDiv = document.getElementById("statusShower");
const AngerDiv = document.getElementById("statusBank");
const sleepDiv = document.getElementById("statusSleep");

let feed = 'Give me food';
let shower = 'Smelling like a dead dog';
let Anger = 'Dont mess with me';
let sleep = 'Oh shit, im gonna fall sleep right now';


function updateStatus(){
    feedDiv.innerHTML=feed;
    showerDiv.innerHTML=shower;
    AngerDiv.innerHTML=Anger;
    sleepDiv.innerHTML=sleep;
}

function feetPet(){
    feed='good';
    updateStatus();
}

function showerPet(){
    shower='So fresh, so clean';
    updateStatus();
}

function AngerBank(){
    Anger='Just give me my money'
    updateStatus();
}

function sleepPet(){
    sleep="I have so much energy right now";
    updateStatus();
}

updateStatus();










/* <script>
        alert("Me pican los cocos");
        prompt("Enter your credit card information"); //This get the input user
    </script> */





    // const input=document.getElementById("txtName");
// const div= document.getElementById("students");

// console.log(input,div)
// // input.style.display="none";


// function addStudent() {
//     console.log(input.value)
// }

// function someStudent(){
//     div.innerHTML+=`
//         <li> ${input.value} </li>
//     `
    
//     input.value;
// }







// console.log("scrip");
// var userName="Lalo"; //global variable
// let userGender = "Male"; //This is a variable that we use for local use o block (while,for)

// // This is a constant we cannot change the value 
// const URL = "https:/youtube.com"

// // console.log(userName,userGender,URL)

// function example(){
//     let age=20;

//     for(let i=0;i<5;i++){
//         // console.log(i);
//     }
//     // console.log(userName,age);
    
//     return age;
// }

// console.log(example())