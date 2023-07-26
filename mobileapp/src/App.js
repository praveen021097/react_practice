

import Manufecturer from './components/Manufecturer';
import Navbar from './components/Navbar';
import OperationSystems from './components/OperationSystems';

function App() {
  const os =["Android","BlackBerry","iPhone","Windows Phone"]
  const companies =["Samsung","Nokia","Intex","Apple"]
  return (
    <div className="App">
      <Navbar />
      <OperationSystems os ={os} />
      <Manufecturer companies={companies} />
    </div>
    
  );
}

export default App;
