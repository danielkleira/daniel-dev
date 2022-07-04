import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(var(--bg-color));
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  width: 100vw;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    align-self: center;
    padding-top: 0px;
    width: 100vw;
    max-height: 100vh;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .text {
    display: flex;
    flex-direction: column;
    color: var(--text-color);
    width: 50%;
    height: 100%;
    text-align: left;
    margin-right: 15%;
    h2 {
      width: 100%;
    }
    h3 {
      width: 100%;
      font-size: 18px;
    }
  }
  .image {
    margin-left: 15%;
    width: 30%;
  }
  .barra {
    background: var(--header-back);
    width: 85%;
    height: 2px;
  }

  .icons {
    display: flex;
    flex-direction: row;
    margin-top: 1%;
    height: 10vh;
    width: 80vw;
    color: var(--text-color);
    font-size: 18px;
    font-weight: bolder;
    a {
      img {
        width: 50%;
        margin-left: 40%;
        :hover {
          -webkit-transform: scale(1.3);
          -ms-transform: scale(1.3);
          transform: scale(1.3);
        }
      }
    }
  }
`;
