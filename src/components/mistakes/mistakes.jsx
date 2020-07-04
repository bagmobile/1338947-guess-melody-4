import React from "react";
import PropTypes from "prop-types";


const Mistakes = (props) => {
  const {count} = props;

  return (
    <div className="game__mistakes">
      {Array.from({length: count}).map((it, i) => <div key={`mistake-${i}`} className="wrong" />)}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired,
};


export default Mistakes;
