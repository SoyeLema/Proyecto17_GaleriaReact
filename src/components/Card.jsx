import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Card.css'

const Cards = ({ src, title, descr }) => {

    return (

        <Card style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={src} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {descr}
                </Card.Text>

            </Card.Body>
        </Card>

    );

}

export default Cards;