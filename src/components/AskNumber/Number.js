export function LowerNumber() {
  return <p>It will rain today</p>;
}

export function HigherNumber() {
  return <p>It will be sunny today</p>;
}

function Number(props) {
  const isNumber = props.isNumber;

  if (isNaN(isNumber)) {
    return <p>Error: Enter a number.</p>;
  }
  if (isNumber < 50) {
    return <LowerNumber />;
  } else if (isNumber >= 50 && isNumber <= 100) {
    return <HigherNumber />;
  } else return;
}

export default Number;
