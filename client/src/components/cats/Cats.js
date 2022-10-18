import CatList from './CatList';
import { useEffect, useState } from 'react';
import { CatConsumer } from '../../providers/CatProvider';
import CatForm from './CatForm';
import { Button, Modal, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cats = ({ cats, getAllCats, pagination }) => {
  const [adding, setAdd] = useState(false);
  const [pages, setPages] = useState([])
  const [active, setActive] = useState(1);

  useEffect( () => {
    getAllCats()
    renderPages()
  }, [])

  const renderPages = () => {
    let items = [];
    for (let num = 1; num <= pagination; num++) {
      items.push(
        <Pagination.Item 
          key={num} 
          active={parseInt(num) === parseInt(active)}
          onClick={() => {
            getAllCats(num)
            setActive(num)
          }}
        >
          {num}
        </Pagination.Item>
      )
    }
    setPages(items)
  }

  return (
    <>
      <Button 
        onClick={() => setAdd(true)}
      >
        +
      </Button>
      <Link to='/randomcat'>
        <Button>
          Random Cat
        </Button>
      </Link>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Cat</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CatForm 
            setAdd={setAdd}
          />
        </Modal.Body>
      </Modal>

      <h1>My Cats</h1>
      <CatList
        cats={cats}
      />
      <Pagination>{pages}</Pagination>
    </>
  )
}

const ConnectedCats = (props) => (
  <CatConsumer>
    { value => <Cats {...props} {...value} /> }
  </CatConsumer>
)

export default ConnectedCats;