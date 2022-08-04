import styled from 'styled-components'; 

const primaryColor = '#5A90F2'
const secondaryColor = '#1E1E1E'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 500px;
    gap: 20px;

    .card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px dotted ${secondaryColor};
    border-radius: 5px 5px 20px 5px;
    width: 250px;
    height: 350px;

    img{
        width: 200px;
        
    }
    .info{
        margin: 10px;
        p{
            display: flex;
            justify-content: flex-start;
        }
    }

    button{
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
