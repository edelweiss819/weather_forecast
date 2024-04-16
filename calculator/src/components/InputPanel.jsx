import React from 'react';
import OtherOperation from '../ui/OtherOperation';
import NumberButtonsField from '../ui/NumberButtonsField';
import MathOperation from '../ui/MathOperation';
import styles from './InputPanel.module.css';

function InputPanel(props) {
	return (
		<div className={styles.InputPanel}>
			<OtherOperation/>
			<NumberButtonsField/>
			<MathOperation/>
		</div>
	);
}

export default InputPanel;