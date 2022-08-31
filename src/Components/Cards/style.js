import styled from "styled-components";

export const Projeto = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  align-items: center;
  text-align: center;
  border: 1px solid var(--green-dark);
  border-radius: 10px;
  justify-content: space-between;
  background-color: black;
  gap:20px;

  .imgProjeto {
    width: 95%;
    max-width: 700px;
    border-radius: 10px;
  }
  
  .titulo {
    font-size: 26px;
    font-weight: 400;
    color: var(--green-fluo);
  }
  .descricao {
    font-size: 16px;
    padding: 0% 5% 0% 5%;
    color: var(--green-soft);
  }
  .tecno {
    font-weight: 700;
    color: var(--green-soft);
  }
  a {
    text-decoration: none;
  }
  .botao {
    border-radius: 8px;
    background-color: var(--green-button);
    width: 95%;
    margin-bottom: 8px;
    color: var(--green-soft);
    font-weight: 700;
    display: flex;
    gap: 1em;
    :hover {
      background-color: var(--green-dark);
      img {
        color: white;
      }
    }
    img {
      margin-left: 2%;
      width: 8%;
    }
  }

@media (max-width:800px){
  width: 90%;
}
`;
