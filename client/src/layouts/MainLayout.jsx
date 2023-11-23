import { Outlet } from 'react-router-dom';
import Navbar from '../pages/Navbar';

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default MainLayout;
