import React, { Component } from 'react';

const MAX_HEALTH = 40;

class ConditionTrack extends Component {

	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		let newDamage = this.props.damage === e.target.value ? 0 : e.target.value;
		this.props.onDamageChange(newDamage);
	}

	render() {

		const { damage } = this.props;

		return (
			Array.from(Array(MAX_HEALTH), (e, i) => {
				let health = i + 1;
				return <input checked={damage >= health} type="checkbox" value={health} onChange={this.handleChange} />
			})
		);
	}
}

export default ConditionTrack;
