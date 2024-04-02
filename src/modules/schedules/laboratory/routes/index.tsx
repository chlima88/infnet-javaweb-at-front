import { Route, Routes } from 'react-router-dom';
import { LaboratoryList, LaboratoryView } from '../views';

export function LaboratoryRoutes() {
  return (
    <Routes>
      <Route path="/:id" Component={LaboratoryView} />
      <Route path="/list" Component={LaboratoryList} />
    </Routes>
  );
}
