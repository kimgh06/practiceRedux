import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deltodo } from "../store";

const Todo = ({ id, text, clicked }) => {
  return <li id={id}>
    <Link to={`/${id}`}>
      {text}
    </Link>
    <button onClick={e => {
      clicked();
    }}>del</button>
  </li>;
}

const mapStateToProps = (dis, oprops) => {
  return { clicked: e => dis(deltodo(oprops.id)) };
}

export default connect(null, mapStateToProps)(Todo);