import React, {Component} from 'react';
import SingleStudent from './SingleStudent.jsx';


const Students = (props) => {
    console.log(props)
    return (
        <div>
        <h1>From Students</h1>
        {
            props.students //an array of students
            .map( student => (
                <SingleStudent
                key={student.id}
                fullName={student.fullName}
                tests={student.tests}
                />
            ))
        }
        </div>
    )
}

//dumb components get exported on the bottom
export default Students;
