import React, {Component} from 'react';
import {owmApiKey} from '../api_keys/owmApiKey';
import s from  "./SearchForm.module.css"
class SearchForm extends Component {
	constructor(props) {
		super(props);
		this.state = {value:"London", weatherData : null}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}
	handleChange(e){
		this.setState({value: e.target.value})

	}
	async handleSubmit(e){
		e.preventDefault()
		try{
			const response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${this.state.value}&limit=5&appid=${owmApiKey}`);
			if(!response.ok){
				throw new Error ("Ошибка при получении данных")
			}
			const data  = await response.json();
			console.log(data);
			// console.log (data.list[0].dt);
// Получаем и форматируем дату
			const timestamp = data.list[0].dt;
			const date = new Date(timestamp * 1000);
			const formattedDate = date.toISOString();
			this.props.onUpdateWeatherData(data);
			this.props.onUpdateCityName(this.state.value);
			this.props.onUpdateDate(formattedDate);

		} catch (error){
			console.error("Ошибка:", error.message)
		}
	}
	render() {
		return (
			<div className={s.SearchForm}>
				<form  onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.value} onChange={this.handleChange}/>
					<button>Отправить</button>
				</form>
			</div>
		);
	}
}

export default SearchForm;
