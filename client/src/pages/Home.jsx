import MainRoom from '../component/MainRoom';

const Home = () => {
	return (
		<div className="w-full h-screen flex ">
			<MainRoom />
			<div className="leaderboard pt-24 w-1/2 h-full">Leaderboard</div>
		</div>
	);
};

export default Home;
