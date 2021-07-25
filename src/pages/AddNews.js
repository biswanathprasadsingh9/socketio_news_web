import React, { Component } from 'react'
import Body from '../components/Body'
import {Helmet} from "react-helmet";
import { Form } from 'semantic-ui-react'
import CKEditor from 'ckeditor4-react-advanced';
import API from '../api/API'
import { toast } from 'react-toastify';
import socketIoClient from 'socket.io-client'


const socket = socketIoClient(process.env.REACT_APP_SOCKET)
console.log(socket)

export default class AddNews extends Component {

    constructor(props){
        super(props)
        this.state={
            imageurl:'',
            heading:'',
            subheading:'',
            content:'',
            category:'india'
        }
        this.handleTextChange=this.handleTextChange.bind(this)
        this.onEditorChange=this.onEditorChange.bind(this)

    }


    handleTextChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onEditorChange( evt ) {
        this.setState( {
            content: evt.editor.getData()
        } );
    }


    handleSubmit=e=>{

        // socket.emit('post_news',this.state,response=>{
        //     console.log(response)
        // })


        API.post('/news',this.state)
        // API.post('/newssocket',this.state)
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
            <Helmet><title>Add News</title></Helmet>
            <section>
                <h5>Home / Add News</h5>
                <h2 style={{marginTop:'-11px'}}>Add News</h2>
            </section>
            <br />
            <section>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Input fluid label='Image URL' placeholder='Image URL' name='imageurl' value={this.state.imageurl} onChange={this.handleTextChange} required/>
                    <Form.Input fluid label='Heading' placeholder='Heading' name='heading' value={this.state.heading} onChange={this.handleTextChange}  required/>
                    <Form.Input fluid label='SubHeading' placeholder='SubHeading' name='subheading' value={this.state.subheading} onChange={this.handleTextChange}  required/>
                    <Form.Field label='Category' control='select' name='category' value={this.state.category} onChange={this.handleTextChange} required>
                        <option value='india'>India</option>
                        <option value='opinion'>Opinion</option>
                        <option value='world'>World</option>
                        <option value='cities'>Cities</option>
                        <option value='people'>People</option>
                        <option value='science'>Science</option>
                    </Form.Field>
                    <div className="required field">
                        <label>Content</label>
                        <CKEditor
                        onChange={this.onEditorChange}
                        config={{
                        width: '100%',
                        height: '350px',
                        borderRadius: '3px'
                        }}
                        required
                    />
                    </div>
                    <Form.Button floated='right'>Add Now</Form.Button>
                </Form>
            </section>
            <br /><br /><br />
        </Body>
        )
    }
}
