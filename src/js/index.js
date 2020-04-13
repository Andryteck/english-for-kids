import '../css/style.css';
import '../css/style.scss';


// const inputImg = require('./moduleOne.js');
// const inputText = require('./moduleOne.js');
// console.log(inputText);
import {inputImg} from './moduleOne'
import {inputText} from './moduleOne'




const mainPage = document.getElementById('main'); //mane page
const categoryPage = document.getElementById('category'); // category page
const container = document.getElementById('pageContainer'); //page container
container.append(mainPage);



// class Card {
//   constructor(state) {
//     this.state = state;
//   }
// }

// Create main page
// input.forEach((card,index) => {
//   console.log(card[0])
//   const cardElementMain = document.createElement('div');
//   cardElementMain.classList.add('row','userMain');
//   mainPage.append(cardElementMain);
//   cardElementMain.innerHTML = `<div class="col-md-3 col-sm-4">
//   <div class="userBlock">
//       <div class="backgrounImg">
//           <img src="https://preview.ibb.co/miQjb7/photography4.jpg">
//       </div>
//       <div class="userImg">
//           <img src=${card}>
//       </div>
//       <div class="userDescription">
//            <h5>${card[0]}</h5>

//        </div>

//   </div>
// </div>`;

//   // cardElement.innerHTML = ``;
//   // document.body.append(cardElement)
 
  

  
// });

const createMainPage = () => {
  for (let i = 0; i < inputText.length; i++){
    
    const cardElementMain = document.createElement('div');
    cardElementMain.classList.add('row','userMain');
    mainPage.append(cardElementMain);
    for (let j = 0; j < inputImg.length; j++) {
      // console.log(inputImg)
      cardElementMain.innerHTML = `<div class="col-md-3 col-sm-4">
   <div class="userBlock">
       <div class="backgrounImg">
           <img src="https://preview.ibb.co/miQjb7/photography4.jpg">
      </div>
       <div class="userImg">
           <img src=${inputImg[i]}>
       </div>
       <div class="userDescription">
            <h5>${inputText[i]}</h5>

        </div>

   </div>
 </div>`;

    }
  }
  
}

createMainPage()





