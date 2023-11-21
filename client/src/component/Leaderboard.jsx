import LeaderboardBar from './LeaderboardBar';

const Leaderboard = () => {
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
		<div className="w-1/2 h-full pt-24 bg-gradient-to-b from-indigo-600 to-indigo-400 flex justify-center items-start">
			<div className="w-3/4 mt-10 flex flex-col justify-start items-center">
				{/* leaderboard */}
				<div className="text-2xl font-bold text-indigo-600 mb-10 bg-slate-100 text-center py-2 px-4 rounded-2xl shadow-xl shadow-indigo-800">
					Leaderboard
				</div>
				<div className="list w-full flex flex-col gap-3 text-indigo-800">
					{dummy.map((data) => {
						return <LeaderboardBar key={data.id} data={data} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default Leaderboard;
