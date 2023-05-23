import { useEffect, useState } from "react";
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

  const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
    if (accessToken) {
      navigate("/home");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="login-background registration-page">
      <div className="LoginPage">
        <div className="AppInfo">
          <h1>Scriptorium</h1>
        </div>
        <div className="LoginForm">
          <div className="inputFields">
            <h2>Registration</h2>
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

              <div className="button-container">
                <Button
                  className="main-button"
                  variant="primary"
                  onClick={userLogin}
                >
                  Register
                </Button>

                <Button
                  className="google-button"
                  variant="outline-primary"
                  type="submit"
                  href={`${process.env.REACT_APP_BE_URL}/users/googleLogin`}
                >
                  Register with Google
                </Button>
                <Button className="main-button" variant="primary" href="/">
                  Login here!
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

export default Registration;
