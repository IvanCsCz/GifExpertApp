import style from './GifItem.module.css';

const GifItem = ({ title, url }) => {
	return (
		<div className={style.card}>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifItem;
