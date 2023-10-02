import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contactus from './component/Contactus';
import Agenda from './component/Agenda';
import Navbar from './component/navbar';

import Homee from "./component/Homee"
import Previousattendee from './component/Previousattendee';
import Speaker from './component/Speaker';
import Attendee from './component/Attendee';
import Previousspeaker from './component/Previousspeaker';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Homee />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/speaker" element={<Speaker />} /> 
        <Route path="/previousattendee" element={<Previousattendee />} />
        <Route path="/attendee" element={<Attendee />} />
        <Route path="/previousspeaker" element={<Previousspeaker />} />
        
      </Routes>
    </Router>
  );
}

export default App;