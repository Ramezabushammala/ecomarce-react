import React, { useState } from "react";
import { Col, Row, Card, Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getdeleteProdact } from "../../redux/actions/ProdactAction";
// import prod1 from "../../images/prod1.png";
const AdminAllProducsCard = ({pro}) => {
  const [show, setShow] = useState(false);
   const dispatch =useDispatch();


   const handeldelet =async()=>{
    
     if(pro._id){
    await dispatch(getdeleteProdact(pro._id));
    setShow(false);
    window.location.reload();
     }
    
   }
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Col xs="12" sm="6" md="5" lg="4" className="d-flex">

     <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title className="font">تاكيد الحذف </Modal.Title>
        </Modal.Header>
        <Modal.Body className="font">هل انت متاكد من حذف المنتج</Modal.Body>
        <Modal.Footer>
          <Button variant="success" className="font" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" className="font" onClick={handeldelet}>
           حذف المنتج
          </Button>
        </Modal.Footer>
      </Modal>

      <Card
        className="my-2"
        style={{
          width: "100%",
          height: "350px",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
        }}>
        <Row className="d-flex justify-content-center px-2">
          <Col className=" d-flex justify-content-between">
            <div onClick={handleShow} className="d-inline item-delete-edit">ازاله</div>
            <Link to={`/admin/EditProdact/${pro._id}`}
               style={{
               textDecoration: "none",
            }}>
               <div className="d-inline item-delete-edit">تعديل</div>
     </Link>
            
          </Col>
        </Row>
        <Link to={`/products/${pro._id}`} style={{ textDecoration: "none" }}>
          <Card.Img style={{ height: "228px", width: "100%" }} src={pro.imageCover} />
          <Card.Body>
            <Card.Title>
              <div className="card-title">
               {pro.title}
              </div>
            </Card.Title>
            <Card.Text>
              <div className="d-flex justify-content-between">
                <div className="card-rate">{pro.ratingsQuantity}</div>
                <div className="d-flex">
                  <div className="card-currency mx-1">جنيه</div>
                  <div className="card-price">{pro.price}</div>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default AdminAllProducsCard;
