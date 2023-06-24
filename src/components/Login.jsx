import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Container } from "@mui/material";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    email: "",
    password: "",
  });


  const handleTextChange = (e) => {
    const newRegistration = { ...state };
    newRegistration[e.target.name] = e.target.value;
    setState(newRegistration);
  };

  const login = (e) => {
    e.preventDefault();
     document.cookie = `loggedIn=true;max-age=60*1000`;

     navigate("/");
  };

  return (
    <div className="App">
      <Container maxWidth="sm" sx={{ marginTop: 10 }}>
        <form
          className="login-form"
          onSubmit={login}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            required
            onChange={handleTextChange}
            value={state.email}
            name="email"
            label="Enter your Email here"
            type="text"
            sx={{ margin: 1 }}
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Enter your Password"
            type="password"
            sx={{ margin: 1 }}
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="inherit"
            sx={{ margin: 1 }}
          >
            Login
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default Login;
