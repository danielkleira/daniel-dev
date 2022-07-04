import styled from "styled-components";

export const Container = styled.div`
  background: var(--bg-color);
  width: 100vw;
  height: 85vh;
  text-align: center;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1%;
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
  }

  .item {
    margin: 1vh;
    display: flex;
    justify-content: center;
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
