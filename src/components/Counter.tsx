import { useMoviesStore } from "../store/moviesStore";
import { useState } from "react";
export const Counter = () => {
	const { page, setPage } = useMoviesStore((state: any) => state);
	const [counter, setCounter] = useState(page);

	const handleClickAdd = () => {
		if (counter === 0) {
			setCounter(1);
		} else {
			setCounter((counter: number) => counter + 1);
			setPage(counter);
		}
	};
	const handleClickDelete = () => {
		if (counter > 0) {
			setCounter((counter: number) => counter - 1);
			setPage(counter);
		}
	};
	return (
		<>
			<span className="text-amber-400">{page}</span>
			<button
				className="border px-4 py-2 text-xl text-amber-400"
				onClick={handleClickAdd}
			>
				+
			</button>
			<button
				className="border px-4 py-2 text-xl text-amber-400"
				onClick={handleClickDelete}
			>
				-
			</button>
		</>
	);
};
