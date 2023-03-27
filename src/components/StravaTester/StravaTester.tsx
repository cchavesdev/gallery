import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

interface Activity {
  id: number;
  name: string;
  distance: number;
}

const StravaActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [totalDistance, setTotalDistance] = useState<number>(0);

  useEffect(() => {
    const ACCESS_TOKEN = "36e8d10fb47ce9160ccf315842242d1d3e1dd4a7";
    const Url = `https://www.strava.com/api/v3/athlete/activities?after=${moment().startOf('week').subtract(1, 'week').unix()}`;
    const fetchData = async () => {
      try {

        axios.get(Url, {
          headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
          }
        }).then((response)=>{
          console.log(response);
          setActivities(response.data);
        });
        
       
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const total = activities.reduce((sum, activity) => {
      return sum + activity.distance;
    }, 0);
    setTotalDistance(total);
  }, [activities]);

  return (
    <div>
      <h2>Total Distance: {(totalDistance/1000).toFixed(2)} km</h2>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>
            {activity.name} - {(activity.distance/1000).toFixed(2)} km
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StravaActivity;
