'use strict'
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerElement = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(vimeoPlayerElement);
let currentTime = localStorage.getItem('videoplayer-current-time') || 0;

vimeoPlayer.setCurrentTime(currentTime).catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.error('Час був менше 0 або більше тривалості відео.');
        break;
      default:
        console.error('Сталася помилка:', error);
        break;
    }
  });

vimeoPlayer.on('timeupdate', throttle(function ({ seconds }) {
    currentTime = seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000));

//   Если честно это какой то треш очень слодные задания без стороней помощи не разобратся 

  
  
  
  
  