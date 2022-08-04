import styled from 'styled-components';

const primaryColor = '#5A90F2'
const secondaryColor = '#1E1E1E'

export const Container = styled.div`
  .cart{
    box-shadow: 1px 2px 2px #000000;
    width: 230px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h2{
      font-size: 20px;
      color: ${secondaryColor};
      text-align: center;
    }
    
    div{
      display: flex;
      justify-content: space-around;
      
      p{
          color: ${secondaryColor};
          font-weight: bold;
          
        }
      }
      
      button{
      margin: 0px 20px;
      background-color: ${primaryColor};
      color: white;
      padding: 8px;
      width: 200px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      border-radius: 5px 5px 20px 5px;
    }
  }
`;
