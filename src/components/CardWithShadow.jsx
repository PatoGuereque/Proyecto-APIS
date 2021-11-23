import { Card } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const CardWithShadow = ({ init = 1, hovered = 3, ...props }) => {
  const [shadow, setShadow] = useState(init);

  const onMouseOver = () => setShadow(hovered);
  const onMouseOut = () => setShadow(init);

  return (
    <Card
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      elevation={shadow}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
};

CardWithShadow.propTypes = {
  init: PropTypes.number.isRequired,
  hovered: PropTypes.number.isRequired,
};

export default CardWithShadow;
