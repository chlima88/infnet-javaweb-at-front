import { Route, Routes } from 'react-router-dom';
import { DoctorList, DoctorRegister, DoctorView } from '../views';

export function DoctorRoutes() {
  return (
    <Routes>
      <Route path="/:id" Component={DoctorView} />
      <Route path="/create" Component={DoctorRegister} />
      <Route path="/list" Component={DoctorList} />
    </Routes>
  );
}
