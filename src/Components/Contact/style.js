import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  text-align: center;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1%;
  margin-top: 5%;
  margin-bottom: 5%;
  h1 {
    font-size: 48px;
    color: var(--green-fluo);
    font-family: var(--body-font);
  }
  .infos {
    width: 80vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3%;
    height: 100%;

    @media (max-width: 880px) {
      display: flex;
      flex-direction: column;
      width: 100vw;
    }
  }

  .item {
    margin: 3vh;
    display: flex;
    justify-content: left;
    text-align: left;
  }
  .dados {
    background-color: var(--header);
    width: 50%;
    font-size: 18px;
    justify-content: center;
    border-radius: 8px;
    background-color: transparent;
    border: 1px solid var(--green-soft);
    color: var(--green-soft);
    font-family: var(--body-font);

    a {
      display: flex;
      align-items: center;
      gap: 1vw;
      color: var(--text-color);
    }
    img {
      width: 10%;
      margin-left: 15px;
      margin-right: 15px;

      :hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
      }
    }
  }
  .barra {
    background: var(--header-back);
    width: 85%;
    height: 2px;
  }
`;
