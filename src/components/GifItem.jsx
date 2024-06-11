import style from './GifItem.module.css';

const GifItem = ({ title, url, id }) => {
	return (
		<div className={style.card}>
			<img src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
};

export default GifItem;
