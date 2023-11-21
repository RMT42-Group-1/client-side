import PropTypes from 'prop-types';

const RoomBar = ({ data }) => {
	return (
		<div className="w-full p-2 flex justify-start items-center gap-4 text-slate-100 bg-indigo-800 rounded-xl text-lg shadow-inner shadow-black hover:bg-indigo-600 transition delay-75 ease-in-out">
			<div className="px-4 font-bold text-lg text-center">{data.id}</div>
			<div className="w-2/4 font-medium">{data.name}</div>
		</div>
	);
};

export default RoomBar;

RoomBar.propTypes = {
	data: PropTypes.object,
};
