import React, { PureComponent } from 'react';
import classes from './App.css';
import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';

class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log('App.js Inside Constructor', props);
    this.state = {
      persons: [
        { id: 'asfa1', name: 'Max', age: 28 },
        { id: 'vasdf1', name: 'Manu', age: 29 },
        { id: 'asdf11', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

//   shouldComponentUpdate(nextProps, nextState){
//     console.log('[UPDATE App.js] Inside shouldComponentUpdate', nextProps, nextState);
//     return nextState.persons !== this.state.persons ||
//       nextState.showPersons !== this.state.showPersons;
// }

  componentWillUpdate( nextProps, nextState ) {
      console.log( '[UPDATE App.js] Inside componentWillUpdate', nextProps, nextState);
  }

  componentDidUpdate() {
      console.log('[UPDATE App.js] Inside componentDidUpdate');
  }

  // state = {
  //   persons: [
  //     { id: 'asfe',name: 'Max', age: 28 },
  //     { id: 'sghe', name: 'Manu', age: 29 },
  //     { id: 'sfty', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  // switchNameHandler = (newName) => {
  //   //console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState( {
  //     persons: [
  //       { name: 'Max', age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   } )
  // }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.userId === id;
    });

    // Spread operator is the modern JS option
    const person = {
      ...this.state.persons[personIndex]
    };

    //Alternative to spread operator used above
    // const person = Object.assign({}, this.state.person[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} )

  }
  //.slice creates a new array, spread operator can be used alternatively
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // Toggle click function with counter
  // setState is asynchronous
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( (prevState, props) => { 
      return { 
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1 
      }
    } );
  }

  render() {
    console.log('[App.js] Inside render()');
    // toggle button information
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />;
    }

    return (
      <Aux>
          <button onClick={() => {this.setState({showPersons: true})}}>Show Persons</button>
          <Cockpit 
              appTitle={this.props.title}
              showPersons={this.state.showPersons} 
              persons={this.state.persons}
              clicked={this.togglePersonsHandler} />
          { persons }
        </Aux>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, ' Does this work now?'));
  }
}

// Radium is known as a higher order component
export default withClass(App, classes.App);
