import { Route, Routes } from 'react-router-dom';
import { ImageDiagnosticList, ImageDiagnosticView } from '../views';

export function ImageDiagnosticRoutes() {
  return (
    <Routes>
      <Route path="/:id" Component={ImageDiagnosticView} />
      <Route path="/list" Component={ImageDiagnosticList} />
    </Routes>
  );
}
