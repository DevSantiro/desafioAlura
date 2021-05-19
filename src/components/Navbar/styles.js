import styled from 'styled-components';

export const Navegacao = styled.div`
  background-color: #051D3B;
  flex-direction: row; 
  display: flex;
  justify-content: space-between; 

  .logo {
    width: 8rem;
    height: 3rem;
    margin-left: 0.5rem
  }

  input {
    width: 45rem;
    height: 2rem; 
    margin-top: 0.4rem;
    padding-left: 0.8rem; 
    color: #FFFFFF; 
    background: rgba(255, 255, 255, 0.16); 
    border-radius: 0.4rem;
  }

  .navPerson {
    display: flex;
    flex-direction: row; 
    margin-top: 0.4rem;
    text-align: center; 
    align-items: flex-start;
    justify-content: space-between; 

    img {
      width: 2rem;
      height: 2rem; 
      border-radius: 1rem;
      margin: 0rem 1rem;
    }

    span {
      margin-top: 0.5rem;
      color: #FFFFFF;
      margin-right: 1rem;
    }
  }
`;