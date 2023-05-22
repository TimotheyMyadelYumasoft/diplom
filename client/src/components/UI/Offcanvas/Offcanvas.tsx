import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../../../style/Button.css'

type Props = {
    name: string;
    children : string | JSX.Element | JSX.Element[];
}

const OffCanvas = ({children, name, ...props}: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="accept-vacation-btn">
        {name}
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement='end' scroll={true} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div>
                {children}
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvas;