import PlayerInfo from '../component/PlayerInfo';
import Card from '../component/Card';

const Game = () => {
	let array = [];

	for (let i = 1; i <= 24; i++) {
		array.push(i);
	}

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
				{array.map((val) => {
					return <Card key={val} />;
				})}
			</div>
			<div className="players"></div>
		</div>
	);
};

export default Game;
