export async function getLaboratories() {
  const data = await fetch('http://localhost:8080/api/schedule/laboratory', {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function getLaboratory(id: string) {
  const data = await fetch(`http://localhost:8080/api/schedule/laboratory/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deleteLaboratory(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/schedule/laboratory/${id}`, {
    method: 'DELETE',
  });
}

export async function createLaboratory(laboratoryData: Laboratory): Promise<Response> {
  return await fetch('http://localhost:8080/api/schedule/laboratory', {
    method: 'POST',
    body: JSON.stringify(laboratoryData),
  });
}

type Laboratory = {
  patientId: string;
  medicalCareId: string;
  doctorId: string;
  type: string;
  // symptoms: string;
  // diagnosis: string;
  // prescription: string;
};
