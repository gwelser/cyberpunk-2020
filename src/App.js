import React, { Component } from 'react';

import Statistic from './statistic';
import SkillList from './skill-list';
import ConditionTrack from './condition-track';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleDamageChange = this.handleDamageChange.bind(this);
    this.state = {
      statistics: [
        { code: 'INT', name: 'Intelligence', value: 5 },
        { code: 'REF', name: 'Reflexes', value: 5 },
        { code: 'TECH', name: 'Tech', value: 5 },
        { code: 'COOL', name: 'Cool', value: 5 },
        { code: 'ATTR', name: 'Attractiveness', value: 5 },
        { code: 'LUCK', name: 'Luck', value: 5 },
        { code: 'MA', name: 'Movement Allowance', value: 5 },
        { code: 'BODY', name: 'Body', value: 5 },
        { code: 'EMP', name: 'Empathy', value: 5 }
      ],
      skills: [
        { name: 'Personal Grooming', statistic: 'ATTR', value: 0, chipped: false },
        { name: 'Wardrobe & Style', statistic: 'ATTR', value: 0, chipped: false },
        { name: 'Endurance', statistic: 'BODY', value: 8, chipped: false },
        { name: 'Strength Feat', statistic: 'BODY', value: 8, chipped: false },
        { name: 'Swimming', statistic: 'BODY', value: 8, chipped: false },
        { name: 'Athletics', statistic: 'REF', value: 8, chipped: false },
        { name: 'Handgun', statistic: 'REF', value: 6, chipped: false },
      ],
      damage: 0,
    }
  }

  handleDamageChange(damage) {
    this.setState({ damage: damage });
  }

  render() {

    return (
      <div className="App">
        {
          this.state.statistics.map((stat) => {
            return <Statistic id={stat.code} name={stat.code} value={stat.value} />
          })
        }
        {
          [...this.state.statistics].sort((a, b) => (a.name > b.name) ? 1 : -1).map((stat) => {
            const skills = this.state.skills.filter((skill => stat.code === skill.statistic));
            return (
              <SkillList stat={stat} skills={skills} />
            );
          })
        }
        <ConditionTrack damage={this.state.damage} onDamageChange={this.handleDamageChange} />
      </div>
    );
  }
}

export default App;
