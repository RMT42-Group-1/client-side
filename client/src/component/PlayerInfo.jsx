import PropTypes from 'prop-types';

const PlayerInfo = ({ data }) => {
	return (
		<div className="flex items-center">
			<img
				src={data.imageUrl}
				alt="Profile Image"
				className="w-[74px] h-74px] rounded-full z-10 border-2 border-slate-100"
			/>
			<div className="flex items-center gap-2 ps-4 p-1 -translate-x-3 bg-slate-100 rounded-r-full">
				<div className="text-lg font-bold text-indigo-800 min-w-[50px] ">
					{data.username}
				</div>
				<div className="text-lg font-bold w-8 h-8 bg-indigo-600 rounded-full flex justify-center items-center text-slate-100">
					{data.point}
				</div>
			</div>
		</div>
	);
};

export default PlayerInfo;

PlayerInfo.propTypes = {
	data: PropTypes.object,
};
