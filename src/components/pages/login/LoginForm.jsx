import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../theme";
import { authenticateUser } from "../../../api/user";
import Welcome from "./Welcome";

export default function LoginForm() {
  //States
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  //Comportements
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await authenticateUser(username);

    setUsername("");
    navigate(`order/${username}`);
  };
  //Affichage
  return (
    <LoginFormStyled action="submit" onSubmit={handleSubmit}>
      <Welcome />
      <TextInput
        value={username}
        onChange={handleChange}
        placeholder="Entrez votre prénom"
        required
        Icon={<BsPersonCircle />}
        className="input-login"
        version="normal"
      />
      <Button
        Label="Accéder à mon espace"
        Icon={<IoChevronForward />}
        version="primary"
      />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
  font-family: "Amatic SC", cursive;

  .input-login {
    margin: 18px 0;
  }
`;
