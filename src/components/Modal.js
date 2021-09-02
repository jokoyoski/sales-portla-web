import React from 'react'

const Modal = () => {
    return (
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {" "}
                  <strong>Create New Password</strong>
                </h5>
                <i
                  class="far fa-times-circle text-danger"
                  data-mdb-dismiss="modal"
                  aria-label="Close"
                  style={{ cursor: "pointer" }}
                ></i>
              </div>
              <hr />
              <div class="modal-body">
                <div class="form-outline">
                  <label class="form-label" for="form1">
                    {" "}
                    New Password
                  </label>
                  <input type="password" id="form1" class="form-control" />
                </div>

                <div class="form-outline pt-3">
                  <label class="form-label" for="form1">
                    {" "}
                    Confirm Password
                  </label>
                  <input type="password" id="form1" class="form-control" />
                </div>
              </div>
              <div class="modal-footer">
                <a type="button" class="btn btn-primary">
                  Done
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Modal; 
