import React, {Component} from 'react';
import axios from 'axios';
import Students from './Students.jsx'

//smart components render
//dumb components return
//lifecycle events happen every time th epage is rendered

export default class Main extends Component {
    // console.log('PROPS: ', proprs)
    constructor(props) {
        super(props)
        this.state = {
            students: []
        }
    }

    //set is always set initially (tom's first law), when it's first set, it is an empty object(or whatever we set it too)
    //we want to call componentDidMount() to make sure that we essentially make sure that the state has data in it
    //because first we will just get an empty array, and THEN once it mounts we will get the actual data...at which point we can 
    //actually get the students data that we are looking for
    // so then it :
    // this calls it again to be set again after initial render

    componentDidMount() {
        this.getStudents()
    }


    getStudents() {
        axios.get('/student')
        .then(res => this.setState({students: res.data})) 
        // to set state --> setState!, also res.data is what we get and what we want!
        .catch(console.error)
    }


    render() {
        return (
            <div>
                <h1>Happy Saturday!</h1>
               <Students students = {this.state.students}/>       
            </div>
        )
    }
}
