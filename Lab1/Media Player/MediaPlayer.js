var audio = document.getElementById('myAudio');
    var rangeInput = document.getElementById('range');
    var image = document.getElementById('media-image');
    var volumeInput = document.getElementById('volume');
    var audioSource = document.getElementById('source');
    function  play1(){
        image.src="https://watanimg.elwatannews.com/image_archive/648x316/3229141091587896932.jpg"
        audioSource.src="zaza.mp3"
        audio.load(); 
        audio.play();
    }
    function play2(){
       image.src="https://i.pinimg.com/originals/1f/3d/3c/1f3d3cd1589206e556f295b1085fe57d.jpg";
       audioSource.src="sno7y.mp3"
       audio.load(); 
        audio.play();
    }
    function play3(){
        image.src="https://i.ytimg.com/vi/fb0148abcfg/hqdefault.jpg";
        audioSource.src="3.mp3"
        audio.load(); 
        audio.play();
    }
    function play4(){
        image.src="https://2img.net/h/data.oekakibbs.com/search/bbs/4800/4708.jpg";
        audioSource.src="4.mp3"
        audio.load(); 
        audio.play();
    }
    function Play(){
        audio.play();
    }
    function Pause(){
        audio.pause();
    }
    function Stop(){
        audio.load();
        audio.pause();
    }
    function Mute(){
        audio.muted=!audio.muted;
    }
    function initializeAudio() {
      rangeInput.max = audio.duration;
    }

    audio.ontimeupdate = function() {
      rangeInput.value = audio.currentTime;
    };

    function changeSpeed() {
        var speedInput = document.getElementById('speed');
        audio.playbackRate = speedInput.value;
    }

    function changeVolume() {
        audio.volume = volumeInput.value / 100;
    }
    audio.onloadedmetadata = function() {
    initializeAudio();
    rangeInput.value = 0; // Reset the range input to 0 for the new track
     };