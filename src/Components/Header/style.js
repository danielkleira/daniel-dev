import styled from "styled-components";

export const Container = styled.div`
  background: var(--header);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100vw;
  height: 15%;
  max-height: 15%;
  border-bottom: 1px solid var(--header-back);
  button {
    margin-top: 4vh;
    color: var(--text-color);
    font-size: large;
    width: 10%;
    height: 50%;
    border: none;
    border-radius: 8px;
    background: var(--bt-bg-color);
    :hover {
      background-color: var(--bt-bg-hover);
      cursor: pointer;
    }
  }
`;
