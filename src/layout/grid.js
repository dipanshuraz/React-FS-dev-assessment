import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../helpers';

const Grid = styled.div`
  --gap: ${(props) => props.gap || '0px'};
  --bottom-gap: calc(var(--gap) * 1.5);

  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 calc(-1 * var(--gap));
`;

Grid.Col = styled.div`
  display: flex;
  align-items: stretch;

  flex: 0 0 auto;
  width: calc(100% - var(--gap));
  margin: 0 0 var(--bottom-gap) var(--gap);

  @media screen and ${device.tablet} {
    width: calc(50% - var(--gap));
  }

  @media screen and ${device.laptop} {
    width: calc(33.33% - var(--gap));
  }
`;

Grid.propTypes = {
  gap: PropTypes.string,
};

export default Grid;
