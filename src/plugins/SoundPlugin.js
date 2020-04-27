//
const PLAY_DEFAULTS = {
    loop: false,
    reset: true,
    volume: 1,
    startAt: 0,
    fade: 0,
    delay: 0,
};

const PAUSE_DEFAULTS = {
    fade: 0,
    delay: 0,
}

const DEFAULT_SOUNDS = {
    "chit": {
        url: require("@/assets/audio/buttonHover.wav"),
        defaults: {

        },
	},
    "startblip": {
        url: require("@/assets/audio/startBlip.ogg"),
        defaults: {

        },
	},
    "charPick": {
        url: require("@/assets/audio/gamestart.ogg"),
        defaults: {
            volume:.5,
        },
	},
    "charSelectMusic": {
        url: require("@/assets/audio/427442__kiluaboy__clouds.ogg"),
        defaults: {
            loop: true,
            volume: .4,
        },
	},
    "dungeonMusic": {
        url: require("@/assets/audio/battlePlanPurpPlan.mp3"),
        defaults: {
            volume:.3,
            loop: true,
        },
    },

    // monster entering sounds
    // monster entering sounds
    // monster entering sounds
    "batsEnter": {
        url: require("@/assets/audio/monsterEnter/bats.wav"),
        defaults: {
            volume:1,
        },
	},
    "impsEnter": {
        url: require("@/assets/audio/monsterEnter/imp.wav"),
        defaults: {
            volume:.4,
        },
	},
    "slimeEnter": {
        url: require("@/assets/audio/monsterEnter/slime.wav"),
        defaults: {
            volume:1,
        },
	},
    "koboldEnter": {
        url: require("@/assets/audio/monsterEnter/kobold.wav"),
        defaults: {
            volume:1,
        },
    },
    "gnollEnter": {
        url: require("@/assets/audio/monsterEnter/gnoll.mp3"),
        defaults: {
            volume:1,
        },
    },
    "goblinEnter": {
        url: require("@/assets/audio/monsterEnter/goblin.mp3"),
        defaults: {
            volume:1,
        },
    },
    "ghostEnter": {
        url: require("@/assets/audio/monsterEnter/ghost.mp3"),
        defaults: {
            volume:1,
        },
    },
    "lizardmanEnter": {
        url: require("@/assets/audio/monsterEnter/lizardman.mp3"),
        defaults: {
            volume:1,
        },
    },
    "curseEnter": {
        url: require("@/assets/audio/monsterEnter/curse.mp3"),
        defaults: {
            volume:1,
        },
    },
    "banditsEnter": {
        url: require("@/assets/audio/monsterEnter/bandits.mp3"),
        defaults: {
            volume:1,
        },
    },
    "mimicEnter": {
        url: require("@/assets/audio/monsterEnter/mimic.mp3"),
        defaults: {
            volume:1,
        },
    },
    "ghoulEnter": {
        url: require("@/assets/audio/monsterEnter/ghoul.mp3"),
        defaults: {
            volume:1,
        },
    },
    "skeletonEnter": {
        url: require("@/assets/audio/monsterEnter/skeleton.wav"),
        defaults: {
            volume:1,
        },
    },
    "swamplingEnter": {
        url: require("@/assets/audio/monsterEnter/swampling.mp3"),
        defaults: {
            volume:1,
        },
    },
    "harpyEnter": {
        url: require("@/assets/audio/monsterEnter/harpy.mp3"),
        defaults: {
            volume:1,
        },
    },
    "mushroomEnter": {
        url: require("@/assets/audio/monsterEnter/mushroom.mp3"),
        defaults: {
            volume:1,
        },
    },
    "dryadEnter": {
        url: require("@/assets/audio/monsterEnter/dryad.mp3"),
        defaults: {
            volume:1,
        },
    },
    "golemEnter": {
        url: require("@/assets/audio/monsterEnter/golem.mp3"),
        defaults: {
            volume:1,
        },
    },
    "demonEnter": {
        url: require("@/assets/audio/monsterEnter/demon.mp3"),
        defaults: {
            volume:1,
        },
    },
    "bansheeEnter": {
        url: require("@/assets/audio/monsterEnter/banshee.mp3"),
        defaults: {
            volume:1,
        },
    },
    "lichEnter": {
        url: require("@/assets/audio/monsterEnter/lich.mp3"),
        defaults: {
            volume:1,
        },
    },
    "dragonEnter": {
        url: require("@/assets/audio/monsterEnter/dragon.mp3"),
        defaults: {
            volume:1,
        },
    },


    //physical player sounds
    //physical player sounds
    //physical player sounds
    "playerMelee1": {
        url: require("@/assets/audio/playerSounds/sword1.wav"),
        defaults: {
            volume:1,
        },
    },
    "playerMelee2": {
        url: require("@/assets/audio/playerSounds/sword2.wav"),
        defaults: {
            volume:1,
        },
    },
    "playerMelee3": {
        url: require("@/assets/audio/playerSounds/sword3.wav"),
        defaults: {
            volume:1,
        },
    },
    
    
    //magical player sounds
    //magical player sounds
    //magical player sounds
    "playerMagic1": {
        url: require("@/assets/audio/playerSounds/flame.wav"),
        defaults: {
            volume:1,
        },
    },
    "playerMagic2": {
        url: require("@/assets/audio/playerSounds/flame2.wav"),
        defaults: {
            volume:1,
        },
    },
    "playerMagic3": {
        url: require("@/assets/audio/playerSounds/flame3.wav"),
        defaults: {
            volume:1,
        },
    },
    


    // physical monster attacks
    // physical monster attacks
    // physical monster attacks
    "monsterMelee1": {
        url: require("@/assets/audio/monsterSounds/monsterAttack1.wav"),
        defaults: {
            volume:1,
        },
    },
    "monsterMelee2": {
        url: require("@/assets/audio/monsterSounds/monsterAttack2.mp3"),
        defaults: {
            volume:1,
        },
    },
    "monsterMelee3": {
        url: require("@/assets/audio/monsterSounds/monsterAttack3.mp3"),
        defaults: {
            volume:1,
        },
    },


    // magical monster attacks
    // magical monster attacks
    // magical monster attacks
    "monsterMagic1": {
        url: require("@/assets/audio/monsterSounds/monsterMagic1.wav"),
        defaults: {
            volume:1,
        },
    },
    "monsterMagic2": {
        url: require("@/assets/audio/monsterSounds/monsterMagic2.wav"),
        defaults: {
            volume:1,
        },
    },
    "monsterMagic3": {
        url: require("@/assets/audio/monsterSounds/monsterMagic3.wav"),
        defaults: {
            volume:1,
        },
    },
    
};

const __sounds = {};
const __events = {
    load: [],
};

const Sound = {
    loaded: false,

    //load multiple sounds (see main.js)
    load (sounds) {
        return new Promise (async (resolve) => {
            this.loaded = false;
            const promises = [];
    
            for (let name in sounds) {
                const options = sounds[name];
                let audio;
                promises.push(new Promise((res) => {
                    audio = new Audio(options.url);
                    audio.onload = res();
                }));
                __sounds[name] = {
                    audio: audio,
                    defaults: options.defaults,
                };
            }

            //wait until all audio.onloads have been resolved
            try {
                await Promise.all(promises);
            } catch (e) {
                throw e;
            }
    
            __events.load.forEach(cb => {cb()})
            this.loaded = true

            resolve();
        }) 
    },

    async play (soundName, options) {
        const sound = __sounds[soundName];

        if (!sound) {
            console.error(`Sound "${soundName}" not registered.`);
            return;
        }

        //fill in missing options with global defaults, then sound-specific defaults, then override options
        options = {...PLAY_DEFAULTS, ...sound.defaults, ...options};

        if (options.delay) {
            await new Promise(resolve => { setTimeout(resolve, options.delay) });
        }

        if (options.reset) {
            sound.audio.currentTime = options.startAt;
        }
        sound.audio.loop = options.loop;
        if (options.fade) {
            sound.audio.volume = 0;
            $(sound.audio).animate({volume: options.volume}, options.fade);
        } else {
            sound.audio.volume = options.volume;
        }
        sound.audio
            .play()
            .catch(err => {
                if (err.name === 'AbortError') return; //not really a problem
                console.error(`${err.name} for sound "${soundName}" with url "${sound.audio.src}": ${err.message}`)
            });
    },

    async pause (soundName, options) {
        options = {...PAUSE_DEFAULTS, ...options};
        const sound = __sounds[soundName];

        if (!sound) {
            console.error(`Sound "${soundName}" not registered.`);
            return;
        }

        if (options.delay) {
            await new Promise(resolve => { setTimeout(resolve, options.delay) });
        }

        if (options.fade) {
            $(sound.audio).animate({volume: options.volume}, {
                duration: options.fade,
                complete () {
                    if(options.volume == 0) sound.audio.pause();
                },
            })
        } else {
            sound.audio.pause();
        }
    },

    pauseAll () {
        for (let name in __sounds) {
            const sound = __sounds[name];
            sound.audio.pause();
        }
    },

    on (eventname, callback) {
        __events[eventname].push(callback);
        if (this.loaded) {
            callback();
        }
    },
}

export default {
    install (Vue, preloadSources = {}) {
        if (preloadSources) Sound.load({...DEFAULT_SOUNDS, ...preloadSources});
        Vue.prototype.$sound = Sound;
    },
};

