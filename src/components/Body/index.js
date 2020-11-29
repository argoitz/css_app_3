import Button from "../Button";
import Calendar from "../Calendar";
import "./Body.scss";

function Body({ text }) {
  return (
    <div className="container">
      <Calendar />
      <Button text="BUTTON" />
    </div>
  );
}

export default Body;
