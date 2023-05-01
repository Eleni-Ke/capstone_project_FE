import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import { setCurrentUser } from "../../redux/actions";
import { useAppDispatch } from "../../redux/hooks";

const Registration = () => {
  let [userEmail, setUserEmail] = useState("");
  let [userPW, setUserPW] = useState("");
  let [username, setUsername] = useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userLogin = async () => {
    const userRegInfo = {
      email: userEmail,
      password: userPW,
      username: username,
    };
    try {
      let res = await fetch(`${process.env.REACT_APP_BE_URL}/users/account`, {
        method: "POST",
        body: JSON.stringify(userRegInfo),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.ok) {
        const newUser = await res.json();
        localStorage.setItem("accessToken", newUser.accessToken);
        dispatch(setCurrentUser(newUser.user));
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
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Set your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required={true}
            />
          </Form.Group>
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
            Register now
          </Button>

          <Button variant="outline-primary" type="submit">
            Register with Google
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

export default Registration;
