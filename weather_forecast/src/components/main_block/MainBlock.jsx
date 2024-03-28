import React, { Component } from 'react';
import s from "./MainBlock.module.css"
import SimpleCardBlock from './simple_card_block/SimpleCardBlock';

class MainBlock extends Component {
	render() {
		const { weatherData ,cityName } = this.props;
		return (
			<div className={s.MainBlock}>
				<h1>Погода в {cityName}</h1>
				<SimpleCardBlock weatherData={weatherData}/>
			</div>
		);
	}
}

export default MainBlock;
