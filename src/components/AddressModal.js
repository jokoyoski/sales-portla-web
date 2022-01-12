import React, { useState } from 'react';
import { store } from '../redux-store/store';

const AddressModal = ({ address }) => {
  var deliveryAddress = (e) => {
    store.dispatch({ type: "PAY_DELIVERY_ADDRESS", payload: e.target.value })
  }
  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal3"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg p-4">
          <div class="modal-content">
            <div class="modal-header">
              <h6 class="modal-title color-grey" id="exampleModalLabel">
                Address Book
              </h6>
              <i
                class="far fa-times-circle text-danger"
                data-mdb-dismiss="modal"
                aria-label="Close"
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div class="modal-body">
              <div
                className="p-0 m-0 d-flex container-fluid"
                style={{ position: "relative" }}
              >
                <h6 className="text-dark">
                  {" "}
                  <strong>Address List</strong>
                </h6>
                <h6
                  className="text-primary"
                  style={{ position: "absolute", right: "2rem" }}
                >
                  {" "}


                </h6>
              </div>
              <div>
                <p className="color-grey">Addresses</p>


                <div class="form-check">

                  {
                    address.length > 0 ?
                      address.map(add => {
                        return <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <div>
                            <input
                              class="form-check-input"
                              type="radio"
                              value={add}
                              onChange={deliveryAddress}
                              name="flexRadioDefault6"
                              id="flexRadioDefault1"
                            />
                            <label class="form-check-label" for="flexRadioDefault1"> <strong>{add.firstName} {add.lastName}</strong><br />
                              <p>{add.address}</p>
                            </label>
                          </div>
                        </div>
                      }) : "You do not have any address"
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddressModal
