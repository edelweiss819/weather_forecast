import React from 'react';
import style from './OutputValue.module.css';

function OutputValue(props) {
	return (
		<div><input
			className={style.OutputValue}
			placeholder={'1,258.2'}/></div>
	);
}

export default OutputValue;