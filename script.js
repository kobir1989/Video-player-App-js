const video = document.getElementById('video');
const playBtn = document.getElementById('playBtn');
const pause = document.getElementById('pause');
const play = document.getElementById('play');
const timeBar = document.getElementById('time');
const vol = document.getElementById('volume');
const settings = document.getElementById('settings');
const fullScreen = document.getElementById('fullScreen');
const volIcon = document.getElementById('volIcon');
const updateTime = document.getElementById('updateTime');
const videoDiv = document.getElementById('videoDiv');
const nowPlaying = document.getElementById('nowPlaying');
const playV = document.getElementById('playV');

let isPlaying = false;

// play Video
const playVideo = () => {
  video.play();
  isPlaying = true;
  pause.classList.remove('hidden');
  play.classList.add('hidden');
  vol.value = 1;
};

// Pause Video
const pauseVideo = () => {
  video.pause();
  isPlaying = false;
  pause.classList.add('hidden');
  play.classList.remove('hidden');
  console.log('ddd');
};

//volume
const controlVolume = (value) => {
  video.volume = value;
  if (video.volume > 0) {
    volIcon.style.color = '#C8C6C6';
    console.log(vol.value);
  } else {
    volIcon.style.color = '#F96666';
  }
};

//update duration range
const updateDurationBar = (e) => {
  const { duration, currentTime } = e.srcElement;
  const updateDuration = (currentTime / duration) * 100;
  timeBar.value = updateDuration;
};

// Full screen

const showFullScreen = (e) => {
  videoDiv.requestFullscreen();
};

const setDuration = (e) => {
  const width = e.srcElement.clientWidth;
  console.log(width, 'width');
  const clickX = e.offsetX;
  console.log(clickX, 'click');
  const duration = video.duration;
  video.currentTime = (clickX / width) * duration;
  console.log(video.currentTime);
};

//update duration time
const updateDurationTime = (e) => {
  const currentTimes = e.srcElement.currentTime;
  const minute = Math.floor(currentTimes / 60);
  const second = Math.floor(currentTimes - minute * 60);
  const minuteValue = minute.toString().padStart(2, '0');
  const secondValue = second.toString().padStart(2, '0');
  updateTime.innerText = `${minuteValue}:${secondValue}`;
  console.log(minute);
  console.log(second);
};

//Mute Btn
const muteSound = () => {
  video.volume = 0;
  vol.value = 0;
  volIcon.style.color = '#F96666';
};

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseVideo();
  } else {
    playVideo();
  }
});
timeBar.addEventListener('click', setDuration);
video.addEventListener('timeupdate', updateDurationBar);
video.addEventListener('timeupdate', updateDurationTime);
fullScreen.addEventListener('click', showFullScreen);
playV.addEventListener('click', () => {
  playVideo();
  playV.classList.add('hidden');
});
video.addEventListener('click', () => {
  let isPlayBtnShow = playV.classList.contains('hidden');
  console.log(isPlayBtnShow);
  if (isPlayBtnShow) {
    pauseVideo();
    playV.classList.remove('hidden');
  } else {
    playBtn();
  }
});
