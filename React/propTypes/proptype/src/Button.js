import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return (
    <button
      style={{
        margin: props.margin,
        width: `${props.width}px`,
        height: `${props.width / 2}px`,
      }}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  margin: '10px', // definindo valor padrão da props caso não informado
};

Button.propTypes = {
  width: PropTypes.number.isRequired, // tem que ser número e é requirido
  margin: PropTypes.string, // não é requirido
};

export default Button;
