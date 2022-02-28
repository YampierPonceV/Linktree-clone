import styled from "styled-components";

const Wrapper = styled.div`
max-width: 900px;
width: 100%;
margin-left: auto;
margin-right: auto;
padding: 25px 0;
box-shadow: 0px 13px 25px rgba(47, 115, 196, 0.5);
border-radius: 7px;

@media screen and (max-width: 950px){
    box-shadow: none;
    padding: 0 25px;
}
`

export default Wrapper