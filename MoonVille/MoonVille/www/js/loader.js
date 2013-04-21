var loader = {
    loaded: true,
    loadedCount: 0, //Assets that have been loaded so far
    totalCount: 0, //Total number of assets that need to be loaded
    init: function () {
        //check for sound support
        var mp3Support, oggSupport;
        var audio = document.createElement('audio');
        if (audio.canPlayType) {
            //Currently canPlayType() returns: "", "maybe" or "probably"
            mp3Support = "" != audio.canPlayType('audio/mpeg');
            oggSupport = "" != audio.canPlayType('audio/ogg; codecs = "vorbis"');
        } else {
            //The audio tag is not supported
            mp3Support = false;
            oggSupport = false;
        }

        // Check for ogg, then mp3 and finally set soundFileExtn to undefined
        loader.soundFileExtn = oggSupport ? ".ogg" : mp3Support ? ".mp3" : undefined;
    },
    loadImage: function (url) {
        this.totalCount++;
        this.loaded = false;
        var image = new Image();
        image.src = url;
        //image.onerror = console.log("Unable to load Image", url);
        image.onload = console.log("Loaded ", url);
        return image;
    },
    soundFileExtn: ".ogg",
    loadSound: function (url) {
        this.totalCount++;
        this.loaded = false;
        var audio = new Audio();
        audio.src = url + loader.soundFileExtn;
        audio.onerror = console.log("Unable to load Audio", url);
        audio.onload = console.log("Loaded ", url);
        audio.addEventListener("canplaythrough", loader.itemLoaded, false);
        return audio;
    },
    itemLoaded: function () {
        loader.loadedCount++;
        if (loader.loadedCount === loader.totalCount) {

        }
    }
};

var music = {
    musicLib: [],
    musicDef: [
		{name:"moonloop1",loops:true}
	],
    enable: true,
    init: function () {
        for (var i = 0; i < music.musicDef.length; i++) {
            var msc = loader.loadSound("./sound/music/" + music.musicDef[i].name);
            msc.loop = music.musicDef[i].loops;
            msc.name = music.musicDef[i].name;
            music.musicLib.push(msc);
        }
    },
    play: function (name,callback) {
        for (var i = 0; i < music.musicLib.length; i++) {
            if (music.musicLib[i].name == name) {
                music.musicLib[i].play();
                music.musicLib[i].addEventListener('ended', function() {
					if (this.loop) {
						this.currentTime = 0;
						this.play();
					}
				}, false);
            }
        }
    },
    pause: function (name) {
        for (var i = 0; i < music.musicLib.length; i++) {
            if (music.musicLib[i].name == name || name === "anythingelse") {
                music.musicLib[i].pause();
            }
        }
    },
};