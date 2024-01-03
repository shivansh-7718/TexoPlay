
import { useState } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import Alert from './components/Alert';
 import{
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";


function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert] = useState('null');

  const showAlert=(messages,type)=>{
    setAlert({
      msg: messages,
      type: type
    })
  }

  setTimeout(() => {
    setAlert(null);
  }, 2000);



  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode Enabled","Success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode Enabled","Success");
    }
  }
  return (
   <>
   <Router>
   <Navbar title="TexoPlay"  mode={mode}  toggleMode={toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
  
      <Route exact path='/about' element={<AboutUs />} />
  
      <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Enter the text to analyze " mode={mode}/>} />
    </Routes>   
     
    </div>
    </Router>
   
   </>
  );
}

export default App;
