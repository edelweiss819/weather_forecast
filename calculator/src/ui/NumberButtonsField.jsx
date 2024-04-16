import React from 'react';
import Button from './Button.jsx';
import styles from './NumberButtonsField.module.css';

function NumberButtonsField() {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, '.', 0, ' x'];
	return (
		<div className={styles.numberButtonsFieldGrid}>
			{numbers.map((number) => {
				return (
					<Button key={number} children={number}
							style={{
								backgroundColor: `var(--dark)`,
								...(number === '1' && {gridArea: '3 / 1 / 4 / 2'}),
								...(number === '2' && {gridArea: '3 / 2 / 4 / 3'}),
								...(number === '3' && {gridArea: '3 / 3 / 4 / 4'}),
								...(number === '4' && {gridArea: '2 / 1 / 3 / 2'}),
								...(number === '5' && {gridArea: '2 / 2 / 3 / 3'}),
								...(number === '6' && {gridArea: '2 / 3 / 3 / 4'}),
								...(number === '7' && {gridArea: '1 / 1 / 2 / 2'}),
								...(number === '8' && {gridArea: '1 / 2 / 2 / 3'}),
								...(number === '9' && {gridArea: '1 / 3 / 2 / 4'}),
								...(number === '.' && {gridArea: '4 / 1 / 5 / 2'}),
								...(number === '0' && {gridArea: '4 / 2 / 5 / 5'}),
								...(number === 'x' && {gridArea: '4 / 3 / 5 / 4'}),
							}}
					/>
				);
			})}
		</div>
	);
}

export default NumberButtonsField;