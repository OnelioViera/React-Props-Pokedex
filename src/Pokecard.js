import React from "react";
import "./Pokecard.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const POKE_API = "https://raw.githubusercontent.com/" +
  "PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard({ exp, id, name, type }) {
  const imgSrc = `${POKE_API}${id}.png`;

  return (
    <Row>
      <Col>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <img className="Pokecard-image" src={imgSrc} alt={name} />
            <Card.Text>
              <div className="Pokecard-data">Type: {type}</div>
              <div className="Pokecard-data">EXP: {exp}</div>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>

  );
}

export default Pokecard;
