import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalDetails from './form/PersonalDetails';
import JobDetails from './form/JobDetails';
import BankDetails from './form/BankDetails';
import EmergencyContacts from './form/EmergencyContacts';
import './App.css';
function App() {

  return (
<Router>
      <Routes>
        <Route path="/" element={<PersonalDetails />} />
        <Route path="/job-details" element={<JobDetails />} />
        <Route path="/bank-details" element={<BankDetails />} />
        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
      </Routes>
    </Router>
  )
}

export default App
