import RoomBar from './RoomBar';

const Room = () => {
	const dummy = [
		{
			id: 1,
			name: 'Jack',
			point: 100,
		},
		{
			id: 2,
			name: 'Sparrow',
			point: 92,
		},
		{
			id: 3,
			name: 'Barbossa',
			point: 88,
		},
	];

	return (
		<div className="w-1/2 h-full bg-indigo-400 flex justify-center items-center">
			<div className="w-3/4 mt-10 flex flex-col items-center">
				{/* room */}
				<div className="flex flex-col justify-center items-center gap-1">
					<div className="text-slate-100 px-2 py-1 rounded-full font-medium">
						Room
					</div>
					<div className="text-2xl font-bold text-indigo-600 mb-10 bg-slate-100 text-center py-2 px-4 rounded-2xl shadow-xl shadow-indigo-800">
						JACK
					</div>
				</div>
				<div className="list w-3/4 flex flex-col gap-3">
					{dummy.map((data) => {
						return <RoomBar key={data.id} data={data} />;
					})}
				</div>
				<button className="mt-8 w-3/4 py-2 px-4 flex justify-center items-center gap-4 text-slate-100 bg-indigo-800 rounded-xl text-lg shadow-md shadow-black hover:bg-teal-300 hover:text-indigo-800 transition delay-75 ease-in-out font-bold active:scale-90">
					START
				</button>
			</div>
		</div>
	);
};

export default Room;
