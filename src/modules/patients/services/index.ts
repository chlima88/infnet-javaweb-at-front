import { Patient } from 'modules/core/types';

export async function getPatients() {
  const data = await fetch('http://localhost:8080/api/patient', {
    method: 'GET',
  }).then((res) => res.json());
  data.map((patient: any) => {
    patient.insurance = patient.insurance ? 'Yes' : 'No';
  });
  return data;
}

export async function getPatient(id: string) {
  const data = await fetch(`http://localhost:8080/api/patient/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deletePatient(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/patient/${id}`, {
    method: 'DELETE',
  });
}

export async function createPatient(patientData: Patient): Promise<Response> {
  return await fetch('http://localhost:8080/api/patient', {
    method: 'post',
    body: JSON.stringify(patientData),
  });
}
