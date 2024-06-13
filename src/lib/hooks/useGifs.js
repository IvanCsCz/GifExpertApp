import { useEffect, useState } from 'react';
import { findAllGifs } from '../api/gifsApi';

export const useGifs = searchValue => {
	const [gifs, setGifs] = useState({
		data: [],
		error: false,
		loading: true
	});

	const setData = newData =>
		setGifs({ data: newData, error: false, loading: false });

	const setError = () => setGifs({ data: [], error: true, loading: false });

	useEffect(() => {
		const controller = new AbortController();

		loadGifs(setData, setError, controller.signal, searchValue);

		return () => controller.abort();
	}, [searchValue]);

	return {
		gifs: gifs.data,
		error: gifs.error,
		loading: gifs.loading
	};
};

const loadGifs = async (setData, setError, signal, searchValue) => {
	const { gifs, aborted } = await findAllGifs(signal, searchValue);

	if (aborted) return;
	if (gifs) setData(gifs);
	else {
		setError();
	}
};
