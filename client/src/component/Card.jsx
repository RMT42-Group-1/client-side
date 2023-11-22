import { useState } from 'react';

const Card = () => {
	const [isFront, setIsFront] = useState(false);

	const handleOnFlip = () => {
		if (isFront) {
			setIsFront(false);
		} else {
			setIsFront(true);
		}
	};

	return (
		<div className="w-[11%] aspect-[140/190] relative">
			<div
				onClick={handleOnFlip}
				className={`w-full h-full transition absolute ease-out backface-hidden duration-500 ${
					isFront ? 'rotate-y-180' : ''
				}`}
			>
				<img
					src="/LastGuardian/1LastGuardian_back.png"
					className="w-full h-full aspect-[140/190]"
					alt=""
				/>
			</div>
			<div
				onClick={handleOnFlip}
				className={`w-full h-full transition absolute ease-out backface-hidden duration-500 ${
					isFront ? '' : '-rotate-y-180'
				}`}
			>
				<img
					src="/LastGuardian/amg1_fr1.png"
					className="w-full h-full aspect-[140/190]"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Card;
