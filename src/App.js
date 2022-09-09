import { useState, useEffect } from 'react';
import './App.css';

function App() {
	const persistedTheme = localStorage.getItem('theme');
	const [dark, setDark] = useState(persistedTheme || 'light');

	useEffect(() => {
		// console.log(window.matchMedia('(prefers-color-scheme: dark)').matches);
		if (dark === 'light') document.body.classList.remove('dark');
		else document.body.classList.add('dark');
	}, [dark]);

	const toggleMode = (mode) => {
		setDark(mode);
		localStorage.setItem('theme', mode);
	};

	return (
		<div
			className={`justify-center items-center text-center ${
				dark === 'dark' && `dark:bg-zinc-700`
			} h-screen`}
		>
			<h1 className={`text-3xl ${dark === 'dark' && `text-white`}`}>
				Tailwind CSS Color Mode
			</h1>
			<h1 className={`text-3xl font-bold ${dark === 'dark' && `text-white`}`}>
				3xl Text with Font Bold
			</h1>
			<h1 className={`text-6xl underline ${dark === 'dark' && `text-white`}`}>
				6xl Text with underline
			</h1>
			<br />
			<button
				type="button"
				// className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg w-20"
				className={`w-20 border ${
					dark === `dark`
						? `text-black bg-white hover:bg-gray-200`
						: `text-white bg-black hover:bg-gray-700`
				}  py-2 px-4 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg`}
				onClick={() => {
					dark === 'light' ? toggleMode('dark') : toggleMode('light');
				}}
			>
				{dark === 'dark' ? 'Light' : 'Dark'}
			</button>
			<br />
			<br />
			<div
				className={`bg-white ${
					dark === 'dark' && `dark:bg-slate-800`
				}  rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-96 mx-auto`}
			>
				<div>
					<span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
						<svg
							className="h-6 w-6 text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						></svg>
					</span>
				</div>
				<h3
					className={`text-slate-900 ${
						dark === 'dark' && `dark:text-white`
					} mt-5 text-base font-medium tracking-tight`}
				>
					Writes Upside-Down
				</h3>
				<p
					className={`text-slate-500 ${
						dark === 'dark' && `dark:text-slate-400`
					} mt-2 text-sm`}
				>
					The Zero Gravity Pen can be used to write in any orientation,
					including upside-down. It even works in outer space.
				</p>
			</div>
			<br />

			<div className="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
				<div className="w-1/3 bg-cover bg-landscape">
					<img
						className="h-full"
						src="https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=160&q=80"
						alt=""
					/>
				</div>
				<div className="w-2/3 p-4">
					<h1 className="text-gray-900 font-bold text-2xl">Tomorrow</h1>
					<p className="mt-2 text-gray-600 text-sm">
						You can&#x27;t buy your future, but you can do it. Money is nothing,
						you&#x27;r everything.
					</p>
					<div className="flex item-center mt-2">
						<svg
							className="w-5 h-5 fill-current text-gray-700"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
						</svg>
						<svg
							className="w-5 h-5 fill-current text-gray-700"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
						</svg>
						<svg
							className="w-5 h-5 fill-current text-gray-700"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
						</svg>
						<svg
							className="w-5 h-5 fill-current text-gray-500"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
						</svg>
						<svg
							className="w-5 h-5 fill-current text-gray-500"
							viewBox="0 0 24 24"
						>
							<path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"></path>
						</svg>
					</div>
					<div className="flex item-center justify-between mt-3">
						<h1 className="text-gray-700 font-bold text-xl">$220</h1>
						<button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
							Add to Card
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
