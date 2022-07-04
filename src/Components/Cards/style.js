import styled from "styled-components";

export const Projeto = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  text-align: center;
  border: 1px solid var(--header-back);
  justify-content: space-between;
  img {
    width: 95%;
    max-width: 700px;
    border-radius: 8px;
  }
  .titulo {
  }
  .descricao {
    font-size: 16px;
    padding: 0% 5% 0% 5%;
  }
  .tecno {
    font-weight: 700;
  }
  a{
    text-decoration: none;
  }
  .botao {
    border-radius: 8px;
    background-color: var(--header-back);
    width: 95%;
    margin-bottom: 8px;
    color: var(--text-color);
    font-weight: 700;
    display: flex;
    
    :hover {
      background-color: var(--bt-bg-hover);
      img {
        color: white;
      }
    }
    img {
      margin-left: 2%;
      width: 8%;
    }
  }
`;
