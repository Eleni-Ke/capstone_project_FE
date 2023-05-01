import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { setCurrentUser } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

const Login = () => {
  let [userEmail, setUserEmail] = useState("");
  let [userPW, setUserPW] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userLogin = async () => {
    const userCredentials = {
      email: userEmail,
      password: userPW,
    };
    try {
      let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/session`, {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const currentUser = await res.json();
        localStorage.setItem("accessToken", currentUser.accessToken);
        dispatch(setCurrentUser(currentUser.user));
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <h2>Login</h2>
        <Form
          className="form-text"
          onSubmit={(e) => {
            e.preventDefault();
            userLogin();
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required={true}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={userPW}
              onChange={(e) => setUserPW(e.target.value)}
              required={true}
            />
          </Form.Group>

          <Button variant="primary" onClick={userLogin}>
            Login
          </Button>

          <Button
            variant="outline-primary"
            type="submit"
            href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}
          >
            Login with Google
          </Button>

          <Button variant="primary" href="/registration">
            Not a member yet? Register here!
          </Button>
        </Form>
      </div>

      <div className="AppInfo">
        <h1>Book Writing App</h1>
        <p>
          Welcome to the Book Writing App! Our app provides a user-friendly
          interface that makes it easy for you to write your book. With our
          intuitive design, you can focus on your writing without worrying about
          formatting, layout, or other distractions. Try it out today and see
          how easy it is to write your book!
        </p>
      </div>
    </div>
  );
};

export default Login;
