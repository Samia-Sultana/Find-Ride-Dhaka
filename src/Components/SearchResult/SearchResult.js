import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import Map from '../../images/Map.png';
import Bike from '../../images/Frame.png';
import Bus from '../../images/Frame-1.png';
import Car from '../../images/Frame-2.png';
import Train from '../../images/Group.png';
import fakeData from '../../FakeData/FakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './SearchResult.css';

function SearchResult() {
    const [userInfo, setUserInfo] = useContext(UserContext);
    const [result,setResult] = useState({});
    let ride = '';
    if(userInfo.by === 'Bus') ride = Bus;
    else if(userInfo.by === 'Bike') ride = Bike;
    else if(userInfo.by === 'Car') ride = Car;
    else if(userInfo.by === 'Train') ride = Train;
    
     useEffect(()=>{
        fakeData.find(element =>{
            if(userInfo.start !== userInfo.end){
                if((element.dest1 === userInfo.start && element.dest2 === userInfo.end && element.by === userInfo.by) || 
                    (element.dest1 === userInfo.end && element.dest2 === userInfo.start && element.by === userInfo.by)){
                    setResult(element);
                    console.log(element);
                }
            }
            
    })
     },[])
    
    return (
        <div className="search-result">
            <div className="result">
                <div className="route">
                    <p>{userInfo.start}</p>
                    <p>{userInfo.end}</p>
                </div>
                <div className="route-info">
                    <div className="detail">
                    <img src={ride} alt="" />
                   
                    <p><FontAwesomeIcon icon={faUser} />{result?.person}</p>
                    </div>
                    <div className="fare">
                        <p>${result?.fare}</p>
                    </div>
                </div>
            </div>
            <div className="map-container">
                <img src={Map} alt="" />
            </div>
        
            
        </div>
    );
}

export default SearchResult;