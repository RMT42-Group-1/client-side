import PlayerInfo from '../component/PlayerInfo';
import Card from '../component/Card';
import { useSelector, useDispatch } from 'react-redux';
import { useContext, useEffect } from 'react';
import { setCards } from '../features/card/cardSlice';
import { SocketContext } from '../context/socket';

const Game = () => {
	const cards = useSelector((state) => state.card.list);
	const dispatch = useDispatch();
	// const [socket, setSocket] = useState(null);
	const { socket } = useContext(SocketContext);
	const room = 'TORTUGA';

	useEffect(() => {
		// setSocket(io('http://localhost:3000'));
	}, []);

	useEffect(() => {
		if (socket) {
			socket.on('card:newData', (newCards) => {
				// console.log('new data', newCards);
				dispatch(setCards(newCards));
				// console.log(cards);
			});
			socket.emit('JoinRoom', room);
		}
	}, [socket]);

	const dummy = [
		{
			id: 1,
			imageUrl: 'https://i.imgur.com/4gaSugI.jpg',
			username: 'Jack',
		},
		{
			id: 2,
			imageUrl: 'https://i.imgur.com/4gaSugI.jpg',
			username: 'Sparrow',
		},
		{
			id: 3,
			imageUrl: 'https://i.imgur.com/4gaSugI.jpg',
			username: 'Barbossa',
		},
		{
			id: 4,
			imageUrl: 'https://i.imgur.com/4gaSugI.jpg',
			username: 'Turner',
		},
	];

	return (
		<div className="w-full h-screen flex flex-col items-center bg-indigo-400">
			<div className="w-full p-4 flex justify-around">
				{/* player info */}
				{dummy.map((data) => {
					return <PlayerInfo key={data.id} data={data} />;
				})}
			</div>
			{/* cards */}
			<div className="cards w-full min-h-5/6 py-10 px-20 flex flex-wrap justify-center items-center gap-4">
				{cards &&
					cards.map((data, index) => {
						return (
							<Card key={index} data={data} index={index} socket={socket} />
						);
					})}
			</div>
			<div className="players"></div>
		</div>
	);
};

export default Game;
