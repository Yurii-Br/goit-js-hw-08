'use strict'
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayerElement = document.getElementById('vimeo-player');
const vimeoPlayer = new Player(vimeoPlayerElement);
let currentTime = localStorage.getItem('videoplayer-current-time') || 0;

vimeoPlayer.setCurrentTime(currentTime);

vimeoPlayer.on('timeupdate', throttle(function ({ seconds }) {
    currentTime = seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000));


  
  
  
  
  