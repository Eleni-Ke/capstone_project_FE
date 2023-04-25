import { Button, Form } from "react-bootstrap";

const Login = () => {
  return (
    <div className="LoginPage">
      <div className="LoginForm">
        <h2>Login</h2>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit" href="/home">
            Login
          </Button>

          <Button variant="outline-primary" type="submit">
            Login with Google
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
