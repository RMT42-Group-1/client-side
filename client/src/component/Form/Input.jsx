import PropTypes from 'prop-types';

const Input = ({ value, type = 'text', placeholder, onChange }) => {
	return (
		<input
			className="w-full py-2 px-3 rounded-xl text-indigo-800 bg-slate-100"
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;

Input.propTypes = {
	value: PropTypes.string,
	type: PropTypes.string,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
};
