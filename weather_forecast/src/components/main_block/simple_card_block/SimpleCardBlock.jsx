import React, { Component } from 'react';
import s from './SimpleCardBlock.module.css';
import SimpleCard from './simple_card/SimpleCard'; // Подключаем CSS файл для стилей

class SimpleCardBlock extends Component {
	render() {
		const { weatherData} = this.props;

		return (
			<div className={s.container}>
				<div className={s.column}><SimpleCard weatherData={weatherData} /></div>
				<div className={s.column}>Компонент 2</div>
				<div className={s.column}>Компонент 3</div>
				<div className={s.column}>Компонент 4</div>
				<div className={s.column}>Компонент 5</div>
			</div>
		);
	}
}

export default SimpleCardBlock;
