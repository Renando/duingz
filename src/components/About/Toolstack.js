import React from "react";
import { Col, Row } from "react-bootstrap";
import {
     SiAdobes,
     SiAdobeaftereffects,
     SiAdobeillustrator,
     SiAdobelightroom,
     SiAdobelightroomclassic,
     SiAdobephotoshop,
     SiAdobepremierepro,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobes />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroom />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobelightroomclassic />
      </Col>
<Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
<Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
    </Row>
  );
}

export default Toolstack;
