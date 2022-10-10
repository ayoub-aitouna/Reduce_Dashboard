import React from "react";
import { Sidebar, Partner } from "./index";
function Home() {
	return (
		<div className='bg-gray-100 w-full h-full overflow-hidden'>
			<Sidebar />
			<div className='ml-[259.19px] h-full'>
				<Partner />
			</div>
		</div>
	);
}

export default Home;
