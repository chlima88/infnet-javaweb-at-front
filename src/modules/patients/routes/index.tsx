import { Route, Routes } from 'react-router-dom';
import { PatientList, PatientRegister, PatientView } from '../views';

export function PatientRoutes() {
  return (
    <Routes>
      <Route path="/:id" Component={PatientView} />
      <Route path="/create" Component={PatientRegister} />
      <Route path="/list" Component={PatientList} />
    </Routes>
  );
}
