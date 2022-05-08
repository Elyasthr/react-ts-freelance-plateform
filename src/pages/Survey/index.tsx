import React from 'react';
import { Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { useFetch } from '../../utils/hooks';
import colors from '../../utils/styles/color';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`;

const Survey: React.FC = () => {
  const { questionNumber } = useParams();
  const questNumToInt: number = questionNumber
    ? parseInt(questionNumber, 10)
    : 1;
  const prevQuest: number = questNumToInt === 1 ? 1 : questNumToInt - 1;
  const nextQuest: number = questNumToInt + 1;

  type resType = {
    surveyData: string[];
  };

  const { data, isLoading, error } = useFetch<resType>(
    'http://localhost:8000/survey'
  );

  if (error) return <span>Il y a une erreur</span>;

  return (
    <div>
      <h1>Questionnaire</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <h2>
          {
            // eslint-disable-next-line no-nested-ternary
            data
              ? data.surveyData
                ? data.surveyData[questNumToInt]
                : 'Pas de question'
              : 'f'
          }
        </h2>
      )}
      <Link to={`/survey/${prevQuest}`}>Précédent</Link>
      {nextQuest > 6 ? (
        <Link to="/results">Resultats</Link>
      ) : (
        <Link to={`/survey/${nextQuest}`}>Suivant</Link>
      )}
    </div>
  );
};

export default Survey;
