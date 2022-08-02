import React from 'react'
import Header from "./components/Header";
function App() {
  //   const [tasks, setTasks] = useState([
  // {id: 1, text: 'Doctors app', day: 'Feb 5th at 2:30pm', reminder: true, },
  // {id:2, text:'Dentist app', day:'Feb 6th at 2:30pm',reminder: true,},
  // {id: 3, text: 'school app', day: 'Feb 7th at 2:30pm', reminder: true, }])
  //delete task 
  
 
  return (
    <div className="innerContainer">
      <Header />
      <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form>
    </div>
  );
}

export default App;
