import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import { CardProfileProps } from '../../interfaces';
import { useFetch } from '../../utils/hooks';
import { Loader } from '../Survey';

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`;

type C = {
  freelancersList: CardProfileProps[];
};

const Freelances: React.FC = () => {
  const { data, isLoading, error } = useFetch<C>(
    'http://localhost:8000/freelances'
  );

  if (error) return <span>Il y a une erreur</span>;

  return (
    <div>
      <h1>Freelances</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <CardsContainer>
          {data?.freelancersList.map((profile) => {
            return (
              <Card
                key={profile.id}
                name={profile.name}
                job={profile.job}
                picture={profile.picture}
              />
            );
          })}
        </CardsContainer>
      )}
    </div>
  );
};

export default Freelances;
