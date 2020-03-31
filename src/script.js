function myFunction() {
  const x = document.getElementById("links");
  if (x.classList.contains('hidden')) {
    x.classList.remove('hidden');
  } else {
    x.classList.add('hidden');
  }
}

// const activateLink = () => {
//   const x = document.querySelector('.caption-link');
//   if (x.classList.contains('disabled')) {
//     x.classList.remove('disabled');
//   }
// }




const date1 = new Date();
const date2 = new Date('2020/04/17');
const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays);
let percent = Math.floor((81 - diffDays) / 81 * 100);
// console.log(percent);

const progress = document.querySelector('#about > div > span');
progress.style.width = `${percent}%`;

const completed = document.querySelector('#completion');
completed.textContent = `${percent}% completed`;

const incompleted = document.querySelector('#incompletion');
incompleted.textContent = `${100 - percent}% to go`;







// function showStuff() {
//   var history = setInterval(function () { showHistory() }, 500);
//   var history = setInterval(function () { showPhotography() }, 1000);
//   var history = setInterval(function () { showParenting() }, 1500);
// }

// function showHistory() {
//   document.querySelector('.history').style.display = 'block';
// }
// function showPhotography() {
//   document.querySelector('.photography').style.display = 'block';
// }
// function showParenting() {
//   document.querySelector('.parenting').style.display = 'block';
// }
