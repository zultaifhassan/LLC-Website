import { memo } from "react";

const Memo = ({ todolist, addTodolist }) => {
  console.log("child render");
  return (
    <>
      <h2></h2>
      {todolist.map((todolist, index) => {
        return <p key={index}>{todolist}</p>;
      })}
      <button onClick={addTodolist}>Add Todo</button>
    </>
  );
};

export default memo(Memo);