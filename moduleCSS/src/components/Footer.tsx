import { useState } from 'react';
import styled from 'styled-components';

interface FooterH1Props {
  color: boolean;
}
interface FooterProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Footerh2 = styled.h2<FooterH1Props>`
  border: 1px solid black;
  color: ${(props) => (props.color ? 'red' : 'blue')};
  text-align: center;
  margin-top: 2em;
  padding: 1em;
  cursor: pointer;
`;

function Footer({ children }: FooterProps) {
  const [color, setColor] = useState(false);
  return (
    <Container>
      <Footerh2 color={color} onClick={() => setColor(!color)}>
        {children} with a color of {color ? 'red' : 'blue'}
      </Footerh2>
    </Container>
  );
}

export default Footer;
