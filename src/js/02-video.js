import throttle from 'lodash.throttle';
import Vimeo from '@vimeo/player';

const iframeVimeoPlayer = document.querySelector('#vimeo-player');
const player = new Vimeo(iframeVimeoPlayer);

const playTime = 1000;
const keyStorage = 'videoplayer-current-time';

const onPlay = keyTime => {
  player.getEnded().then(ended => {
    if (ended) {
      localStorage.setItem(keyStorage, 0);
    } else {
      localStorage.setItem(keyStorage, Number(keyTime.seconds));
    }
  });
};
player
  .setCurrentTime(localStorage.getItem(keyStorage))
  .then(console.log('seconds = the actual time that the player seeked to'))
  .catch(error =>
    console.log('the time was less than 0 or greater than the video’s duration')
  );
player.on('timeupdate', throttle(onPlay, playTime));
