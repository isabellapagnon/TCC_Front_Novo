/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
import React from 'react';
import styled from 'styled-components';

const TeamName = styled.div`
position: fixed;
width: 920px;
height: 800px;
flex-shrink: 0;
color: #FFF;
font-family: Montserrat, sans-serif;
font-size: 50px;
font-style: normal;
font-weight: 400;
line-height: normal;
`;

const Retrospective = () => {
  return (
    <div className='retrospective'>
      <h1>Retrospective</h1>
      {/* <TeamName>Swat Team - Retrospective</TeamName> */}
    </div>
  );
};

export default Retrospective;