import React from 'react';
import Scoreboard from './Scoreboard';

function Header({currentScore, highScore}) {
    return (
        <div id="header">
            <h2>MEMORY GAME</h2>
            <span>Don't click on any card more than once - see how many you can get in a row!</span>
            <Scoreboard 
                currentScore={currentScore}
                highScore={highScore}
            />
        </div>
    )
}

export default Header
