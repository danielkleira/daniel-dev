import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 85vh;
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
  }
  .infos {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3%;

    @media (max-width: 880px) {
      display: flex;
      flex-direction: column;
    }
  }

  .item {
    margin: 1vh;
    display: flex;
    justify-content: left;
    text-align: left;
  }
  .dados {
    background-color: var(--header);
    width: 40%;
    font-size: 18px;
    justify-content: center;
    border-radius: 8px;

    a {
      display: flex;
      align-items: center;
      gap:1vw;

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
