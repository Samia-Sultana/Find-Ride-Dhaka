import React  from 'react';
import { useParams, useHistory } from 'react-router';
import './SearchDestination.css';
import Map from '../../images/Map.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useState } from 'react';

const SearchDestination = () => {
    const [destination, setDestination] = useState({
        start: '',
        end: ''
    })
    const { rideType } = useParams();
    const [userInfo, setUserInfo] = useContext(UserContext);
    const history = useHistory();

    const handleSearch = (e) =>{
        if(destination.start && destination.end){
            const newDestination = {...userInfo};
            newDestination.start = destination.start;
            newDestination.end = destination.end;
            newDestination.by = rideType;
            setUserInfo(newDestination);
            history.push('/searchResult');
        }
    }

    const handleInput = (e) =>{
        const copyDestination = {...destination};
        copyDestination[e.target.name] = e.target.value;
        setDestination(copyDestination);
    }

    return (
        <div className="search-container">
            <div className="search-ride">
                <form onSubmit={handleSearch}>
                    <lebel for="start">Pick start</lebel><br/>
                    <input type="text" onBlur={handleInput} id="start" name="start" required/><br/>
                    <lebel for="end">Pick end</lebel><br/>
                    <input type="text" onBlur={handleInput} id="end" name="end" required /><br/>
                    <input type="submit" value="Search" className="btn btn-warning" />
                </form>
            </div>
            <div className="map-container">
                <img src={Map} alt="" />
            </div>
        </div>
    );
};

export default SearchDestination;