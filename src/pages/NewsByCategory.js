import React, { Component } from 'react'
import Body from '../components/Body'
import {Helmet} from "react-helmet";

import NewsBlock1 from '../components/NewsBlock1';
import NewsBlockLoader from '../components/NewsBlockLoader'
// import socketIoClient from 'socket.io-client'

// const socket = socketIoClient(process.env.REACT_APP_SOCKET)
// console.log(socket)

import io from "socket.io-client";
// let socket = io(process.env.REACT_APP_SOCKET);



export default class NewsByCategory extends Component {

    constructor(props){
        super(props)
        this.state=({
            pageLoading:true,
            news:null
        })
    }

    componentDidMount(){
        this.getData(this.props.match.params.category)

    }

    componentDidUpdate(nextProps,prevProps){

        if(nextProps.match.params.category !== this.props.match.params.category){
            console.log('new');
            this.getData(this.props.match.params.category)
        }else{
            console.log('old');

        }

        
    }

    getData(category){
        var socket = io(process.env.REACT_APP_SOCKET, {     
            query: {
                category: category,
            }              
        });
        socket.connect();
       

        console.log(socket)

        
        socket.on('get_category_data',data=>{
            this.setState({
                news:data
            })
        })


        // const socket = io({
        //     query: { token: 'cde' }
        // });
    }

    render() {
        return (
            <Body>
                <Helmet><title>{this.props.match.params.category}</title></Helmet>

                <section>
                    <h5>Home / {this.props.match.params.category}</h5>
                    <h2 style={{marginTop:'-11px'}}>{this.props.match.params.category}</h2>
                </section>

                <br />
                <section>
                    {this.state.news===null
                    ?<NewsBlockLoader />
                    :
                    <>
                    {this.state.news.map((data)=>{
                        return(
                            <NewsBlock1 data={data} key={data._id} />
                        )
                    })}
                    </>
                    }

                    <br />

                    
                </section>
            </Body>
        )
    }
}
