import React, { useState } from 'react'
import Api from '../Api';
import FormUpdate from './FormUpdate';

export default function List({ task }) {
  const [form, setForm] = useState();

  const deleteTask = async (id) => {
    await Api.delete(`/${id}`);
    window.location.reload();
  };

  return (
    <div>
      <p>{task.descricao}</p>
      <p>{task.status}</p>
      <button onClick={() => deleteTask(task.id)}>X</button>
      <button onClick={() => setForm(1)}>edit</button>
      {typeof form !== "undefined" && <FormUpdate id={task.id} />}
    </div>
  )
}
