import React, { Component } from "react";
import { Navbar,Nav,NavDropdown,Container,Form,Button,NavLink } from "react-bootstrap";
import { Redirect, Switch,Route,Link } from "react-router-dom";
import { withRouter } from "react-router";
import IndexDashboard from "./Indexdashboard";
import Clothes from './Clothes'
import Accessories from './Accessories'
import Grocery from './Grocery'
import Home from './Home'
import NotFound from "./404";
import "./App.css";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false,
      file:[],
      value:'',
      checked: false,
      selectedList: [],
      selecteddata:'',
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("this.state.SelectedList")
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    const user = localStorage.getItem("token")
    return (
      <div>
        <Navbar fixed="top"variant="dark" bg="dark" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">SHOPPING APP</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    <Navbar.Collapse className="justify-content-end" id="navbar-dark-example">
    <Nav>
    <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Categories"
          menuVariant="dark"
        >
          {/* <LinkContainer to="/Clothes">
              <Nav.Link>Clothes</Nav.Link>
            </LinkContainer> */}
           {/* <Nav.Link as={Link} to="/Clothes" >Clothes</Nav.Link>  */}

           <li>
           <Link to={`${match.path}/Clothes`}>Clothes</Link></li><br/>
           <li>
          <Link to={`${match.path}/Accessories`}>Accessories</Link></li><br/>
          <li>
          <Link to={`${match.path}/Grocery`}>Grocery</Link></li><br/>
          <li>
          <Link to={`${match.path}/Home`}>Home & Kitchen Stuffs</Link></li>
        </NavDropdown>
      </Nav>&nbsp;&nbsp;
    <Navbar.Text className="push-right">
        Account: <a href="/">{user}</a>
      </Navbar.Text>&nbsp;&nbsp;
      <Form className="d-flex">
      <Button variant="outline-danger" onClick={this.signOut} href="#">
              Log Out
            </Button>
      </Form>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
      
          <div className="main">
          <Switch>
             <Route exact path={`${match.path}/Clothes`}>
              <Clothes/>
            </Route>
            <Route exact path={`${match.path}/Accessories`}>
              <Accessories/>
            </Route>
            <Route exact path={`${match.path}/Grocery`}>
              <Grocery/>
            </Route>
            <Route exact path={`${match.path}/Home`}>
              <Home/>
            </Route> 
              <Route exact path={`${match.path}`}>
                <IndexDashboard />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);