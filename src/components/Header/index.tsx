import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/styles/color';

const StyleLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
`;

const Header: React.FC = () => {
  return (
    <nav>
      <StyleLink to="/">Acceuil</StyleLink>
      <StyleLink to="/survey/1">Questionnaire</StyleLink>
      <StyleLink to="/freelances">Freelances</StyleLink>
    </nav>
  );
};

export default Header;
