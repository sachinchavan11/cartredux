import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardsData from "./CardsData";
import { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import {ADD} from '../redux/actions/action';

function Cards() {
  const [data, setData] = useState(CardsData);
  const dispatch = useDispatch();
  

  return (
    <div className="container" style={{marginTop: "5rem", zIndex: "-1"}}>
      <h2 className="text-center">Add to Cart Projects</h2>

      <div className="row d-flex justify-content-center align-items-center">
        {data.map((element, id) => {
         
          return (
            <>
              {
                <Card
                  style={{ width: "22rem", border: "none" }}
                  className="mx-2 mt-4 card_style"
                >
                  <Card.Img
                    variant="top"
                    src={element.imgdata}
                    style={{ height: "16rem" }}
                  />
                  <Card.Body>
                    <Card.Title>{element.rname}</Card.Title>
                    <Card.Text>Price:₹{element.price}</Card.Text>
                    <div className="button_div d-flex justify-content-center">
                      <Button
                        variant="primary"
                        onClick={() => dispatch(ADD(element))}
                        className="col-lg-12"
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              }
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
