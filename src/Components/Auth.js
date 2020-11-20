import Axios from 'axios'
import React from 'react'
import { Segment, Input } from 'semantic-ui-react'
import apiRoute from '../apiRoute';


class Auth extends React.Component{

    state = {auth:'', view:''}

    submitAuth = ()=>{
        Axios.post(`${apiRoute}/authorize`, this.state).then((res)=>{
            if(res.data.status === 'authorized') this.props.cb(true)
            else this.props.cb(false)
        }).catch(err=>{
            this.props.cb(false)
        })
    }

    renderContent = () => {
        return(
            <Segment >
                <Input action={{
                    icon:'shield',
                    onClick:this.submitAuth
                }} 
                onChange={(e,{value})=>this.setState({auth:value})}
                value={this.state.auth} 
                type='password'
                placeholder='CODE' />
            </Segment>
        )
    }



    render(){
        return this.props.disp === 'none' ? this.renderContent() : ''
    }
}

export default Auth 