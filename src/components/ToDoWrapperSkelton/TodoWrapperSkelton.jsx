import React from 'react';
import './ToDoWrapperSkelton.scss';
function TodoWrapperSkelton() {
  const iterations = 5;

  // Generate an array of length `iterations`
  const skeletonTasks = Array.from({ length: iterations }, (_, index) => (
    <div className='skelton_one_task' key={index}></div>
  ));

  return (
    <div className="tasks__skelton">
      {skeletonTasks}
    </div>
  );
}

export default TodoWrapperSkelton;