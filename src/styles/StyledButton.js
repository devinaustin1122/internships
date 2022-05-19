import styled, { css } from "styled-components";

const StyledButton = styled.button`
  width: 100%;
  background-color: var(--secondary-color);
  border: none;
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  text-align: center;
  padding: 1em;
  margin: 1rem 0;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.5s;
  border-radius: 0.2rem;

  ${(props) =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  &:hover {
    box-shadow: none;
  }
`;

export default StyledButton;
