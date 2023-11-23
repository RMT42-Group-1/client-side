import PlayerInfo from '../component/PlayerInfo';
import Card from '../component/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
// import { setCards } from '../features/card/cardSlice';
import { SocketContext } from '../context/socket';
import cardsJson from '../features/card/cards.json';
import { setPoint, setUsers } from '../features/game/gameSlice';

const Game = () => {
	const { socket } = useContext(SocketContext);
	// const cards = useSelector((state) => state.card.list);
	const [cards, setCards] = useState([]);
	const users = useSelector((state) => state.game.users);
	const dispatch = useDispatch();
	const [firstCard, setFirstCard] = useState({
		index: '',
		name: '',
	});
	const [secondCard, setSecondCard] = useState({
		index: '',
		name: '',
	});

	const room = 'TORTUGA';

	useEffect(() => {
		const cardsData = cardsJson;
		setCards([...cardsData, ...cardsData]);

		// socket
		socket.on('card:newData', (newCards) => {
			// console.log('new data', newCards);
			// dispatch(setCards(newCards));
			setCards(newCards);
		});
		socket.emit('JoinRoom', room);
		socket.on('game:newUsersPoint', (users) => {
			console.log(users, 'newUserPoints');
			dispatch(setPoint(users));
			// dispatch(setUsers(users));
		});
		console.log(cards);
	}, []);

	useEffect(() => {
		if (firstCard) {
			if (socket) {
				socket.emit('card:flip', cards);
			}
			// console.log('effect', cards);
		}
		console.log(firstCard, 'FIRST');
	}, [firstCard]);

	useEffect(() => {
		console.log('SECONDDD CARDDD');
		console.log(firstCard, secondCard);
		// console.log(firstCard.name === secondCard.name);
		if (firstCard.name || secondCard.name) {
			if (firstCard.name === secondCard.name) {
				dispatch(setPoint({ id: 1 }));
				socket.emit('game:updatePoint', { id: 1 });
				setFirstCard({
					index: '',
					name: '',
				});
				setSecondCard({
					index: '',
					name: '',
				});
			} else {
				const firstArr = [
					...cards.slice(0, firstCard.index),
					{ ...cards[firstCard.index], front: false },
					...cards.slice(firstCard.index + 1),
				];
				const secondArr = [
					...firstArr.slice(0, secondCard.index),
					{ ...firstArr[secondCard.index], front: false },
					...firstArr.slice(secondCard.index + 1),
				];

				setTimeout(() => {
					setCards(secondArr);
					socket.emit('card:flip', secondArr);
				}, 500);
				setFirstCard({
					index: '',
					name: '',
				});
				setSecondCard({
					index: '',
					name: '',
				});
			}
		}
	}, [secondCard]);

	// console.log(firstCard, secondCard);

	return (
		<div className="w-full h-screen flex flex-col items-center bg-indigo-400">
			<div className="w-full p-4 flex justify-around">
				{/* player info */}
				{users &&
					users.map((data) => {
						return <PlayerInfo key={data.id} data={data} />;
					})}
			</div>
			{/* cards */}
			<div className="cards w-full min-h-5/6 py-10 px-20 flex flex-wrap justify-center items-center gap-4">
				{cards &&
					cards.map((data, index) => {
						return (
							<Card
								key={index}
								data={data}
								index={index}
								cards={cards}
								setCards={setCards}
								firstCard={firstCard}
								setFirstCard={setFirstCard}
								secondCard={secondCard}
								setSecondCard={setSecondCard}
							/>
						);
					})}
			</div>
			<div className="players"></div>
		</div>
	);
};

export default Game;
