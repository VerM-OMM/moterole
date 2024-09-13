import React from 'react';
import bgmenu from '../assets/bgmenu.png';

const Mainmenu = () => {
	return (
		<>
			<div
				style={{ backgroundImage: `url(${bgmenu})` }}
				className='bg-cover bg-center antialiased h-screen flex justify-between items-center'>
				<div>1</div>
				{/* center */}
				<div className='space-y-32'>
					<h1 className='font-kavoon text-white text-8xl font-outline-4 text-center font-normal -mt-20'>
						Little Letter <br />
						Adventure
					</h1>
					{/* buttons */}
					<div className='flex justify-center item-center font-kavoon text-[#F1D33E] text-6xl space-x-40'>
						<button >
							<span className='bg-[#0E3532]  outline-[#C78B36] outline  outline-8 rounded-[50px] px-20 py-4'>
								PLAY
							</span>
						</button>
						<button>
							<span className='bg-[#0E3532]  outline-[#C78B36] outline  outline-8 rounded-[50px] px-20 py-4'>
								EXIT
							</span>
						</button>
					</div>
				</div>
				<div>3</div>
			</div>
		</>
	);
};

export default Mainmenu;
