import styled from 'styled-components';

const primaryColor = '#5A90F2'
const secondaryColor = '#1E1E1E'
const grey1 = '#DDDDDD'

export const Container = styled.div`
    

  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-color: ${primaryColor};
    height: 70px;
    
    h2{
      color: ${secondaryColor};
      font-size: 20px;
      font-weight: bold;
    }

    .buttons__container{
      display: flex;
      gap: 20px;
    }

    .cart{
      display: flex;
      align-items: center;
      gap:10px;
      border: none;
      background-color: transparent;
      color: ${secondaryColor};
      font-size: 20px;
      font-weight: bold;
      cursor:pointer;
    }
    
    .signin{
      display: flex;
      align-items: center;
      gap:10px;
      border: none;
      background-color: transparent;
      color: ${secondaryColor};
      font-size: 20px;
      font-weight: bold;
      cursor:pointer;
    }

    .icon{
      color: ${grey1};
    }
  }


`;
