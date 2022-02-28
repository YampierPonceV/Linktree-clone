import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;

export const Link = styled.a`
  box-shadow: 0px 1px 25px rgba(47, 115, 196, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: 0 18px;
  margin-top: 1rem;
  width: 90%;
  border-radius: 7px;
  color: #3a4446;
  transition: all .3s;
  div {
    display: flex;
    align-items: center;
  }
  &:hover {
    background-color: rgba(47, 124, 196, 0.719);
    color: #ffffff;
  }
`;

export const Text = styled.span`
  text-transform: uppercase;
  padding-left: 16px;
`;
