import React from 'react';
import { Card } from 'react-bootstrap';
import Bi from '../../images/Frame.png';
import Bu from '../../images/Frame-1.png';
import Ca from '../../images/Frame-2.png';
import Tr from '../../images/Group.png';
import './Ride.css';
import { Link } from 'react-router-dom';

const Ride = () => {
    const {car,bus,bike,train} = {car:"Car", bus:"Bus", bike:"Bike", train:"Train"};
    return (
        <div className="ride-container">
                <Card style={{ width: '18rem' }} className="card">
                <Link to={"/Search/" + bike}>
                    <Card.Img variant="top" src={Bi} className="ride-img" />
                    <Card.Body>
                        <Card.Title className="ride-title">Bike</Card.Title>
                    </Card.Body>
                </Link>
                </Card>

            <Card style={{ width: '18rem' }} className="card">
            <Link to={"/Search/" + bus}>
                <Card.Img variant="top" src={Bu} className="ride-img" />
                <Card.Body>
                    <Card.Title className="ride-title">Bus</Card.Title>
                </Card.Body>
                </Link>
            </Card>
            
            <Card style={{ width: '18rem' }} className="card">
            <Link to={"/Search/" + car}>
                <Card.Img variant="top" src={Ca} className="ride-img" />
                <Card.Body>
                    <Card.Title className="ride-title">Car</Card.Title>
                </Card.Body>
                </Link>
            </Card>
    
            <Card style={{ width: '18rem' }} className="card">
            <Link to={"/Search/" + train}>
                <Card.Img variant="top" src={Tr} className="ride-img" />
                <Card.Body>
                    <Card.Title className="ride-title">Train</Card.Title>
                </Card.Body>
                </Link>
            </Card>
            
        </div>
    );
};

export default Ride;