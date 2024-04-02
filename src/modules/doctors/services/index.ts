import { Doctor } from 'modules/core/types';

export async function getDoctors() {
  const data = await fetch('http://localhost:8080/api/doctor', {
    method: 'GET',
  }).then((res) => res.json());
  data.map((patient: any) => {
    patient.insurance = patient.insurance ? 'Yes' : 'No';
  });
  return data;
}

export async function getDoctor(id: string) {
  const data = await fetch(`http://localhost:8080/api/doctor/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deleteDoctor(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/doctor/${id}`, {
    method: 'DELETE',
  });
}

export async function createDoctor(doctorData: Doctor): Promise<Response> {
  return await fetch('http://localhost:8080/api/doctor', {
    method: 'post',
    body: JSON.stringify(doctorData),
  });
}
