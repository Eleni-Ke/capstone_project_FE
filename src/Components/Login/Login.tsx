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
    <div className="login-background">
      <div className="LoginPage">
        <div className="AppInfo">
          <h1>Scriptorium</h1>
        </div>
        <div className="LoginForm">
          <div className="inputFields">
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
              <div className="button-container">
                <Button
                  className="main-button"
                  variant="primary"
                  onClick={userLogin}
                >
                  Login
                </Button>

                <Button
                  className="google-button"
                  variant="outline-primary"
                  type="submit"
                  href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}
                >
                  Login with Google
                </Button>

                <Button
                  className="main-button"
                  variant="primary"
                  href="/registration"
                >
                  Register here!
                </Button>
              </div>
            </Form>
          </div>
          <div className="info-text">
            <p>
              Enter Scriptorium, the Book Writing App where your literary dreams
              take flight.
              <br /> <br />
              Organize your ideas, embark on new adventures, and unleash your
              creativity upon the page. <br /> <br />
              Welcome to a world of boundless inspiration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
