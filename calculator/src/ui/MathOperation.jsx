import React from 'react';
import Button from './Button';
import styles from './MathOperation.module.css';

function MathOperation() {
	const mathOperation = ['÷', '×', '–', '+', ' ='];
	return (
		<div className={styles.mathOperationGrid}>
			{mathOperation.map((operator) => {
				return (
					<Button
						key={operator}
						children={operator}
						style={{
							backgroundColor: `var(--blue)`,
							...(operator === '÷' && {gridArea: '1 / 1 / 2 / 2'}),
							...(operator === '×' && {gridArea: '2 / 1 / 3 / 2'}),
							...(operator === '–' && {gridArea: '3 / 1 / 4 / 2'}),
							...(operator === '+' && {gridArea: '4 / 1 / 5 / 2'}),
							...(operator === '=' && {gridArea: '5 / 1 / 6 / 2'}),
						}}
					/>
				);
			})}
		</div>
	);
}

export default MathOperation;
