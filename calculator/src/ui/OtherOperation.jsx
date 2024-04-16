import React from 'react';
import Button from './Button';
import styles from './OtherOperation.module.css';

function OtherOperation() {
	const otherOperation = ['C', 'S', '%'];
	return (
		<div className={styles.otherOperationGrid}>
			{otherOperation.map((operator) => {
				return (
					<Button key={operator}
							children={operator}
							style={{
								backgroundColor: `var(--gray)`,
								...(operator === 'C' && {gridArea: ' 1 / 1 / 2 / 2'}),
								...(operator === 'S' && {gridArea: '1 / 2 / 2 / 3'}),
								...(operator === '%' && {gridArea: '1 / 3 / 2 / 4'}),
							}}/>
				);
			})}
		</div>
	);
}

export default OtherOperation;