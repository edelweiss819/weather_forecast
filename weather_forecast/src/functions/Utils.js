

export function getMonthName(date) {
	const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
	const monthIndex = date.getMonth();
	return months[monthIndex];
}

export function getDayOfMonth(date) {
	return date.getDate();
}

export function getDayOfWeek(date) {
	const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
	const dayIndex = date.getDay();
	return days[dayIndex];
}
