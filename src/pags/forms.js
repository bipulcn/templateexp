import React from "react";

const FormPage = () => {
    return (
        <div className="row justify-content-center">
          <div className="col-12">
            <h1 className="">Form Page</h1>
          </div>
          <div className="col-12 col-md-5 p-3 light p-5">
            <div className="card crd1 py-2 br9">
              <div className="card-body p-5">
                <h1 className="cd6 text-center tx6">Log in to your account</h1>
                <p className="text-center tx6">Welcome back! please enter your account info</p>
                <div className="row">
                  <div className="col-12">
                    <div className="fgroup">
                      <label >Email address</label>
                      <input type="email" placeholder="Enter email" />
                      <small className="text-muted">We'll never share your email with anyone else.</small>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="fgroup">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                    <div className="fcheck w-50">
                      <input type="checkbox" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div className="btn btn-blank py-3">Forgot Password</div>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <div className="fgroup">
                      <button type="submit" className="btn btn6 rbtn w-75">Submit</button>
                      <small className="text-muted">Don't have an account? <a href="#" className="btn btn-blank">Sign Up</a></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 p-3 dark p-5">
            <div className="card crd1 py-2 br9">
              <div className="card-body p-5">
                <h1 className="cd6 text-center tx6">Log in to your account</h1>
                <p className="text-center tx6">Welcome back! please enter your account info</p>
                <div className="row">
                  <div className="col-12">
                    <div className="fgroup">
                      <label >Email address</label>
                      <input type="email" placeholder="Enter email" />
                      <small className="text-muted">We'll never share your email with anyone else.</small>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="fgroup">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input type="password" placeholder="Password" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-flex">
                    <div className="fcheck w-50">
                      <input type="checkbox" id="exampleCheck1" />
                      <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
                    </div>
                    <div className="btn btn-blank py-3">Forgot Password</div>
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <div className="fgroup">
                      <button type="submit" className="btn btn6 rbtn w-75">Submit</button>
                      <small className="text-muted">Don't have an account? <a href="#" className="btn btn-blank">Sign Up</a></small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}

export default FormPage;