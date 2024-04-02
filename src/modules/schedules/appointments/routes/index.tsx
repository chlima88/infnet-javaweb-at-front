import { Route, Routes } from 'react-router-dom';
import { AppointmentList, AppointmentView } from '../views';

export function AppointmentRoutes() {
  return (
    <Routes>
      <Route path="/:id" Component={AppointmentView} />
      <Route path="/list" Component={AppointmentList} />
    </Routes>
  );
}
