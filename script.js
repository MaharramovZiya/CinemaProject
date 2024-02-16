// lang 


function toggleLangMenu() {
    const langMenu = document.querySelector('.lang-menu');
    const langimgVector = document.querySelector(".vectorImg");
    langMenu.classList.toggle('open');
    langimgVector.classList.toggle('addDeg');
  }
  
  function changeLanguage(lang) {
    console.log(`Changed Language: ${lang}`);
  }
  

  //watchlist


  function toggleWatchListMenu(){
    const watchMenu = document.querySelector('.watch-menu');
    watchMenu.classList.toggle('openWatchList')
  }

  //sign in 

  function toggleSignInButton() {
    const signIn = document.querySelector('.signIn');
    const signinBox = document.querySelector('.signin-box');
    const exitIcon = document.querySelector('.exit-icon');
  
    if (signinBox.style.display === 'block') {
      signinBox.style.display = 'none';
    } else {
      signinBox.style.display = 'block';
    }
  
    exitIcon.addEventListener("click", () => {
      signinBox.style.display = 'none';
    });
  
    document.addEventListener("click", (e) => {
      if (!signIn.contains(e.target) && !exitIcon.contains(e.target)) {
        signinBox.style.display = 'none';
      }
    });
  
    signinBox.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  }
  

const musicURLs = [
  "public/music/FILV - Coca Cola.mp3",
  "public/music/Lost on You   LP.mp3",
  "public/music/Mahmut_Orhan_Feel_feat_Sena_Sener_slowed_down_+_reverb_qveuaL2Y050.m4a"

];


const audioElement = new Audio();

//Random music
function playRandomMusic() {
    const randomIndex = Math.floor(Math.random() * musicURLs.length);
    const randomMusicURL = musicURLs[randomIndex];
    audioElement.src = randomMusicURL;
    audioElement.play();
}
// slider
const carousel = document.querySelector('.carousel');
const carousel2 = document.querySelector('.carousel2');
const firstImg = carousel.querySelectorAll('.carousel div')[0];
const arrowIcons = document.querySelectorAll('.movie-section .row');
const arrowIconsB = document.querySelectorAll('.movie-section .row-b');

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel.scrollLeft += icon.id == "leftRow" ? -firstImgWidth : firstImgWidth;
    });
});

arrowIconsB.forEach(icon => {
    icon.addEventListener("click", () => {
        carousel2.scrollLeft += icon.id == "leftRow2" ? -firstImgWidth : firstImgWidth;
    });
});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].clientX;
    prevScrollLeft = carousel.scrollLeft;
    prevScrollLeft = carousel2.scrollLeft;
};

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    carousel2.classList.add("dragging");
    let positionDiff = (e.pageX || e.touches[0].clientX) - prevPageX;
    carousel2.scrollLeft = prevScrollLeft - positionDiff;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    carousel2.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchstart", dragStart);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", dragStop);

carousel2.addEventListener("mousedown", dragStart);
carousel2.addEventListener("mousemove", dragging);
carousel2.addEventListener("mouseup", dragStop);
carousel2.addEventListener("mouseleave", dragStop);
carousel2.addEventListener("touchstart", dragStart);
carousel2.addEventListener("touchmove", dragging);
carousel2.addEventListener("touchend", dragStop);

//open menu
function openMenuFunc() {
  const openMenu = document.querySelector('.openMenu');
  openMenu.classList.toggle('showAndClose'); 
  console.log("working!");
}
