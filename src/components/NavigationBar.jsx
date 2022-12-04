import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
    return (
       
            <Navbar variant="dark">
                <Container>
                    <Navbar.Brand href='/'>GameHolic</Navbar.Brand>
                        <Nav>
                            <Nav.Link href="#trending">Trending Game</Nav.Link>
                            <Nav.Link href="#best">Best Game</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        
    )
}
export default NavigationBar;