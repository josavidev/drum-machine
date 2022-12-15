import PropTypes from "prop-types";
import "./Display.css";

export default function Display({ content = "" }) {
  return (
    <div>
      <p id="display">{content}</p>
    </div>
  );
};

Display.propTypes = {
  content: PropTypes.string
};