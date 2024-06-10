import style from './App.module.css';
import SearchCategory from './components/SearchCategory';

const App = () => {
	// const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

	return (
		<main className={style.wrapper}>
			{/* titulo */}
			<h1 className={style.title}>App</h1>

			{/* Input */}
			<SearchCategory />

			{/* Listado de gifs */}

			{/* gif */}
		</main>
	);
};

export default App;
