import React from 'react';
import styled from 'styled-components';
import { CardProfileProps } from '../../interfaces';
import colors from '../../utils/styles/color';

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;
const CardLabel = styled.span`
  color: ${colors.primary};
  font-size: 22px;
  font-weight: bold;
`;
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;
const Card: React.FC<CardProfileProps> = ({ name, job, picture }) => {
  return (
    <CardWrapper>
      <CardLabel>{name}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{job}</span>
    </CardWrapper>
  );
};

export default Card;
