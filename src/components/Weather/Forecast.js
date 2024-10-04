export function LowerNumber() {
  return <p>It will be a sunny day</p>;
}

export function HigherNumber() {
  return <p>It will rain today</p>;
}

function PoP(props) {
  const isNumber = props.isNumber;

  if (isNaN(isNumber)) {
    return; //<p>Error: Enter a number.</p>;
  }
  if (isNumber < 50) {
    return <LowerNumber />;
  } else if (isNumber >= 50 && isNumber <= 100) {
    return <HigherNumber />;
  } else
    return (
      <p>
        😲 Number you entered is too high!<br></br>It probably means it will
        rain 💩
      </p>
    );
}

export default PoP;
