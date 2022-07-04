import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-color);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 5%;
  
  
  .cardsContainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    box-sizing: border-box;
    gap:40px;
    padding: 3px;
    
  }
`;
