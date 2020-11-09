import React from 'react';
import Scoreboard from './Scoreboard';

function Header({currentScore, highScore}) {
    return (
        <div id="header">
            <h2>MEMORY GAME</h2>
            <Scoreboard 
                currentScore={currentScore}
                highScore={highScore}
            />
        </div>
    )
}

export default Header
