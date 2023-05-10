import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

function Detail({ todo }) {
  const { id } = useParams();
  return <div className="detail">
    detail
    {id}
  </div>
}

const mapStateToProps = (state) => {
  return { todo: state };
}

export default connect(mapStateToProps)(Detail);