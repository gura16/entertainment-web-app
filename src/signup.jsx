import styled from "styled-components";
import icon from "../public/assets/logo.svg";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);

  const [password, setPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [repeatPassword, setRepeatPassword] = useState("");
  const [isValidRepeatPassword, setIsValidRepeatPassword] = useState(true);

  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setIsValidEmail(emailRegex.test(newEmail));
  };

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    setIsValidPassword(passwordRegex.test(newPassword));
  };

  const handleRepeatPasswordChange = (event) => {
    const newRepeatPassword = event.target.value;
    setRepeatPassword(newRepeatPassword);
    setIsValidRepeatPassword(passwordRegex.test(newRepeatPassword));
  };

  const handleButton = () => {
    const testEmail = emailRegex.test(email);
    const testPassword = passwordRegex.test(password);

    if (testEmail && testPassword && repeatPassword === password) {
      navigate("/home");
    }
  };

  return (
    <Maincontainer>
      <Icon src={icon} />
      <Logincontainer>
        <Signuptitle>Sign Up</Signuptitle>
        <Inputemail
          value={email}
          placeholder="Email address"
          textColor="#FFFFFF"
          onChange={handleEmailChange}
          style={{ borderColor: isValidEmail ? "" : "red" }}
        />
        <Inputpassword
          value={password}
          placeholder="Password"
          textColor="#FFFFFF"
          onChange={handlePasswordChange}
          style={{ borderColor: isValidPassword ? "" : "red" }}
        />
        <Repeatpassword
          value={repeatPassword}
          placeholder="Repeat Password"
          textColor="#FFFFFF"
          onChange={handleRepeatPasswordChange}
          style={{ borderColor: isValidRepeatPassword ? "" : "red" }}
        />
        <Button onClick={handleButton}>Login to your account</Button>
        <Signupcard>
          <Haveaccount>Alread have an account?</Haveaccount>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Login>Login</Login>
          </Link>
        </Signupcard>
      </Logincontainer>
      <Outlet />
    </Maincontainer>
  );
}

export default Signup;

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
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    align-items: center;
  }
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

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 373px;
  }
`;

const Signuptitle = styled.p`
  height: 40px;
  color: white;
  font-family: "Outfit", sans-serif;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.5px;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: -0.5px;
  }
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

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 37px;
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

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 37px;
  }
`;

const Repeatpassword = styled.input`
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

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 37px;
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

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 48px;
  }
`;

const Signupcard = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Haveaccount = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #ffffff;
  cursor: pointer;
`;

const Login = styled.p`
  font-family: "Outfit", sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0px;
  text-align: left;
  color: #fc4747;
  cursor: pointer;
`;
