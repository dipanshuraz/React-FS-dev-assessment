import React, { useState } from 'react';
import styled from 'styled-components';
import Image from '../image';
import Lockup from '../lockup';

const LaunchCard = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  width: 100%;
`;

// flex: 0 0 auto;
// position: relative;

const ImagContainer = styled.div`
  padding: 40px 20px;
  background-color: #2897b1;

  img {
    height: 100px;
    width: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  padding: 20px;
  border: 1px solid #f3f3f3;
  flex: 1;
`;

function Launchcard(props) {
  const [active, setActive] = useState(false);

  const changeLike = () => {
    setActive(!active);
  };

  return (
    <LaunchCard reverse={props.reverse}>
      <ImagContainer>
        <Image url={props.image} />
      </ImagContainer>

      <Content>
        <Lockup text={props.description} tag='h3' title={props.title} />
      </Content>
    </LaunchCard>
  );
}

export default Launchcard;
