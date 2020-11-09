import React from 'react'

function Card({info, setInfo, selectCard}) {

    const { cards } = info;

    const displayCards = cards.map((card, index) => {

        const { name, img, id } = card;

        return (    
            <div key={index} id={id} className="card">
                <div className="imageContainer" onClick={selectCard}>
                    <img src={img}></img>
                </div>
                <div className="contentContainer">
                    <ul>
                        <li>
                            {name}
                            {/* <br></br>
                            <strong>Class: </strong> {card.class} */}
                        </li>
                    </ul>
                </div>
            </div>
        )
    })
    
    return (
        <div id="cardContainer">
            { displayCards }
        </div>
    )
}

export default Card
