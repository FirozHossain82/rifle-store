import React, { useState } from "react";
import Modal from "../Modal/Modal";

const SingleRifle = (props) => {
    const [modalData, setModalData] = useState({});
    //   console.log(modalData);
  const { gun, countIncrease } = props;
  console.log(gun);
  const { action, bullet, img, name } = gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="w-96  h-52" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            Generally, there are three types of firearms: rifles, shotguns and
            handguns. The three basic parts of a modern firearm are: action,
            which loads, fires and ejects ammunition.
          </p>
          <div className="card-actions ">
            <div className="badge  badge-primary badge-outline">{action}</div>
            <div className="badge badge-secondary badge-outline">{bullet}</div>
            <div className="mt-4">
              <button
                onClick={() => countIncrease()}
                className="btn btn-sm btn-primary mr-3 "
              >
                Add To Cart
              </button>
              {/* <button className="btn btn-sm btn-success ">Details</button> */}
              {/* <Modal /> */}
              <label
                onClick={() => setModalData(gun)}
                htmlFor="my-modal-3"
                className="btn modal-button btn-sm btn-success"
              >
                open modal
              </label>
            </div>
          </div>
        </div>
      </div>
        {modalData &&(
            <Modal data={modalData} setModalData={setModalData}></Modal>
        )}
    </div>
  );
};

export default SingleRifle;
