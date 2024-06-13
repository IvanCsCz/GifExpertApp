import style from './GifGrid.module.css';
import GifItem from './GifItem';

const GifGrid = ({ gifs, error, loading, searchValue }) => {
	if (loading) return <p>Cargando gifs...</p>;
	if (error) return <p>Error al cargar los usuarios</p>;
	if (!gifs.length) return <p>No hay gifs</p>;

	return (
		<>
			<h3>{searchValue}</h3>
			<div className={style.cardGrid}>
				{gifs.map(gif => (
					<GifItem key={gif.id} {...gif} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
