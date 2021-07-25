import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Helmet} from "react-helmet";
import Body from '../components/Body'
import NewsBlock1 from '../components/NewsBlock1';
import NewsBlockLoader from '../components/NewsBlockLoader'

import io from "socket.io-client";


export class Home extends Component {

    state={
        news:null
    }

    componentDidMount(){

        var socket = io(process.env.REACT_APP_SOCKET);
        socket.connect();

        socket.on('all_news',data=>{
            console.log(data)
            this.setState({
                news:data
            })
        })
    }

    render() {
        return (
            <Body>
                <Helmet><title>Home</title></Helmet>
             
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

const mapStateToProps = (state) => ({
})



export default connect(mapStateToProps)(Home)
