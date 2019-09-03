import React, {Component} from 'react';
import Moment from 'moment';
import { Redirect } from 'react-router';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class PurchaseTicket extends Component {
    constructor(props){
        super(props)
        
const myEvent=this.props.location.state && this.props.location.state.myEvent;
    console.log(myEvent)
}
    render() {
        return (
            <div className="jumbotron">
                <section className="section-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-order-details-event-title">
                                    <div className="section-header">
                                        <h2 className="event-title"><strong>{this.props.location.state.myEvent.id}</strong></h2>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="section-order-details-event-title">   
                                        <img className="event-img" src={this.props.location.state.myEvent.cover_image}/>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="section-order-details-event-info">
                                        <div className="venue-details">
                                            <div className="venue-details-info">
                                                <h3>Venue & Event Information</h3>
                                                <p>Venue:{this.props.location.state.myEvent.event_id}</p>
                                            </div>
                                        </div>
                                        <div className="seat-details">
                                            <div className="seat-details-info">
                                                <h3>Event Information</h3>
                                                <p>{this.props.location.state.myEvent.event_description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}