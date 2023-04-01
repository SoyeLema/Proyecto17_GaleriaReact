import Alert from 'react-bootstrap/Alert';
import Badge from 'react-bootstrap/Badge';
import './Footer.css';

const Footer = (props) => {
    return (
        <div className='footer'>
            <>
                {[

                    'info',

                ].map((info) => (
                    <Alert key={info} variant={info}>
                        {props.detalle}
                    </Alert>
                ))}
            </>

            <p className='parrafo'>{props.text} <Badge pill bg="primary">
                &copy; 2023
            </Badge>{' '}</p>

        </div>
    );
}


export default Footer;