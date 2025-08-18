

function List({ value, index, todo, settodo }) {


  const Delete = (e) => {
    e.stopPropagation();
    let newdat = todo.filter((v, i) => i != index); //or if we dont want to use the implicit function then we can use return too
    settodo(newdat);
  };

  const Done = () => {//for toggling the done 
    let temparr=[...todo]
    temparr[index].done=!temparr[index].done;

    settodo(temparr)
    localStorage.setItem("task", JSON.stringify(temparr));

  };

  const Up = (e) => {//logic for up
    e.stopPropagation();
    let newArr = [...todo];
    if (index >= 1) {
      [newArr[index], newArr[index - 1]] = [newArr[index - 1], newArr[index]];
      settodo(newArr);
    }
  };

  const Down = (e) => {//logic for task down
    e.stopPropagation();
    let newArr = [...todo];
    
    if (index < todo.length - 1) {
      [newArr[index], newArr[index + 1]] = [newArr[index + 1], newArr[index]];
      settodo(newArr);
    }
  };

  return (
    <li
      className={`bg-amber-100 relative w-280 h-15 mb-3 p-3 cursor-pointer rounded-xl ${
        todo[index].done ? "line-through bg-green-100" : ""
      } `}
      onClick={Done}
    >
      <span className="absolute left-2 ">{index + 1}. </span>
      {value}
      <span
        className="absolute right-20 top-0  p-3 cursor-pointer bg-green-500 rounded-2xl"
        onClick={Up}
      >
        &uarr;
      </span>
      <span
        className="absolute right-32 top-0 p-3 cursor-pointer bg-amber-600 rounded-2xl"
        onClick={Down}
      >
        &darr;
      </span>
      <span
        onClick={Delete}
        className=" absolute right-0 cursor-pointer p-3 top-0   h-15  w-20 rounded-xl bg-red-700 text-white"
      >
        &times;
      </span>
    </li>
  );
}

export default List;
