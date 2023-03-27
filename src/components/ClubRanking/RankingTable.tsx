interface RankingTableArgs {
    "tableType" :TableType,
    "data" : AthleteData[]    
}

interface AthleteData{
    "fullName" : string,
    "totalDistance" : number,
    "totalAscend" : number,
    "movingTime" : number
    
}

type TableType = 
    | {type : 'speed'}
    | {type : 'distance'}
    | {type: 'elevation'};

export const RankingTable = ({data, tableType } :RankingTableArgs) => {
    
    const populateRankingField = (athleteData: AthleteData, tableType:TableType)=> {
        switch(tableType.type){
            case 'elevation':
                return `${(athleteData.totalAscend).toFixed(1)} m`;
            case 'speed':
                const averageSpeed = `${((athleteData.totalDistance / 1000) / (athleteData.movingTime / 3600)).toFixed(1)}  km/h`
                return averageSpeed;
            default:
                return `${(athleteData.totalDistance / 1000).toFixed(1)} Km`;
        }
    }
  return (
    <div>
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Rider</th>
            <th scope="col">Distance</th>
          </tr>
        </thead>
        <tbody>
          {data.map((athlete, index) => (
            <tr key={index}>
              <th scope="row">{index}</th>
              <td>{athlete.fullName}</td>
              <td>{populateRankingField(athlete, tableType)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

   
};

export default RankingTable;
