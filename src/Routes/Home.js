import React, { useState } from "react";
import { connect } from "react-redux";
import Todo from "../components/Todo";
import { addtodo, deltodo } from "../store";

function Home(props) {
  console.log(props.state);
  const [text, setText] = useState("");
  return <div className="home">
    <form onSubmit={e => {
      e.preventDefault();
      props.addTodo(text);
      setText("");
    }}>
      <input placeholder="put it" value={text} onChange={e => setText(e.target.value)} />
      <button>put</button>
    </form>
    <ul>
      {(props.state).map((i, n) => {
        return <Todo {...i} key={n} />
      })}
    </ul>
  </div>;
}
const mapStateToProps = (state) => {
  return { state };
}

const mapDispatchToProps = (dispatch) => {
  return { addTodo: e => dispatch(addtodo(e)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);