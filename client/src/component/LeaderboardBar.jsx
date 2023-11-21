import PropTypes from 'prop-types';

const LeaderboardBar = ({ data }) => {
	return (
		<div className="w-full p-2 flex justify-center gap-4 bg-slate-100 rounded-xl text-lg hover:shadow-lg hover:shadow-indigo-900 hover:scale-105 transition delay-75 ease-in-out">
			<div className="px-4 font-bold text-lg text-center">{data.id}</div>
			<div className="w-2/4 font-medium">{data.name}</div>
			<div className="flex-1 font-medium text-center">{data.point} points</div>
		</div>
	);
};

export default LeaderboardBar;

LeaderboardBar.propTypes = {
	data: PropTypes.object,
};
