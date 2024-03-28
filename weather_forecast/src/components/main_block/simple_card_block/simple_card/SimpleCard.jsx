import React, {Component} from 'react';
import s from "./SimpleCard.module.css"

class SimpleCard extends Component {
	render() {
		const {weatherData}  = this.props;
		return (
			<div className={s.main}>
	<div>123</div>
			</div>
		);
	}
}

export default SimpleCard;