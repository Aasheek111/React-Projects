import React, { useState } from "react";
import List from "./components/list";

function App() {
  const [todo, settodo] = useState([]);

  const Add = (e) => {
    let finaltodo = e.target.tasks.value;

    if (todo.includes(finaltodo)) {
      alert("Task already exists");
    } else {
      let final = [...todo, finaltodo];
      settodo(final);

      e.target.reset();
    }

    e.preventDefault();
  };
  let list = todo.map((value, index) => {
    return <List value={value} index={index} key={index} todo={todo} settodo={settodo} />;
  });

  return (
    <>
      <div className=" rounded-2xl h-auto m-auto w-300 bg-blue-200 mt-15">
        <h1 className="text-center text-4xl text-red-900 font-bold p-3">
          TODO LIST
        </h1>

        <form action="" onSubmit={Add} className=" flex flex-wrap  m-2 gap-2.5">
          <input
            type="text"
            name="tasks"
            placeholder="Enter the task"
            className=" ml-6  task border bg-emerald-100 outline-none border-none rounded-2xl placeholder:text-black w-230 h-13 p-3 "
          />

          <button className="w-45 border rounded-2xl bg-blue-950 text-white">Save </button>
        </form>

        <div className="outerdiv text-center">
          <ul className="text-3xl p-7">{list}</ul>
        </div>
      </div>
    </>
  );
}

export default App;
