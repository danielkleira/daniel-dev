import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  gap: 15px;
  border: 1px solid var(--header-back);
  font-family: var(--body-font);
  form {
    display: flex;
    color: var(--text-color);
    width: 100%;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    box-sizing: border-box;
    margin-top: 5%;
    margin-bottom: 5%;
    div {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-items: center;
      text-align: left;
      label {
        width: 80%;
        text-align: left;
      }

      input {
        border-radius: 8px;
        width: 80%;
        height: 150%;
        box-sizing: border-box;
        :hover {
          transition: 0.3s;
          width: 80%;
        }
      }
      textarea {
        border-radius: 8px;
        width: 80%;
        height: 150%;
        box-sizing: border-box;
        :hover {
          transition: 0.3s;
          width: 80%;
        }
      }
    }

    button {
      box-sizing: border-box;
      border-radius: 8px;
      background-color: var(--header);
      color: var(--text-color);
      width: 40%;
      :hover {
        transition: 0.3s;
        background-color: var(--bt-bg-hover);
      }
    }
  }
`;
