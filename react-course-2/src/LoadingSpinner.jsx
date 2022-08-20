const LoadingSpinner = (props) => {
  return (
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

LoadingSpinner.defaultProps = { //default props for the loading spinner
    message: "Loading...",
};

export default LoadingSpinner;
