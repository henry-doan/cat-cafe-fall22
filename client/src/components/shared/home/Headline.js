import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';

const Headline = () => (
  <>
    <Image 
      alt='head'
      width='100%'
      src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
    />
    <Container>
      <Row >
        <Col md='6' sm='12' >
          <Slide 
            direction='left'
          >
            <h1>
              Enjoy a catpuccio in a Purrfect catmostphere
            </h1>
          </Slide>
        </Col>
        <Col md='6' sm='12'>
          <Slide
            direction='right'
          >
            <p>
              Have purrsuasive experience with purrty darn cute kittys 
              in the biggest meowment of the century.
            </p>
            <Row>
              <Col>
                <Link to='/register'>
                  <Button>
                    Signup
                  </Button>
                </Link>
              </Col>
              <Col>
                <Link to='/login'>
                  <Button>
                    Login
                  </Button>
                </Link>
              </Col>
            </Row>
          </Slide>
        </Col>
      </Row>
    </Container>
  </>
)

export default Headline;
