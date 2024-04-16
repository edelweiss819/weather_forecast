import React from 'react';
import OutputValue from '../ui/OutputValue';
import LastOperationInfo from '../ui/LastOperationInfo';

function CalculationDisplay(props) {
	return (
		<div>
			<LastOperationInfo/>
			<OutputValue/>
		</div>
	);
}

export default CalculationDisplay;