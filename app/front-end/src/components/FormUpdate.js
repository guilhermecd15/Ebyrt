import React, { useState } from 'react'
import Api from '../Api';

export default function FormUpdate({id}) {
  const [task, setTask] = useState();
  const [status, setStatus] = useState();

  const updateTask = async (task, status, id) => {
    const body = {
      descricao: task,
      status,
    };

    await Api.put(`/${id}`, body);
  };

  return (
    <form>
      <textarea id="taskArea" onChange={(e) => setTask(e.target.value)} placeholder='Descreva sua tarefa!'></textarea>
      <label>Status: </label>
      <select onChange={(e) => setStatus(e.target.value)} value={status} onc name='status'>
        <option>Selecione</option>
        <option value="Pendente">Pendente</option>
        <option value="Em andamento">Em andamento</option>
        <option value="Pronto">Pronto</option>
      </select>
      <button onClick={() => updateTask(task, status, id)}> ATT </button>
    </form>
  )
}
