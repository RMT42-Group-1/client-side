import Leaderboard from '../component/Leaderboard';
import MainRoom from '../component/MainRoom';

const Home = () => {
	return (
		<div className="w-full h-screen flex ">
			<MainRoom />
			<Leaderboard />
		</div>
	);
};

export default Home;
