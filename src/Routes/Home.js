import React, { useState } from "react";
import { connect } from "react-redux";

function Home(props) {
  console.log(props);
  const [text, setText] = useState("");
  return <div className="home">
    <form onSubmit={e => {
      e.preventDefault();

    }}>
      <input placeholder="put it" value={text} onChange={e => setText(e.target.value)} />
      <button>put</button>
    </form>
    <ul>

    </ul>
  </div>;
}

const getCurrent = (state) => {
  return { state };
}

export default connect(getCurrent)(Home);