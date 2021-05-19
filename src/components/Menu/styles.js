import styled from 'styled-components';

export const CorpoMenu = styled.div`
  position: absolute;
  width: 11.25rem;
  height: 8.69rem;
  left: 2rem;
  top: 7.61rem;
  color: #ffffff;
`;

export const MenuItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;

  div {
    width: 2.85rem;
    height: 2.85rem;
    background-color: #5081FB;
    border-radius: 1rem;
    text-align: center;

    img {
      margin-top: 0.45rem;
      width: 2rem;
    }

  }

  span {
    margin-top: 0.85rem;
    margin-left: 0.5rem;
  }

`;
