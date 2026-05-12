import { useParams } from "react-router-dom";
import * as s from "./styles";
import { GiCardRandom } from "react-icons/gi";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useRef, useState } from "react";

function Game() {
    const params = useParams();
    const [ cards, setCards ] = useState([]);
    const [ started, setStarted ] = useState(false);
    const [ timer, setTimer ] = useState(0);
    const timeIntervalRef = useRef(null);

    const msStr = timer.toString();
    const sec = msStr.substring(0, msStr.length - 3) || 0;
    const ms = msStr.substring(msStr.length - 3);

    const handleStartOnClick = () => {
        setStarted(true);
        setTimer(0);
    }

    const handleCardOpneOnClick = (id) => {
        if (cards.filter(card => card.isOpen && !card.isAnswer).length > 1) {
            return;
        }

        setCards(cards.map(card => {
            if (card.id === id) {
                return {
                    ...card,
                    isOpen: true,
                }
            }
            return card;
        }));
    }

    useEffect(() => {
        const openCards = cards.filter(card => card.isOpen && !card.isAnswer);
        const answerCards = cards.filter(card => card.isAnswer);
        if (answerCards.length === 12) {
            setStarted(false);
        }

        if (openCards.length === 2) {
            if (openCards[0].content === openCards[1].content) {
                setCards(cards.map(card => {
                    if (card.id === openCards[0].id || card.id === openCards[1].id) {
                        return {
                            ...card,
                            isAnswer: true,
                        }
                    }
                    return card;
                }));
            } else {
                setTimeout(() => {
                    setCards(cards.map(card => {
                        if (!card.isAnswer) {
                            return {
                                ...card,
                                isOpen: false,
                            }
                        }
                        return card;
                    }));
                }, 500);
            }
        }
    }, [cards]);

    useEffect(() => {
        if (started) {
            let randomNums = [];
    
            while (randomNums.length < 12) {
                const newNum = Math.floor((Math.random() * 100) + 1);
                if (randomNums.includes(newNum)) {
                    continue;
                }
                randomNums = [...randomNums, newNum, newNum];
            }
    
            for (let i = 0; i < randomNums.length; i++) {
                const j = Math.floor(Math.random() * (i + 1));
                [ randomNums[i], randomNums[j] ] = [ randomNums[j], randomNums[i] ];
                // let temp = randomNums[j];
                // randomNums[j] = randomNums[i];
                // randomNums[i] = temp;
            }
    
            setCards(randomNums.map((num, index) => ({
                id: index + 1,
                content: num,
                isOpen: false,
                isAnswer: false,
            })));
        }
    }, [started]);


    useEffect(() => {
        if (started && !timer) {
            const now = new Date();
            const nowTime = now.getTime();
            timeIntervalRef.current = setInterval(() => {
                setTimer(new Date().getTime() - nowTime);
            }, 10);
        } else if (!started && !!timer) {
            clearInterval(timeIntervalRef.current);
        }
    }, [started]);

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCING GAME<GiCardRandom /></h1>
                <h3>플레이어: {params.username} Time: {sec}.{ms}</h3>
            </header>
            <main>
                {
                    started 
                    ? cards.map(card => <GameCard key={card.id} card={card} onClick={() => handleCardOpneOnClick(card.id)} />)
                    :
                    <div css={s.centerContainer}>
                        {
                            !started && !!timer && <h1>Time: {sec}.{ms}</h1>
                        }
                        {
                            !started && !timer
                            ? <button onClick={handleStartOnClick}>게임시작</button>
                            : <button onClick={handleStartOnClick}>다시하기</button>
                        }
                    </div>
                }
            </main>
        </div>
    </>
}

export default Game;