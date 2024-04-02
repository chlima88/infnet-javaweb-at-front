export async function createSchedule(scheduleData: ScheduleData): Promise<Response> {
  return await fetch(`http://localhost:8080/api/schedule/${scheduleData.type}`, {
    method: 'POST',
    body: JSON.stringify(scheduleData),
  });
}

export async function getSchedules(): Promise<Response> {
  const data = await fetch(`http://localhost:8080/api/schedule`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deleteSchedule(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/schedule/${id}`, {
    method: 'DELETE',
  });
}

type ScheduleData = {
  patientId: string;
  medicalCareId: string;
  doctorId: string;
  type: string;
  // symptoms: string;
  // diagnosis: string;
  // prescription: string;
};
