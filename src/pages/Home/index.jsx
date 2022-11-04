import React, { useState , useEffect}  from 'react';
import './styles.css';

import { Card } from '../../components/Card';

 function Home() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);

function handleAddStudent(){
  const newStudent = {
    name: studentName,
    time: new Date().toLocaleTimeString("pt-br",
    {
      hour: '2-digit',
      minute: '2-digit',
      second:'2-digit',
    })
  };

  setStudents(state => [...state, newStudent])
}

  return (
    <div className="container">
      <header>
        <h1>Lista de presença</h1>
      <div>
        <strong>AdrianResende</strong>
        <img src="https://avatars.githubusercontent.com/u/92228901?v=4" alt="Foto de perfil" />
      </div>
      </header>

      <input
      type="text"
      placeholder="Digite o nome..."
      onChange={e => setStudentName(e.target.value)}
      />

      <button
      type="button"
      onClick={handleAddStudent}>Adicionar</button>

      {
        students.map(student => (
        <Card
        key={student.time}
        name={student.name}
        time={student.time}
        />))

      }
</div>
  );
}
export default Home;

