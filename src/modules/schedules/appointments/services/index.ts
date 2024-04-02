export async function getAppointments() {
  const data = await fetch('http://localhost:8080/api/schedule/appointment', {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function getAppointment(id: string) {
  const data = await fetch(`http://localhost:8080/api/schedule/appointment/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deleteAppointment(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/schedule/appointment/${id}`, {
    method: 'DELETE',
  });
}

export async function createAppointment(imageDiagnosticData: Appointment): Promise<Response> {
  return await fetch('http://localhost:8080/api/schedule/appointment', {
    method: 'POST',
    body: JSON.stringify(imageDiagnosticData),
  });
}

type Appointment = {
  patientId: string;
  medicalCareId: string;
  doctorId: string;
  // symptoms: string;
  // diagnosis: string;
  // prescription: string;
};
