import React, { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [todo, settodo] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const Add = (e) => {
    let finaltodo = e.target.tasks.value.trim();

    if (!finaltodo) {
      alert("Kuch to daldey");
      return;
    }

    let taskexist = todo.some(
      (
        t //this is the implicit function we can use {} explicit with return too
      ) => t.task.toLowerCase() === finaltodo.toLowerCase()
    );

    if (taskexist) {
      alert("Pailai xa ta tyi herr na");
    } else {
      let final = [...todo, { task: finaltodo, done: false }];
      settodo(final);
      e.target.reset();
    }

    e.preventDefault();
  };
  let list = todo.map((value, index) => {
    return (
      <List
        value={value.task}
        index={index}
        key={index}
        todo={todo}
        settodo={settodo}
      />
    );
  });

  useEffect(() => {
    try {
      let saved = localStorage.getItem("task");
      if (saved) {
        let parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          settodo(parsed);
        } else {
          settodo([]);
        }
      }
    } catch (er) {
      console.log("Error", er);
      settodo([]);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (loaded) {
      localStorage.setItem("task", JSON.stringify(todo));
    }
  }, [todo, loaded]);

  return (
    <>
      <div className="bg-gray-700 min-h-screen flex">
        <div className="bg-blue-300 m-5 w-full rounded-2xl p-5 lg:m-25">
          <div className="flex justify-center flex-col items-center gap-2">
            <img src="../../public/logo.png" alt="" className="h-15 w-15 lg:h-20 lg:w-20 " />
            <h1 className="text-3xl lg:text-4xl font-bold p-3">
              TODO LIST
            </h1>
          </div>

          <form
            action=""
            onSubmit={Add}
            className=""
          >
            <input
              type="text"
              name="tasks"
              placeholder="Enter the task"
              className="bg-white rounded-[0.4rem] w-[70%] h-14 text-xl p-3 outline-none border-none"
            />

            <button className="bg-blue-900 text-white w-[30%] h-15 rounded-2xl cursor-pointer">
              Save
            </button>
          </form>

          <div className="">
            <ul className="">{list}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
