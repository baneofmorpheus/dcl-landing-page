import { Fragment, forwardRef } from "react";
import { Carousel } from "@trendyol-js/react-carousel";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import "./style.scss";
import bmwImage from "../../assets/images/bmw.jpg";
import hondaImage from "../../assets/images/honda.jpg";
import jeepImage from "../../assets/images/jeep.jpg";
import kiaImage from "../../assets/images/kia.jpg";
import landroverImage from "../../assets/images/landrover.jpg";
import mercedesImage from "../../assets/images/mercedes.jpg";
import toyotaImage from "../../assets/images/toyota.jpg";
import mitsubishiImage from "../../assets/images/mitsubishi.jpg";
import chevroletImage from "../../assets/images/chevrolet.jpg";
import peagoutImage from "../../assets/images/peagout.jpg";
import nissanImage from "../../assets/images/nissan.jpg";
import volkswagenImage from "../../assets/images/volkswagen.jpg";

const CustomArrow = forwardRef(({ type }, ref) => {
  switch (type) {
    case "right":
      return (
        <div className="d-flex h-100 ps-2 pe-2">
          <span className="align-self-center dcl-carouseel-btn">
            <FontAwesomeIcon icon={solid("arrow-right")} />
          </span>
        </div>
      );

    default:
      return (
        <div className="d-flex h-100">
          <span
            ref={ref}
            className="dcl-carouseel-btn align-self-center ps-2 pe-2"
          >
            <FontAwesomeIcon icon={solid("arrow-left")} />
          </span>
        </div>
      );
  }
});

function Brands() {
  return (
    <Fragment>
      <Row className="mb-5">
        <Col xs="12">
          <h3 className="text-center">Some of the Brands We've worked on.</h3>{" "}
          <Carousel
            swiping={true}
            swipeOn={0.1}
            show={3.5}
            slide={2}
            transition={0.5}
            useArrowKeys={true}
            leftArrow={<CustomArrow type="left" />}
            rightArrow={<CustomArrow type="right" />}
          >
            <img src={bmwImage} className="img-fluid" alt="" />
            <img src={hondaImage} className="img-fluid" alt="" />
            <img src={jeepImage} className="img-fluid" alt="" />
            <img src={kiaImage} className="img-fluid" alt="" />
            <img src={landroverImage} className="img-fluid" alt="" />
            <img src={mercedesImage} className="img-fluid" alt="" />
            <img src={toyotaImage} className="img-fluid" alt="" />
            <img src={mitsubishiImage} className="img-fluid" alt="" />
            <img src={peagoutImage} className="img-fluid" alt="" />
            <img src={chevroletImage} className="img-fluid" alt="" />
            <img src={nissanImage} className="img-fluid" alt="" />
            <img src={volkswagenImage} className="img-fluid" alt="" />
          </Carousel>
        </Col>
      </Row>
    </Fragment>
  );
}

export default Brands;
