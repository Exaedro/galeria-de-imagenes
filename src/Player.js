import { useState, useEffect } from "react"
import { Howl } from "howler"
import './Player.css'

import music from "./audio/music.mp3"

function Player() {
    const [sound, setSound] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
    const sound = new Howl({
        src: [music],
        html5: true,
        loop: true,
        autoplay: true,
        volume: 0.4,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
    });

    setSound(sound);

    return () => {
        sound.unload();
    };

    }, [music]);

    const playSound = () => {
        sound.play();
    };
    
    const pauseSound = () => {
        sound.pause();
    };

    return (
        <div className="Player">
            <div className="controls">
                <p>Reproductor</p>
                <button onClick={isPlaying ? pauseSound : playSound}>
                    {isPlaying ? <i class="fa-solid fa-pause"></i> : <i class="fa-solid fa-play"></i>}
                </button>
            </div>
        </div>
    )
}

export default Player