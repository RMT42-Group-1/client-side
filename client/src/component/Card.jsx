import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFront } from '../features/card/cardSlice';

const Card = ({ data, index, socket }) => {
	let cards = useSelector((state) => state.card.list);
	const dispatch = useDispatch();
	const [isFront, setIsFront] = useState(false);
	// const [flip, setFlip] = useState(false);

	const handleOnFlip = () => {
		if (isFront) {
			setIsFront(false);
		} else {
			setIsFront(true);
		}

		console.log(index);
		console.log(cards[index]);
		if (isFront) {
			dispatch(setFront({ index, front: false }));
		} else {
			dispatch(setFront({ index, front: true }));
		}
		// socket.emit('card:flip', cards);
		// console.log(cards, 'flipppp');
	};

	useEffect(() => {
		if (socket) {
			socket.emit('card:flip', cards);
		}
		// console.log('effect', cards);
	}, [isFront]);

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
	socket: PropTypes.any,
};
