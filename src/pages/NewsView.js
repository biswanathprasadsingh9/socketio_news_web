import React, { Component } from 'react'
import Body from '../components/Body'
import API from '../api/API'
import { Loader,Button } from 'semantic-ui-react'
import {Helmet} from "react-helmet";
import { toast } from 'react-toastify';

export default class NewsView extends Component {

    state={
        data:null
    }

    componentDidMount(){
        API.get(`/news/${this.props.match.params.id}`)
        .then(response=>{
            this.setState({
                data:response.data.data
            })
        })
    }


    handleDelete=e=>{
        API.get(`/news/delete/${this.props.match.params.id}`)
        .then(response=>{
            if(response.data.response){
                toast.success('Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                this.props.history.push('/')
            }else{
                alert('Failed')
            }
        })
    }

    render() {
        return (
            <Body>
                {this.state.data===null
                ?<Loader active inline='centered' />
                :
                <>
                <Helmet><title>{this.state.data.heading}</title></Helmet>
                
                
                <h1>{this.state.data.heading} <Button floated='right' color='red' onClick={this.handleDelete}>Delete</Button></h1>
                <h3>{this.state.data.subheading}</h3>
                <br /><br />
                <div dangerouslySetInnerHTML={{__html: this.state.data.content}}></div>
                </>}
                
                
            
            </Body>
        )
    }
}
