import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  margin-top: 10vh;

  .content {
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    width: 100vw;
    max-width: 100vw;
    height: 40vh;
    margin-top: 10vh;
    gap: 1vw;

    @media (max-width: 880px) {
      flex-direction: column;
      margin-top: 10vh;
    }
  }

  .text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: var(--text-color);
    width: 50vw;
    height: 100%;
    text-align: left;
    margin-left: 5vw;
    @media (max-width: 880px) {
      margin-top: 20vh;
      margin-left: 0;
      text-align: center;
      width: 80vw;
    }

    h2 {
      width: 100%;
      font-size: 3vw;
      @media (max-width: 880px) {
        font-size: 4vw;
      }
    }
    h3 {
      width: 100%;
      font-size: 1.5vw;
      @media (max-width: 880px) {
        font-size: 2.5vw;
      }
      @media (max-width: 550px) {
        font-size: 4vw;
        font-weight: 600;
      }
    }
  }
  .image {
    margin-left: 15%;
    width: 20%;
    @media (max-width: 880px) {
      margin-top: 40vh;
      margin-left: 0px;
      width: 20vw;
      height: 20vw;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 550px) {
      display: none;
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  height: auto;
  @media (max-width: 880px) {
    margin-top: 35vw;
  }

  .conteudo {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: auto;
    width: 90vw;
    color: var(--text-color);
    font-weight: 700;
    gap: 1vw;
    margin-top: 15vh;

    @media (max-width: 880px) {
      flex-direction: column;
    }

    @media (max-width: 550px) {
      width: 90vw;
    }
    p {
      width: 15vw;
      font-size: 2.5vw;
      margin-left: 5%;

      @media (max-width: 880px) {
        width: 100vw;
        justify-content: center;
        text-align: center;
      }

      @media (max-width: 440px) {
        font-size: 4.5vw;
      }
    }

    .techs {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: auto;
      margin-left: 5%;
      @media (max-width: 440px) {
        font-size: 2vw;
      }
    }
    .icone {
      color: var(--green-soft);
      margin: 5%;
      font-size: 5vw;
      width: 100%;
      @media (max-width: 440px) {
        width: 100%;
        font-size:8vh;
      }
      :hover {
        color: var(--green-fluo);
        -webkit-transition: color 1s ease-out;
      }
    }
    a {
      width: auto;
      margin-left: 2%;
      text-align: -webkit-center;
      
      @media (max-width: 880px) {
        text-align: center;
        width: 30%;
      }
      :hover {
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
      }
    }
  }
`;
