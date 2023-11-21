import Leaderboard from '../component/Leaderboard';
import MainRoom from '../component/MainRoom';
import Room from '../component/Room';

const Home = () => {
	return (
		<div className="w-full h-screen flex ">
			{/* <MainRoom /> */}
			<Room />
			<Leaderboard />
		</div>
	);
};

export default Home;
