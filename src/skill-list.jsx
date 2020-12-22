import React, { Component } from 'react';
import Skill from './skill';

class SkillList extends Component {

	render() {

		let { stat, skills } = this.props;

		return (
			0 !== skills.length &&
			<div className="skillgroup">
				<div className="skillgroup-stat">{stat.code}</div>
				{
					skills.sort((a, b) => (a.name > b.name) ? 1 : -1).map((skill) => {
						return <Skill id={skill.name} name={skill.name} value={skill.value} chipped={!!skill.chipped} />
					})
				}
			</div>
		);
	}
}

export default SkillList;
