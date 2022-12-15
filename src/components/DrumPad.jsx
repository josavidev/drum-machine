import PropTypes from "prop-types";
import playAudio from "../helpers/playAudio";
import "./DrumPad.css";

export default function DrumPad({ drum, setActualDrum }) {
  const handleButtonClick = () => {
    playAudio(drum.id);
    setActualDrum(drum.id);
  };

  return (
    <button
      id={drum.name}
      className="drum-pad"
      onClick={handleButtonClick}
    >
      {drum.id}
      <audio
        id={drum.id}
        className="clip"
        src={drum.clip} />
    </button>
  );
};

DrumPad.propTypes = {
  drum: PropTypes.object.isRequired,
  setActualDrum: PropTypes.func.isRequired
};