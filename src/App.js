import React, { Component } from 'react'
import { Row, Col, Container } from "react-bootstrap";
import "./App.css";
import {CatagoriesList, Hasil, NavBarComponents, MenuProduk} from "./components";
import { API_URL } from './source/constants';
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus :[],
    }
  }
  
  componentDidMount() {
    axios
    .get(API_URL+"/products")
    .then(res => {
      console.log("Response : ", res);
      const menus = res.data;
      this.setState({ menus : menus });
    })
    .catch(error=> {
      // handle error
      console.log("error ya",error);
    })
  }

  render() {
    
    const {menus} = this.state
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
              <hr/>
              <Row>
                {menus && menus.map( (menu) => {
                    return (
                    <MenuProduk
                      key={menu.id}
                      menu={menu}
                    />
                    )
                })}
              </Row>

            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
    )
  }
}


