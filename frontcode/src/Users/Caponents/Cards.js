import Card from 'react-bootstrap/Card';
import Acordian from './Acordian';
import Nav from 'react-bootstrap/Nav';

function Cards({ props }) {
  return (
    <Card className='w-100 w-xs-75 w-sm-50' style={{ width: '13rem' }} >
      <Nav.Link href={`/AddToCart/${JSON.stringify(props)}`} className="p-3 pb-0">
         <Card.Img variant="top" src={props.image} alt="" style={{height:'210px'}}/>
      </Nav.Link>
      <Card.Body>
          <Acordian data={props}/>
      </Card.Body>
    </Card>
  );
}

export default Cards;