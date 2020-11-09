import React from 'react'

function Scoreboard({currentScore, highScore}) {
    return (
        <div>
            Current Score: { currentScore }
            <br></br>
            High Score: { highScore }
        </div>
    )
}

export default Scoreboard
