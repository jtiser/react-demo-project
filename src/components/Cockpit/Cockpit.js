import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../Auxiliary/Auxiliary';

const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = classes.CockpitButton;

    if (props.showPersons) {
        btnClass = [classes.CockpitButton, classes.Red].join(' ');
    }

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <Aux>
            <div>
                <h1>{props.appTitle}</h1>
                <p className={assignedClasses.join(' ')}>This is really working!</p>
                <button
                    className={btnClass}
                    onClick={props.clicked}>Toggle Persons</button>
            </div>
        </Aux>
    );
};

export default cockpit;