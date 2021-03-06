import React, {Component, PropTypes} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import Navbar from '../SmallElements/Navbar.jsx'
import {Challenges} from "../../api/challenges.jsx";
import Challenge from "../SmallElements/Challenge.jsx";
import LandingNavbar from "../SmallElements/LandingNavbar";
import {Redirect} from 'react-router';

// ProjectsView component - represents the whole app
class ChallengesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hideCompleted: false
        };
    }

    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    }

    renderProjects() {
        let filteredChallenges = this.props.challenges;
        // console.log(filteredChallenges);
        return filteredChallenges.map((challenge) => {
            if (challenge._id)
                return (
                    <Challenge
                        key={challenge._id}
                        challenge={challenge}
                    />
                );
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call('tasks.insert', text);
        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }

    render() {
        return (
            <div>
                { Meteor.userId() ? null : <Redirect push to="/main"/> }
                <LandingNavbar/>
                <div className="row my-4">
                    <div className="container">
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h1>Active challenges</h1>

                    </div>
                </div>
                <div className="container">
                    <hr/>
                    <p>Here you can find all the active challenges of your brand. Check out any challenge and find out the current ranking of sellers.</p>

                    <div className="row">
                        {this.renderProjects()}
                    </div>
                </div>
            </div>
        );
    }
}

export default createContainer(() => {
    Meteor.subscribe('challenges', Meteor.userId());
    return {
        challenges: Challenges.find({}, {sort: {createdAt: -1}}).fetch(),
        currentUser: Meteor.user(),
    };
}, ChallengesList);