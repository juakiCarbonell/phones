import React from "react";
import { Card } from "react-bootstrap";

export default function PhoneDetails({phone}) {
  return (
    <>
      <div className="mt-4"><span className="font-weight-bold">Price: </span>{phone.price}&euro;</div>
      <div className="mt-4">{phone.description}</div>
      <div className="mt-4">
        <div className="row">
          <div className="col">
            <Card.Text><span className="font-weight-bold">Ram: </span> {phone.ram}GB</Card.Text>
            <Card.Text><span className="font-weight-bold">Processor: </span> {phone.processor}</Card.Text>
          </div>
          <div className="col">
            <Card.Text><span className="font-weight-bold">Color: </span> {phone.color}</Card.Text>
            <Card.Text><span className="font-weight-bold">Screen: </span> {phone.screen}</Card.Text>
          </div>
        </div>
      </div>
    </>
  );
}
