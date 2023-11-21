import { useState } from 'react';
import Input from '../component/Form/Input';
import { Link } from 'react-router-dom';

const Register = () => {
	const [user, setUser] = useState({
		username: '',
		email: '',
		password: '',
	});

	const onChange = (e, name) => {
		setUser((prev) => {
			return {
				...prev,
				[name]: e.target.value,
			};
		});
	};

	return (
		<div className="w-full h-screen flex">
			<div className="half-bg  bg-gradient-to-r from-indigo-800 w-1/2"></div>
			<div className="main form w-1/2 flex justify-center items-center">
				<form className="w-4/6 py-14 px-12 flex flex-col gap-4 justify-center items-center bg-gradient-to-r from-indigo-400 to-indigo-800 text-slate-100 rounded-3xl shadow-2xl hover:shadow-indigo-600 hover:shadow-2xl hover:scale-105 transition delay-100">
					<div className="title text-4xl mb-10">Create Account</div>
					<Input
						value={user.username}
						placeholder={'username'}
						onChange={(e) => onChange(e, 'username')}
					/>
					<Input
						type="email"
						value={user.email}
						placeholder={'email'}
						onChange={(e) => onChange(e, 'email')}
					/>
					<Input
						type="password"
						value={user.password}
						placeholder={'password'}
						onChange={(e) => onChange(e, 'password')}
					/>
					<input
						type="submit"
						value="REGISTER"
						className="w-full py-2 mt-8 bg-slate-100 rounded-xl text-indigo-600 cursor-pointer font-bold"
					/>
					<div className="text-sm">
						You have account?{' '}
						<Link
							to={'/login'}
							className="hover:text-slate-800 font-bold text-white"
						>
							Login Now
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Register;
