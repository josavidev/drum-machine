import DrumPad from "./DrumPad";
import PropTypes from "prop-types";
import "./Pad.css";

export default function Pad({ drums, setActualDrum }) {
  return (
    <div className="pad">
      {drums.map(drum => (
        <DrumPad key={drum.id} drum={drum} setActualDrum={setActualDrum} />
      ))}
    </div>
  );
};

Pad.propTypes = {
  drums: PropTypes.array.isRequired,
  setActualDrum: PropTypes.func.isRequired
};