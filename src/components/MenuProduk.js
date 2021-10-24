import React from "react";
import {Col, Card} from "react-bootstrap";
import {NumberWithCommas} from "../source/Number"

const MenuProduk = ({ menu }) => {
  return (
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow">
        <Card.Img 
        variant="top" 
        src={
            "assets/" + 
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
            } />
        <Card.Body>
          <Card.Title>{menu.nama} <strong>{menu.kode}</strong></Card.Title>
          <Card.Text>
            Rp. {NumberWithCommas(menu.harga)}
          </Card.Text>
          
        </Card.Body>
      </Card>
    </Col>
  );
};

export default MenuProduk;
