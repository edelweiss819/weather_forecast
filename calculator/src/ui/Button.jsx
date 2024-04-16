import React from 'react';
import styles from './Button.module.css';

function Button({children, style}) {
	return (
		<div className={styles.Button} style={style}>
			{children}
		</div>
	);
}

export default Button;
