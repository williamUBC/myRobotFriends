import React, { Component } from 'react';
import CardList from '../components/CardList';
//import { robots } from './robots';
import ErrorBoundary from '../components/ErrorBoundary'
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField, requestRobots } from '../actions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: []
    //     };
    // }

    componentDidMount() {       
        this.props.onRequestRobots();
        // console.log(this.props); 
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => {
        //        return response.json();
        //     })
        //     .then(users => {
        //         this.setState({ robots: users});
        //     })        
    }

    //onSeachChange = (event) => {
    //    this.setState({searchfield: event.target.value});        
        //const filteredRobots = this.state.robots.filter((robot) => {
            //return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        //})// 如果onSeachChange不写成箭头函数，this指向的是searchBox 里的input
        //console.log(filteredRobots);
    //}

    render() {        
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filteredRobots = robots.filter((robot) => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        if(robots.length === 0){
            return <h1>Loading</h1>
        }else{
            return isPending ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots}/> 
                        </ErrorBoundary>
                        {/* CardList is the children of Scroll, children, state, and props are three ideas in React */}                        
                    </Scroll>                    
                </div>        
            );
        }        
    }    
};

export default connect(mapStateToProps, mapDispatchToProps)(App); // connect is called higher order function which can return another fucntio when gets called