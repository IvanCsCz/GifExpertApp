import { useState } from 'react';
import style from './App.module.css';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const App = () => {
	const [categories, setCategories] = useState(['']);

	const onAddCategory = newCategory => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	return (
		<div className={style.wrapper}>
			<h1 className={style.title}>GifExpertApp</h1>

			<AddCategory onNewCategory={value => onAddCategory(value)} />

			{categories.map(category => (
				<GifGrid key={category} category={category} />
			))}
		</div>
	);
};

export default App;
