import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Header } from 'modules/core/components';
import { Home } from 'modules/home/views';
import { DoctorRoutes } from 'modules/doctors/routes';
import { MedicalCareRoutes } from 'modules/medical-care/routes';
import { PatientRoutes } from 'modules/patients/routes';
import { ScheduleRoutes } from 'modules/schedules/routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/doctors/*" Component={DoctorRoutes} />
          <Route path="/patients/*" Component={PatientRoutes} />
          <Route path="/medical-care/*" Component={MedicalCareRoutes} />
          <Route path="/schedules/*" Component={ScheduleRoutes} />
          <Route path="/home" Component={Home} />
          <Route path="/" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
