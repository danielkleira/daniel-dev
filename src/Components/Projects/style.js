import styled from "styled-components";

export const Container = styled.div`
  color: var(--green-fluo);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;

  h1 {
    font-size: 48px;
    font-weight: 800;
  }

  span {
    margin-top: -10px;
    margin-bottom: 15px;
    font-size: 14px;
  }

  .cardsContainer {
    display: flex;
    color: var(--text-color);
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 80%;
    height: 100%;
    box-sizing: border-box;
    gap: 40px;
    padding: 0px;
  }

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
