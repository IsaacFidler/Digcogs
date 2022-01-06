import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  Image,
} from 'react-bootstrap';

import { Bullseye } from 'react-bootstrap-icons';

import '../styles/DiscogsButtons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MainNav from './MainNav';

interface Props {
  releaseID: number;
  title: string;
  logo: boolean;
}

const DiscogsButtons: React.FC<Props> = (props) => {
  function openDiscogs() {
    window.open(`https://www.discogs.com/release/${releaseID}`);
  }

  const { releaseID, title, logo } = props;

  return (
    <Container>
      <Button
        className="discog-button"
        variant="primary"
        style={{
          backgroundColor: '#36474F',
          borderColor: '#36474F',
        }}
        onClick={() => openDiscogs()}
      >
        {logo && <Bullseye />}

        {title}
      </Button>
    </Container>
  );
};

export default DiscogsButtons;
