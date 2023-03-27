import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import RankingTable from "./RankingTable";


interface Activity{
    
        "resource_state": number,
        "athlete": {
            "resource_state": number,
            "firstname": string,
            "lastname": string
        },
        "name": string,
        "distance": number
        "moving_time": number,
        "elapsed_time": number,
        "total_elevation_gain": number,
        "type": string,
        "sport_type": string,
        "workout_type": string
    
}

interface AthleteData{
    "fullName" : string,
    "totalDistance" : number,
    "totalAscend" : number,
    "movingTime" : number
    
}





export const ClubRanking = () => {

    const [athletesData, setAthletesData] = useState<AthleteData[]>([]);

    useEffect(()=>{
        const ACCESS_TOKEN = "36e8d10fb47ce9160ccf315842242d1d3e1dd4a7";
        const Url = `https://www.strava.com/api/v3/clubs/1105282/activities?after=${moment().startOf('month').unix()}`;
        axios.get(Url, {headers: {Authorization: `Bearer ${ACCESS_TOKEN}` }}).then((response => {
            calculateRanking(response.data);
        })).catch()
    },[]);


    const calculateRanking =  (athletesStravaData:Activity[])=>{
        athletesStravaData.forEach((athData)=>{
            setAthletesData(prevAthletesDate => {
                let fullName = `${athData.athlete.firstname} ${athData.athlete.lastname}`;
                const athleteExistIndex = prevAthletesDate.findIndex(x=> x.fullName === fullName);
                if(athleteExistIndex === -1){
                    return [...prevAthletesDate, {fullName: fullName, totalDistance: athData.distance, movingTime: athData.moving_time, totalAscend: athData.total_elevation_gain}];
                }else{
                  
                    const newAthletesData = [...prevAthletesDate];
                    const athleteInfo = newAthletesData[athleteExistIndex];
                    newAthletesData[athleteExistIndex] = {
                        ...athleteInfo,
                        totalDistance: athleteInfo.totalDistance + athData.distance,
                        totalAscend: athleteInfo.totalAscend + athData.total_elevation_gain,
                        movingTime: athleteInfo.movingTime + athData.moving_time
                    };

                    return newAthletesData;
                }
            })
        });
       
    }

  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
           Distance Conquerors
          </button>
          <button
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Fast & Furios
          </button>
          <button
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Climbers
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <RankingTable data={athletesData} tableType={{type:'distance'}}></RankingTable>
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
         <RankingTable data={athletesData} tableType={{type:'speed'}}></RankingTable>
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
           <RankingTable data={athletesData} tableType={{type:'elevation'}}></RankingTable>
        </div>
      </div>
    </div>
  );
};

export default ClubRanking;
