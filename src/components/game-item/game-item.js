import React from 'react'
import './game-item.css'
import GameCover from '../game-cover/game-cover'
import { GameBuy } from '../game-buy/game-buy'
import GameGenre from '../game-genre/game-genre'
import { useDispatch } from 'react-redux'
import { setCurrentGame } from '../../redux/games/reduser'
import { useNavigate } from 'react-router-dom'


export default function GameItem({ game }) {
    const dispath = useDispatch(); 
    const navigate = useNavigate();
    const handleClick = () => {
        dispath(setCurrentGame(game))
        navigate("/game")
        
    
    };
    return (
        <div className='game-item' onClick={handleClick} >
            <GameCover image={game.image} />
            <div className='game-item_details'>
                <span className='game-item_title'>{game.title}</span>
                <div className='game-item_genre'>
                    {game.genres.map((genre) => <GameGenre genre={genre} key={genre}/>)}
                </div>
                <div className='game-item_buy'>
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};
