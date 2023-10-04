import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Contactus from './component/Contactus';
import Agenda from './component/Agenda';
import Navbar from './component/navbar';

import Homee from "./component/Homee"
import Previousattendee from './component/Previousattendee';
import Speaker from './component/Speaker';
import Attendee from './component/Attendee';
import Previousspeaker from './component/Previousspeaker';
import TermsAndCondition from './component/TermsAndCondition';
import Footer from './component/Footer';
import About from './component/About';
import Partner from './component/Partner';

import FirstFooter from './component/FirstFooter';


function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Homee />} />
         <Route path='about' element={<About/>}/>
        <Route path="/contact" element={<Contactus />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/speaker" element={<Speaker />} /> 
        <Route path="/previousattendee" element={<Previousattendee />} />
        <Route path="/attendee" element={<Attendee />} />
        <Route path="/previousspeaker" element={<Previousspeaker />} />
        <Route path='/termsandconditions' element={<TermsAndCondition/>}/>
        <Route path='/partner' element={<Partner/>}/>
      </Routes>
         <FirstFooter/>
          <Footer/>
    </Router>
  );
}

export default App;