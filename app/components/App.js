import React from 'react';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';
import Results from './Results';
import Nav from './Nav';
import { Switch, BrowserRouter, Route } from 'react-router-dom';


class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div className='container'>
                    <Nav/>
                    <Switch>
                        <Route path='/popular' component={Popular} />
                        <Route exact path='/' component={Home}/>
                        <Route path='/battle/results' component={Results}/>
                        <Route exact path='/battle' component={Battle}/>
                        <Route render={() => <p>Not Found</p>}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
