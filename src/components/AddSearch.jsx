import { useState } from 'react';
import InputSearch from './forms/InputSearch';

const AddSearch = ({ setSearchValue }) => {
	const [inputValue, setInputValue] = useState('');

	const onSubmit = event => {
		event.preventDefault();
		const inputValueTrimed = inputValue.trim();
		if (inputValueTrimed.length <= 1) return;

		setSearchValue(inputValueTrimed);
		setInputValue('');
	};

	return (
		<form onSubmit={onSubmit}>
			<InputSearch
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={ev => setInputValue(ev.target.value)}
			/>
		</form>
	);
};

export default AddSearch;
