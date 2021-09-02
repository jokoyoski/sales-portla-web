import React from 'react'

const Modalcheckout = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}

{/* <!-- Modal --> */}
<div
  class="modal fade"
  id="exampleModal2"
  tabindex="-1"
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
          <p></p>
                                <i
                                    class="far fa-times-circle text-danger"
                                    data-mdb-dismiss="modal"
                                    aria-label="Close"
                                    style={{ cursor: "pointer" }}
                                ></i>
      </div>
      <div class="modal-body text-center">
            <img src="./Images/shopping-img.png" alt="" width="50%" />
                            <h5 class="modal-title" id="exampleModalLabel"> <strong>Succesful Purchase</strong></h5>
            <p>Total amount Paid</p>
            <div className="d-flex justify-content-center">
                                <button type="button" class="btn btn-outline-success"> <h5> <strong> N276,500.00</strong></h5></button>
            </div>
                            <div className="d-flex justify-content-center">
                                <button type="button" class="btn btn-primary">Continue</button>
                            </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Modalcheckout
