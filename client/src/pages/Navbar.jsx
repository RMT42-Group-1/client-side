import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const navigate = useNavigate();

	const handleOnLogout = () => {
		localStorage.removeItem('access_token');
		navigate('/login');
	};

	return (
		<div className="w-full p-4 px-10 bg-indigo-600 flex justify-between fixed shadow-xl shadow-indigo-800">
			<div className="logo text-slate-100 flex items-center font-bold text-xl">
				PAIR GAME
			</div>
			<div className="main">{/* <div>Lobby</div> */}</div>
			<div className="secondary">
				<button
					onClick={handleOnLogout}
					className="py-2 px-4 bg-slate-100 text-indigo-800 rounded-xl hover:bg-red-500 hover:text-slate-100 hover:shadow-lg hover:shadow-black active:scale-90"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
