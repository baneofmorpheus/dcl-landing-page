import { Fragment } from "react";

import "./style.scss";

function Footer() {
  return (
    <Fragment>
      <div className="bg-dark pt-2 pb-2">
        <p className="text-white text-center">
          {" "}
          Copyright 2022 Digital Carsolutions Limited
        </p>
      </div>
    </Fragment>
  );
}

export default Footer;
