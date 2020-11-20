import React from 'react';
import axios from 'axios';
import {Form, Input, Segment, Message} from 'semantic-ui-react';
import {Link} from 'react-router-dom'
import apiRoute from '../apiRoute';

class AddBook extends React.Component{

    state = { bookmark:'',  title:'', msg:'none'}

    formSubmit = () => {

        axios.post(`${apiRoute}/add`, this.state, {
            headers:{
                authKey:'uwfzcnkbjbxrkedryjlshkgrgcnmkzqm'
            }
        }).then((res)=>{
            if(res.data.status === 'created'){
                this.setState({msg:'block'})
            }
        })
    
        this.setState({bookmark:'', title:''})
    }


    renderSucess = () => {
        return(
            <div style={{display:this.state.msg}}>
                <Message positive >
                    <Message.Header>Bookmark Added !</Message.Header>
                    <p>
                        <Link to='/'>
                           <b>Redirect</b> 
                        </Link>
                    </p>
                </Message>
            </div>
        )
    }

    render(){
        return(
            <Segment style={{display:this.props.disp}} >    
                <Form
                
                onSubmit={this.formSubmit} >
                    <Form.Group>
                        <Form.Field inline>
                            <label>Bookmark</label>
                            <Input placeholder='https://www.example.com' required
                            value={this.state.bookmark} onChange={(e,{value})=>{this.setState({bookmark:value})}}  />
                        </Form.Field>
                        <Form.Field inline>
                            <label>Title</label>
                            <Input placeholder="title" required value={this.state.title}
                            onChange={(e,{value})=>this.setState({title:value})}
                            />
                        </Form.Field>
                        <Form.Button content='Submit' />
                    </Form.Group>
                    {this.renderSucess()}
                </Form>
            </Segment>
        )
    }
}

export default AddBook;