import { useState } from 'react';
import InputSearch from './forms/InputSearch';

const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	const onSubmit = event => {
		event.preventDefault();
		if (inputValue.trim().length <= 1) return;

		// setCategories( categories => [ inputValue, ...categories ]);
		setInputValue('');
		onNewCategory(inputValue.trim());
	};

	return (
		<form onSubmit={onSubmit}>
			<InputSearch
				placeholder='Buscar gifs'
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

export default AddCategory;
