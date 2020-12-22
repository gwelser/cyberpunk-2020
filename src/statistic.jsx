import React, { Component } from 'react';

class Statistic extends Component {

	render() {

		let data = this.props;

		return (
			<div className="stat"><span className="stats__code">{data.name}</span> [{data.value}]</div>
		);
	}
}

export default Statistic;
