import styled from "styled-components";

export const Container = styled.div`
        
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:100vw;
    height: 10vh;
    z-index: 1;
    opacity: 0.96;
    border-radius: 8px;
    
    
    a {
      align-self: center;
      height: 5.5vh;
      button {
        color: var(--text-color);
        font-size: large;
        background: black;
        opacity: 1;
        width: auto;
        padding: 1vh 1vh 1vh 1vh;
        border-radius: 8px;
        border: 1px solid var(--green-fluo);
        :hover {
          background-color: var(--bt-bg-hover);
          cursor: pointer;
        }
      }
    }

    @media (max-width: 440px) {
      
    height: 18vh;
      a {
        button{
          font-size: 12px;
        }
      }
      }
    
  
`;

    
