const getSeason = (latitude, month) => {
  //function to get the season
  if (month > 2 && month < 9) {
    //handling summer months
    return latitude > 0 ? "summer" : "winter"; //northern hemisphere is summer, southern is winter
  } else {
    return latitude > 0 ? "winter" : "summer"; //northern hemisphere is winter, southern is summer
  }
};

const seasonConfig = {
  //object to hold the text and icon name for each season
  summer: {
    text: "Let's hit the beach!",
    iconName: "sun",
  },
  winter: {
    text: "Burr, it is chilly!",
    iconName: "snowflake",
  },
};

const CheckSeason = (props) => {
  //function to check the season
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; //
  return (
    <div>
      <i className={`huge ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`huge ${iconName} icon`} />
    </div>
  );
};
const SeasonDisplay = (props) => {
  //function to display the season
  return (
    <div>
      Longitude: {props.longitude}
      <br />
      Latitude: {props.latitude}
      <CheckSeason longitude={props.latitude} />
    </div>
  );
};

export default SeasonDisplay;
