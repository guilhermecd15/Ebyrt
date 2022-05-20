import { useEffect, useState } from 'react';
import Api from './Api';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    Api.get('/').then((res) => {
      setTasks(res.data)
    });
  }, []);
  console.log(tasks)
  
  return (
    <div className="App">
      <Form />
      {typeof tasks !== "undefined" && tasks.map((t) => {
        return <List task={t} />
      })}
    </div>
  );
}

export default App;
