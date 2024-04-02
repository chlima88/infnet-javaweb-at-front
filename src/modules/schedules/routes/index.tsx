import { Route, Routes } from 'react-router-dom';
import { ScheduleList, ScheduleRegister } from '../views';
import { AppointmentRoutes } from '../appointments/routes';
import { ImageDiagnosticRoutes } from '../image-diagnostic/routes';
import { LaboratoryRoutes } from '../laboratory/routes';

export function ScheduleRoutes() {
  return (
    <Routes>
      <Route path="/create" Component={ScheduleRegister} />
      <Route path="/list" Component={ScheduleList} />
      <Route path="/appointment/*" Component={AppointmentRoutes} />
      <Route path="/laboratory/*" Component={LaboratoryRoutes} />
      <Route path="/image-diagnostic/*" Component={ImageDiagnosticRoutes} />
    </Routes>
  );
}
