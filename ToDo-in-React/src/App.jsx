import React, { useEffect, useState } from "react";
import List from "./components/List";

function App() {
  const [todo, settodo] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const Add = (e) => {
    let finaltodo = e.target.tasks.value;
    let taskexist=todo.some((t)=>{
      if(t.task.includes(finaltodo)){
        return true;
      }

    })

    if(!finaltodo){
      alert("Kuch to daldey")
    }
    else if (taskexist) {
      alert("Pailai xa ta tyi herr na");
    } else {
      let final = [...todo, {task:finaltodo, done: false }]
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
      let todo = localStorage.getItem("task");
      if (todo) settodo(JSON.parse(todo));
    } catch (er) {
      console.log("Error", er);
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
    <link rel="shortcut icon" href="../../public/logo.png" type="image/x-icon" />
      <div className="bg-gray-700 min-h-screen flex justify-center">
          <div className=" rounded-2xl h-auto m-auto w-300 bg-blue-300 border-white ">
            <div className="flex justify-center p-10">

          <img src="../../public/logo.png" alt="" className="h-15" />
          <h1 className="text-center  text-4xl text-red-900 font-bold p-3">
            
            TODO LIST
          </h1>
            </div>

          <form
            action=""
            onSubmit={Add}
            className=" flex flex-wrap  m-2 gap-2.5"
          >
            <input
              type="text"
              name="tasks"
              placeholder="Enter the task"
              className=" ml-6  task border bg-white outline-none border-none rounded-2xl placeholder:text-black w-230 h-13 p-3 "
            />

            <button className="w-45 border rounded-2xl bg-blue-950 cursor-pointer border-none text-white">
              Save
            </button>
          </form>

          <div className="outerdiv text-center">
            <ul className="text-3xl p-7">{list}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
