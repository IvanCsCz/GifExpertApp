export const findAllGifs = async (signal, searchValue) => {
	const url = getGifsUrl(searchValue);

	try {
		const res = await fetch(url, { signal });
		let data;

		if (res.ok) data = await res.json();

		const gifs = data.data.map(gif => ({
			id: gif.id,
			title: gif.title,
			url: gif.images.downsized_medium.url
		}));

		return {
			gifs,
			error: !res.ok,
			aborted: false
		};
	} catch (err) {
		const isAborted = err.name === 'AbortError';

		return {
			gifs: undefined,
			error: !isAborted,
			aborted: isAborted
		};
	}
};

export const getGifsUrl = searchValue => {
	const API_KEY = 'EHkG5RJALUCPluVuu7Knjii1VYaTZ0LA';
	const url = new URL('https://api.giphy.com/v1/gifs/search');
	url.searchParams.append('api_key', API_KEY);
	url.searchParams.append('q', searchValue);
	url.searchParams.append('limit', 10);

	return url.href;
};
