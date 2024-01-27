import styled from "styled-components";
import icon from "./assets/logo.svg";
function Login() {
  return (
    <Maincontainer>
      <Icon src={icon} />
    </Maincontainer>
  );
}

export default Login;

const Maincontainer = styled.div``;

const Icon = styled.img`
  width: 32px;
  height: 25.6px;
`;
