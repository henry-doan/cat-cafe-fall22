import { Container, Row, Col, Image } from 'react-bootstrap';

const Info = () => (
  <Container>
    <Row>
      <Col md='6' sm='12'>
        <Image
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
          alt='info'
          width='450px'
        />
      </Col>
      <Col md='6' sm='12'>
        <h1>
          Check out pawsome cats while 
          enjoying some Kit-teas
        </h1>
        <p>
          Meow Meow Meow Meow Meow Meow!
        </p>
      </Col>
    </Row>
  </Container>
)

export default Info;