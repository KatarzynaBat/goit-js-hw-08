const iframe = document.querySelector('iframe');
import Player from '@vimeo/player';
const player = new Player(iframe);
import throttle from 'lodash.throttle';

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const timePlayed = function () {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      // an error occurred
    });
};
const update = function () {
  let timeToPlay = localStorage.getItem('videoplayer-current-time');
  player
    .setCurrentTime(timeToPlay)
    .then(function () {})
    .catch(function (error) {
      switch (error.name) {
        case 'RangeError':
          // the time was less than 0 or greater than the video’s duration
          break;

        default:
          // some other error occurred
          break;
      }
    });
};

player.on('timeupdate', throttle(timePlayed, 1000));
player.on('play', update);
