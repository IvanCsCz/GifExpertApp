import { useState } from 'react';
import style from './App.module.css';
import AddSearch from './components/AddSearch';
import GifGrid from './components/GifGrid';
import { useGifs } from './lib/hooks/useGifs';

const App = () => {
	const [searchValue, setSearchValue] = useState('One punch');
	const { gifs, error, loading } = useGifs(searchValue);

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>GifExpertApp</h1>

			<AddSearch setSearchValue={setSearchValue} />

			<GifGrid
				gifs={gifs}
				error={error}
				loading={loading}
				searchValue={searchValue}
			/>
		</div>
	);
};

export default App;
