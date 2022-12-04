import { Container, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import{useState} from 'react';


function Contact() {
    const [judul, setJudul] = useState("Contact");

    function handleName(e) {
        setJudul(e.target.value);
    }

  return (
    <Container>
        <Col>
        <br/>
        <h1 className="text-black text-center" id="contact">
            {judul}
        </h1>
        <br/>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={handleName} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Col>
    </Container>
  );
}

export default Contact;