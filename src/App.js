//import logo from './logo.svg';
import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import {CatagoriesList, Hasil, NavBarComponents} from "./components";

function App() {
  return (
    <div className="App">
      <NavBarComponents />
      <div className="mt-3">
        <Container>
          <Row>
            <CatagoriesList />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
