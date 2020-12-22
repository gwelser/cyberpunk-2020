import React, { Component } from 'react';
import {ReactComponent as Chip} from './microchip.svg';

class Skill extends Component {

	render() {

		let data = this.props;

		return (
			<div className="skillgroup-skill">
				{!!data.chipped && <span><Chip /></span>}
				<div>{data.name}..........{data.value}</div>
			</div>
		);
	}
}

export default Skill;
