import { Route, Routes } from 'react-router-dom';
import { MedicalCareList, MedicalCareRegister, MedicalCareView } from '../views';

export function MedicalCareRoutes() {
  return (
    <Routes>
      <Route path="/:id" Component={MedicalCareView} />
      <Route path="/create" Component={MedicalCareRegister} />
      <Route path="/list" Component={MedicalCareList} />
    </Routes>
  );
}
