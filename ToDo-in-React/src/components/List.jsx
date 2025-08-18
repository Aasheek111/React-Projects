function List({ value, index, todo, settodo }) {
  const Delete = (e) => {
    e.stopPropagation();
    let newdat = todo.filter((v, i) => i != index); //or if we dont want to use the implicit function then we can use return too
    settodo(newdat);
  };

  const Done = () => {
    //for toggling the done
    let temparr = [...todo];
    temparr[index].done = !temparr[index].done;

    settodo(temparr);
    localStorage.setItem("task", JSON.stringify(temparr));
  };

  const Up = (e) => {
    //logic for up
    e.stopPropagation();
    let newArr = [...todo];
    if (index >= 1) {
      [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]];
      settodo(newArr);
    }
  };

  const Down = (e) => {
    //logic for task down
    e.stopPropagation();
    let newArr = [...todo];

    if (index < todo.length - 1) {
      [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]];
      settodo(newArr);
    }
  };

  return (
    <li>
      <div className="flex p-3">
        <div
          className={`p-3 text-2xl w-full bg-amber-50 rounded-xl lg:flex justify-between ${
            todo[index].done
              ? " bg-green-200 rounded-xl lg: justify-between"
              : ""
          }`}
          onClick={Done}
        >
          <span
            className={` text-3xl ${

              todo[index].done
                ? "line-through rounded-xl lg:line-through justify-between"
                : ""}` 
            }
          >
            {value}
          </span>

          <div className="flex">
            <span
              className="cursor-pointer bg-green-700 flex-1 rounded-xl text-center text-3xl p-2 text-white lg:text-4xl lg:p-3 "
              onClick={Up}
            >
              &uarr;
            </span>
            <span
              className="cursor-pointer bg-yellow-800 flex-1 text-white rounded-xl text-center text-3xl p-2 lg:text-4xl lg:p-3"
              onClick={Down}
            >
              &darr;
            </span>
            <span
              onClick={Delete}
              className=" cursor-pointer flex-1 bg-red-700 text-white rounded-xl text-center text-3xl p-2 lg:text-4xl lg:p-3"
            >
              &times;
            </span>
          </div>
        </div>
      </div>
    </li>
  );
}

export default List;
