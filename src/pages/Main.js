import React, { useState, useRef } from "react";

export const Main = () => {
  const [todo, setTodo] = useState([
    { id: 1, title: "task 1" },
    { id: 5, title: "task 5" },
    { id: 4, title: "task 4" },
    { id: 3, title: "task 3" },
    { id: 2, title: "task 2" },
  ]);

  const [arr, setArr] = useState([]);
  const [arrNew, setArrNew] = useState([]);

  const handleClick = async () => {
    const data = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 20)
    );
    setArr(data);
  };

  const changeArr = () => {
    const data = arr.sort((a, b) => a - b);
    setArrNew(data);
  };

  return (
    <div>
      <header className="header bg-light text-center p-2 shadow w-100  ">
        <div>
          <h1>Sorting Project</h1>
        </div>
      </header>
      <main>
        <div className="row mt-4 w-100">
          <div className="col text-center ">
            <h3>sort method to change order</h3>
            {todo &&
              todo
                .sort((a, b) => (a.id > b.id ? 1 : -1))
                .map((task) => (
                  <div key={task.id}>
                    <p>
                      {task.id} - {task.title}
                    </p>
                  </div>
                ))}
            <hr />
            <div>
              <button onClick={handleClick} className="btn btn-primary">
                New array generated
              </button>
              <p className=" h4 mt-4">{arr.join("-")}</p>
            </div>
            <div>
              <button className="btn btn-success mt-4" onClick={changeArr}>
                sort Array
              </button>
            </div>
            <hr />
          </div>
        </div>
      </main>
      <footer className="footer bg-dark text-muted position-absolute bottom-0 w-100 h-10 p-2 text-center">
        <div className="mt-2">
          <p>copyright &copy; 2022</p>
        </div>
      </footer>
    </div>
  );
};
