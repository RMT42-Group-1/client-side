// import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
// import { setBackCards, setFront } from '../features/card/cardSlice';
// import {
// 	setFirstCard,
// 	setNullCard,
// 	setPoint,
// 	setSecondCard,
// } from '../features/game/gameSlice';
// import { SocketContext } from '../context/socket';

const Card = ({
	data,
	index,
	cards,
	setCards,
	setFirstCard,
	setSecondCard,
	firstCard,
	secondCard,
}) => {
	// const { socket } = useContext(SocketContext);
	// const currentUser = useSelector((state) => state.user.profile);
	// const cards = useSelector((state) => state.card.list);
	// const users = useSelector((state) => state.game.users);
	// const firstCard = useSelector((state) => state.game.firstCard);
	// const secondCard = useSelector((state) => state.game.secondCard);
	// const dispatch = useDispatch();
	// const [isFront, setIsFront] = useState(false);
	// const [check, setCheck] = useState(false);
	// const [match, setMatch] = useState(false);
	// const [flip, setFlip] = useState(false);
	// data.front = true;

	const handleOnFlip = () => {
		// const newArr = [...cards];
		// if (data.front) {
		// 	data.front = false;
		// } else {
		// 	data.front = true;
		// }

		setCards([
			...cards.slice(0, index),
			{ ...cards[index], front: true },
			...cards.slice(index + 1),
		]);

		if (!firstCard.name || !secondCard.name) {
			if (!firstCard.name) {
				console.log('firstCard set');
				setFirstCard({
					index,
					name: data.name,
				});
			} else {
				// if (!firstCard) {
				console.log('secondCard set');
				setSecondCard({
					index,
					name: data.name,
				});
				// }
			}
		} else {
			// setFirstCard({
			// 	index,
			// 	name: data.name,
			// });
		}

		// console.log(firstCard, secondCard, 1, 2);

		// setCards(newArr);
		// isPair();
		// if (isFront) {
		// 	setIsFront(false);
		// } else {
		// 	setIsFront(true);
		// }
		// console.log(index);
		// console.log(cards[index]);
		// if (isFront) {
		// 	dispatch(setFront({ index, front: false }));
		// } else {
		// 	dispatch(setFront({ index, front: true }));
		// }
		// socket.emit('card:flip', cards);
		// console.log(cards, 'flipppp');
		// isPair();
	};

	// const isPair = () => {
	// console.log(currentUser, 'currentUser');
	// if (!firstCard.name) {
	// 	dispatch(setFirstCard({ idx: index, name: data.name }));
	// } else {
	// 	if (!secondCard.name) {
	// 		dispatch(setSecondCard({ idx: index, name: data.name }));
	// 	}
	// }
	// setCheck(true);
	// if (firstCard.name && secondCard.name) {
	// 	console.log('trigger 2');
	// 	if (firstCard.name === secondCard.name) {
	// 		dispatch(setPoint({ id: currentUser.id }));
	// 	} else {
	// 		console.log('trigerr null');
	// 		dispatch(setNullCard());
	// 	}
	// }
	// console.log(firstCard, secondCard, 'isPair');
	// };

	// useEffect(() => {
	// 	if (firstCard.name && secondCard.name) {
	// 		console.log('trigger 2');
	// 		console.log(firstCard, secondCard);
	// 		if (check) {
	// 			if (firstCard.name === secondCard.name) {
	// 				dispatch(setPoint({ id: currentUser.id }));
	// 				setMatch(true);
	// 				console.log('matchtrue');
	// 				setCheck(false);
	// 			} else {
	// 				setMatch(false);
	// 			}
	// 		}
	// 		// console.log(match);
	// 		if (!match) {
	// 			console.log('trigerr null');
	// 			setTimeout(() => {
	// 				dispatch(
	// 					setBackCards({ index1: firstCard.idx, index2: secondCard.idx })
	// 				);
	// 			}, 500);
	// 			dispatch(setNullCard());
	// 		}
	// 	}
	// 	console.log(firstCard, secondCard, 'isPair');
	// }, [check]);

	// useEffect(() => {
	// console.log(data.name, 'current Card');
	// console.log(firstCard, secondCard);
	// console.log(
	// 	'firstCard',
	// 	firstCard,
	// 	'secondCard',
	// 	secondCard,
	// 	'users',
	// 	cards
	// );
	// if (socket) {
	// 	socket.emit('card:flip', cards);
	// }
	// console.log('effect', cards);
	// }, [isFront]);

	return (
		<div className="w-[11%] aspect-[140/190] relative">
			<div
				onClick={handleOnFlip}
				className={`w-full h-full transition absolute ease-out backface-hidden duration-500 ${
					data.front ? 'rotate-y-180' : ''
				}`}
			>
				<img
					src="/LastGuardian/1LastGuardian_back.png"
					className="w-full h-full aspect-[140/190]"
					alt=""
				/>
			</div>
			<div
				onClick={handleOnFlip}
				className={`w-full h-full transition absolute ease-out backface-hidden duration-500 ${
					data.front ? '' : '-rotate-y-180'
				}`}
			>
				<img
					src={`/LastGuardian/${data.name}.png`}
					className="w-full h-full aspect-[140/190]"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Card;

Card.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
	cards: PropTypes.array,
	setCards: PropTypes.func,
	setFirstCard: PropTypes.func,
	setSecondCard: PropTypes.func,
	firstCard: PropTypes.object,
	secondCard: PropTypes.object,
};
