import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

class Detail extends Component {
  render() {
    const { data: consulData, loading, error } = this.props.consul;

    if (error) return <>Error</>;
    if (loading)
      return (
        <>
          <div id="loader-wrapper">
            <div id="loader"></div>
          </div>
        </>
      );

    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        dispatch="true"
      >
        {consulData && (
          <div className="pt-3 p-2 mb-3">
            <div className="px-3">
              <table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>FullNAme</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>age</th>
                    <th>height</th>
                    <th>weight</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>{consulData.fullName}</td>
                    <td>{consulData.gender}</td>
                    <td>{consulData.phone}</td>
                    <td>{consulData.age}</td>
                    <td>{consulData.height}</td>
                    <td>{consulData.weight}</td>
                  </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label
                  htmlFor="description"
                  className="form-control-label bold"
                >
                  Give Response
                </label>
                <textarea
                  required
                  autoComplete="off"
                  onChange={this.handleChange}
                  value=""
                  name="description"
                  id="description"
                  className="textareas"
                />
              </div>
              <div className="float-right d-flex">
                <Button
                  variant="danger"
                  className="mr-2 btn-sm bold"
                  onClick={this.props.onHide}
                >
                  Cancel
                </Button>
                <Button
                  variant="success"
                  className="bold"
                  onClick={this.props.onHide}
                >
                  Approve
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    consul: state.consultation
  };
};

export default connect(mapStateToProps)(Detail);
