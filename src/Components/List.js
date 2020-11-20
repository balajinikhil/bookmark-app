import React from 'react';
import axios from 'axios';
import {List,Image, Segment, Divider, Icon} from 'semantic-ui-react';
import apiRoute from '../apiRoute';

class ListView extends React.Component{
    componentDidMount(){
        this.DataRequest('page=1')
    }

    DeleteRequest = (id) => {
        axios.delete(`${apiRoute}/delete/${id}`,{
            headers:{
                authKey:'uwfzcnkbjbxrkedryjlshkgrgcnmkzqm'
            }
        }).then((res)=>{
            alert('Deleted Successfully')
            this.DataRequest();
        })
    }

    DataRequest = () => {
        axios.get(`${apiRoute}/list`,{
            headers:{
                authKey:'uwfzcnkbjbxrkedryjlshkgrgcnmkzqm'
            }
        }).then((res)=>{
            this.setState({listArr:res.data.list});
            this.setState({length:res.data.length});            
        })
    }

    state = {
        listArr:null,
    }

    renderList = () => {
        // <img src="https://attacomsian.com">
    
        return this.state.listArr.map((e,i) => {
            let date = new Date(e.bk_date);
            let dateFormat = date.toUTCString()
            return(
                        <List key={i} >
                            <List.Item>
                            <Image avatar src={`https://www.google.com/s2/favicons?domain=${e.bk_url}`} />
                            <List.Content>
                                <List.Header as='a'>
                                    {e.bk_title}
                                </List.Header>
                                <List.Description>
                                    <a href={e.bk_url} target="__blank" >{e.bk_url} </a>
                                    <br />
                                    <span style={{marginLeft:'auto'}}>{`${dateFormat}`}</span>
                                    <br />

                                    <span style={{display:this.props.disp}}>
                                        <Icon   onClick={()=>this.DeleteRequest(e.bk_id)} name="trash" />
                                    </span>  
                                   
                                </List.Description>
                            </List.Content>
                            </List.Item>
                            <Divider />
                        </List>
            )
            });
    }


    render(){
        return(
            <Segment>
                {this.state.listArr ? this.renderList(): 'loading...'}
            </Segment>
        )
    }
}

export default ListView;