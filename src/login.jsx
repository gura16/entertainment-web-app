import styled from "styled-components";
import icon from "./assets/logo.svg";
function Login() {
  return (
    <Maincontainer>
      <Icon src={icon} />
      <Logincontainer>
        <Logintitle>Login</Logintitle>
        <Inputemail placeholder="Email address" textColor="#FFFFFF" />
        <Inputpassword placeholder="Password" textColor="#FFFFFF" />
        <Button>Login to your account</Button>
        <Signupcard>
          <Acountcreate>Don’t have an account?</Acountcreate>
          <Signup>Sign Up</Signup>
        </Signupcard>
      </Logincontainer>
    </Maincontainer>
  );
}

export default Login;

const Icon = styled.img`
  width: 32px;
  height: 25.6px;
  align-self: center;
`;

const Maincontainer = styled.div`
  margin: auto;
  width: 327px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
`;

const Logincontainer = styled.div`
  background-color: #161d2f;
  width: 327px;
  height: 365px;
  margin-top: 50px;
  border-radius: 10px;
  padding: 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Logintitle = styled.p`
  width: 76px;
  height: 40px;
  color: white;
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;
`;

const Inputemail = styled.input`
  background-color: #161d2f;
  width: 279px;
  height: 37px;
  border: none;
  border-bottom: 1px solid #5a698f;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  padding-left: 20px;
  color: #ffffff;
  transition: color 0.3s ease;

  &::placeholder {
    color: #5a698f;
    margin-right: 10px;
  }

  &:focus,
  &:not(:placeholder-shown) {
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 1px 0px 0px #5a698f;
  }
`;

const Inputpassword = styled.input`
  background-color: #161d2f;
  width: 279px;
  height: 37px;
  border: none;
  border-bottom: 1px solid #5a698f;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  padding-left: 20px;
  color: #ffffff;
  transition: color 0.3s ease;

  &::placeholder {
    color: #5a698f;
    margin-right: 10px;
  }

  &:focus,
  &:not(:placeholder-shown) {
    color: #ffffff;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 1px 0px 0px #5a698f;
  }
`;

const Button = styled.div`
  background-color: #fc4747;
  width: 279px;
  height: 48px;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: white;
    color: black;
  }
`;

const Signupcard = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Acountcreate = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
`;

const Signup = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #fc4747;
  cursor: pointer;
`;
