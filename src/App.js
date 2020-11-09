import React, { useState } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import './App.css'
import Thrall from './images/Thrall.jpg';
import Arthas from './images/Arthas.jpg';
import Garrosh from './images/Garrosh.jpg';
import Guldan from './images/Guldan.jpg';
import Valeera from './images/Valeera.jpg';
import Anduin from './images/Anduin.jpg';
import Illidan from './images/Illidan.jpg';
import Jaina from './images/Jaina.jpg';
import Malfurion from './images/Malfurion.jpg';
import Uther from './images/Uther.jpg';
import Rexxar from './images/Rexxar.jpg';
import Ji from './images/Ji.jpg';


function App() {

    const [info, setInfo] = useState({
      currentScore: 0,
      highScore: 0,
      gameOver: false,
      cards: [
        {
          name: "Thrall",
          class: "Shaman",
          id: "0",
          img: Thrall,
          clicked: false,
        },
        {
          name: "Anduin",
          class: "Priest",
          id: "1",
          img: Anduin,
          clicked: false,
        },
        {
          name: "Illidan",
          class: "Demon Hunter",
          id: "2",
          img: Illidan,
          clicked: false,
        },
        {
          name: "Valeera",
          class: "Rogue",
          id: "3",
          img: Valeera,
          clicked: false,
        },
        {
          name: "Rexxar",
          class: "Hunter",
          id: "4",
          img: Rexxar,
          clicked: false,
        },
        {
          name: "Gul'dan",
          class: "Warlock",
          id: "5",
          img: Guldan,
          clicked: false,
        },
        {
          name: "Malfurion",
          class: "Druid",
          id: "6",
          img: Malfurion,
          clicked: false,
        },
        {
          name: "Garrosh",
          class: "Warrior",
          id: "7",
          img: Garrosh,
          clicked: false,
        },
        {
          name: "Arthas",
          class: "Death Knight",
          id: "8",
          img: Arthas,
          clicked: false,
        },
        {
          name: "Jaina",
          class: "Mage",
          id: "9",
          img: Jaina,
          clicked: false,
        },
        {
          name: "Uther",
          class: "Paladin",
          id: "10",
          img: Uther,
          clicked: false,
        },
        {
          name: "Ji Firepaw",
          class: "Monk",
          id: "11",
          img: Ji,
          clicked: false,
        },
      ]
    });
    
    const shuffle = (array) => {
      array.sort(() => Math.random() - 0.5);
    }

    const shuffleCards = () => {
      const copyCards = info.cards.slice();
      shuffle(copyCards)

      return copyCards;
    }

    const playerWins = () => {
      alert('you win!')
      
      setInfo((prevState) => ({
        ...prevState,
        currentScore: 0,
        gameOver: false,
        highScore: 12,
      }));

      resetGame();
    }

    const updateScore = () => {

      let score = info.currentScore;
      score += 1;

      if (score === 12) {
        playerWins();
      } else {
        return score;
      }

      return null;
      
    }

    const cardSelected = (id) => {
      let selected = info.cards.filter((card) => {
        if (card.id === id) { return card }
      })

      return selected[0]
    }

    const toggleCard = (card) => {
      const copyCard = card;
      copyCard.clicked ? info.gameOver = true : copyCard.clicked = true;
    }

    const continueGame = () => {
      const copyCards = shuffleCards();
      const score = updateScore();

      score ? 
      setInfo((prevState) => ({
        ...prevState,
        currentScore: score,
        cards: copyCards,
      })) : console.log('hi');
    }

    const endGame = () => {

      const playerScore = info.currentScore;
      const highestScore = info.highScore;

      if (highestScore > playerScore) {
        setInfo((prevState) => ({
          ...prevState,
          currentScore: 0,
          gameOver: false,
        }))
      } else {
        setInfo((prevState) => ({
          ...prevState,
          currentScore: 0,
          gameOver: false,
          highScore: playerScore,
        }))
      }
      
    }

    const resetGame = () => {
      const resetCards = info.cards;

      resetCards.forEach((card) => {
        card.clicked = false;
        console.log(card.clicked)
      });

    };

    const selectCard = (e) => {

      const id = e.target.parentNode.id;
      let selected = cardSelected(id); 
      toggleCard(selected);

      if (info.gameOver == false) {
        continueGame();
      } else {
        endGame();
        resetGame();
        alert('try again!')
      }

    };

  return (
    <div className="App">
      <Header 
        currentScore={info.currentScore}
        highScore={info.highScore}
      />
      <Card 
        info={info}
        setInfo={setInfo}
        selectCard={selectCard}
        />
    </div>
  );
}

export default App;
