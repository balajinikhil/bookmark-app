import React from 'react';
import {Container} from 'semantic-ui-react';
import {Route, HashRouter} from 'react-router-dom';

import MenuBar from './Menu';
import List from './List';
import AddBook from './Add';
import Auth from './Auth'

class App extends React.Component{

    state = {auth:'none'}

    onAuthorize = (val)=>{
        if(val === true) this.setState({auth:'block'})
        else this.setState({auth:'none'})
    }

    render(){
        return(
            <HashRouter>
                <Container>
                        <MenuBar disp={this.state.auth}   cb={this.onAuthorize}  />
                        <Route path="/" exact component={()=>(<List  disp={this.state.auth} />)} ></Route>
                        <Route path="/addz" exact component={()=>(<AddBook disp={this.state.auth}/>)}></Route>
                        <Route path="/authorize" component={()=>(<Auth cb={this.onAuthorize} disp={this.state.auth} />)} ></Route>

                </Container>
            </HashRouter>
        )
    }
}

export default App;