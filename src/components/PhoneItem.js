import React, { useState } from "react";
import { Card, Button, Collapse, Image } from "react-bootstrap";

import PhoneDetails from "./PhoneDetails";

export default function PhoneItem({ phone }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="row align-items-center">
          <div className="col-sm-2">
            <Image
              width={171}
              height={180}
              src={require(`../images/${phone.imageFileName}`)}
              className="mx-auto d-block img-fluid"
            />
          </div>
          <div className="col-sm-4 text-center">
            <Card.Title className="text-uppercase font-weight-bold">
              {phone.manufacturer}
            </Card.Title>
            <Card.Title>{phone.name}</Card.Title>
          </div>
          <div className="col-sm-6  text-center">
            <Card.Text>
              <Button
                variant="primary"
                onClick={() => setShowInfo((prevShowInfo) => !prevShowInfo)}
              >
                {showInfo ? "Hide Details" : "Show Details"}
              </Button>
            </Card.Text>
          </div>
        </div>

        <Collapse in={showInfo}>
          <div>
            <PhoneDetails phone={phone} />
          </div>
        </Collapse>
      </Card.Body>
    </Card>
  );
}
