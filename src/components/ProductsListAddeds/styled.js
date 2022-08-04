import styled from 'styled-components';

  const secondaryColor = '#1E1E1E'
  const primaryColor = '#5A90F2'
  const remove = '#E83F5B'

/*   --success: #3FE864;
  --error: #E83F5B; */

export const Container = styled.div`
  .wrapper{
    display: flex;
    gap: 400px;
    margin: 20px;
    /* border: 1px solid; */
    
  }

  .productsListAddeds__container{
    /* border: 1px solid; */
    width: 700px;
    height: 500px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
      width: 20px;
    }

    ::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px grey; 
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb {
      background: ${secondaryColor}; 
      border-radius: 10px;
    }
  
    ::-webkit-scrollbar-thumb:hover { 
      background: ${primaryColor}; 
    }
  }
  
  .productsListAddeds__header{
    display: flex;
    justify-content: space-between;
    background-color: ${primaryColor};
    border-radius: 5px 5px 20px 5px;
    padding: 8px;
    
    p{
      color: ${secondaryColor};
      font-weight: bold;
    }
  }
  
  .productsListAddeds{
    padding: 0px 20px;
    .card{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      
      img{
        width: 180px;
        height: 200px;
      }
  
      p{
        color: ${secondaryColor};
        font-weight: bold;
        font-size: 16px;
      }

      button{
        border: none;
        background-color: transparent;
        color: ${secondaryColor};
        font-weight: bold;
        cursor: pointer;
        font-size: 16px;
      }

      button:hover{
        color: ${remove};
        transition: all ease-in-out .2s;
      }
      

    }
  }
    
`;
