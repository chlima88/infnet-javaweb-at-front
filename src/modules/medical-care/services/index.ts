import { MedicalCare } from 'modules/core/types';

export async function getMedicalCares() {
  const data = await fetch('http://localhost:8080/api/medical-care', {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function getMedicalCare(id: string) {
  const data = await fetch(`http://localhost:8080/api/medical-care/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deleteMedicalCare(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/medical-care/${id}`, {
    method: 'DELETE',
  });
}

export async function createMedicalCare(appointmentData: MedicalCare): Promise<Response> {
  return await fetch('http://localhost:8080/api/medical-care', {
    method: 'POST',
    body: JSON.stringify(appointmentData),
  });
}
