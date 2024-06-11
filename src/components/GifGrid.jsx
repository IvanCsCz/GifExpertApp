import { useFetchGifs } from '../lib/hooks/useFetchGifs';
import style from './GifGrid.module.css';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
	const { images, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>
			{isLoading && <h2>Cargando...</h2>}

			<div className={style.cardGrid}>
				{images.map(image => (
					<GifItem key={image.id} {...image} />
				))}
			</div>
		</>
	);
};

export default GifGrid;
