import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import { CardProfileProps } from '../../interfaces';

const freelanceProfiles: CardProfileProps[] = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: 'test'
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: 'test'
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: 'test'
  }
];

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

const Freelances: React.FC = () => {
  return (
    <div>
      <h1>Freelances</h1>
      <CardsContainer>
        {freelanceProfiles.map((profile) => {
          return (
            <Card
              key={profile.name}
              name={profile.name}
              jobTitle={profile.jobTitle}
              picture={profile.picture}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default Freelances;
