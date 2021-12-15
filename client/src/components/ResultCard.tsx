import logo from '../assets/digcogsLogo.png';
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
} from 'react-bootstrap';
import '../styles/ResultCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
// import MainNav from './MainNav';

interface Props {
  id:string,
  title: string,
  cover_image: string
}

const ResultCard: React.FC<Props> = (props: Props) => {

  const history = useHistory();

  function handleClick(id:string) {
    return (event: React.MouseEvent) => {
      history.push(`/result/${id}`)
      event.preventDefault();
    }
  }

  return (
    <Container
      className="result-card"
      onClick={handleClick(props.id)}
    >
      <div className="result-image">
        <Image className="result-logo" src={props.cover_image} />
      </div>
      <div className="result-info">
        <h1 className="result-title">{props.title}</h1>
      </div>
    </Container>
  );
};

export default ResultCard;