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
          backgroundColor: '#C4C4C4',
          borderColor: '#C4C4C4',
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
