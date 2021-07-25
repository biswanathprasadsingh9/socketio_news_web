import React, { Component } from 'react'
import { Grid,Card } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class NewsBlock1 extends Component {

    constructor(props){
        super(props)
        this.state={
            data:this.props.data
        }
    }

    render() {
        return (
            <Card style={{width:'100%'}}>
                <Card.Content>
                    <Link exact to={`/newsview/${this.state.data._id}`} style={{color:'black'}}>
                    <Grid>
                        <Grid.Column mobile={16} tablet={16} computer={2}>
                            <img src={this.state.data.imageurl} alt="newsimage" width="100%" style={{borderRadius:'3px'}} />
                        </Grid.Column>
                        <Grid.Column mobile={16} tablet={16} computer={14}>
                            <h3>{this.state.data.heading}</h3>
                            <p>{this.state.data.subheading}</p>
                        </Grid.Column>
                    </Grid>
                    </Link>
                    
                </Card.Content>
            </Card>
            
        )
    }
}
