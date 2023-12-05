import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

import { Amplify } from 'aws-amplify';
import { generateClient } from "aws-amplify/api";
import { createEntry } from './graphql/mutations';
import config from './amplifyconfiguration.json';
Amplify.configure(config);
// Amplify.configure();

const client = generateClient()

try{

  await client.graphql({
    query: createEntry,
    variables: {
      input: {
        "Entry": "Lorem ipsum dolor sit amet",
      }
    }
  });
//   await client.graphql({
//     query: queries.getEntry,
//     variables: {id:"something"}

//   });
}catch(error){
  console.log("Error fetching model", error);
}


function App() {


  return (
    
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="*" element={<Navigate to="/"/>} /> */}
        </Routes>


      </Router>
    </div>
  );
}

export default App;
