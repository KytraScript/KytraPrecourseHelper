import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Variables from './components/Variables.jsx';
import Arrays from './components/Arrays.jsx';
import Objects from './components/Objects.jsx';
import {BrowserRouter as Router, Route, Switch, useParams, Link} from 'react-router-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount(){

    }



    render() {
        return (
            <Router>
                <div className={'main-column'}>
                    <div className={'nav-bar'}>
                        <div className={'nav-links'}>
                            <div className={'link'} id={'nl-home'}>
                                <Link to="/">Home</Link>
                            </div>
                            <div className={'link'} id={'nl-variables'}>
                                <Link to="/variables">Variables</Link>
                            </div>
                            <div className={'link'} id={'nl-arrays'}>
                                <Link to="/arrays">Arrays</Link>
                            </div>
                            <div className={'link'} id={'nl-objects'}>
                                <Link to="/objects">Objects</Link>
                            </div>
                        </div>
                    </div>
                    <div className={'main-container'}>
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/variables">
                                <Variables/>
                            </Route>
                            <Route path="/arrays">
                                <Arrays/>
                            </Route>
                            <Route path="/objects">
                                <Objects/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));