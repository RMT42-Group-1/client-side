import PropTypes from 'prop-types';

const LeaderboardBar = ({ data, index }) => {
	return (
		<div className="w-full p-2 flex justify-center gap-4 bg-slate-100 rounded-xl text-lg hover:shadow-lg hover:shadow-indigo-900 hover:scale-105 hover:bg-teal-300 transition-all delay-75 ease-in-out">
			<div className="px-4 font-bold text-lg text-center">{index + 1}</div>
			<div className="w-2/4 font-medium">{data.User.username}</div>
			<div className="flex-1 font-medium text-center">{data.point} points</div>
		</div>
	);
};

export default LeaderboardBar;

LeaderboardBar.propTypes = {
	data: PropTypes.object,
	index: PropTypes.number,
};
