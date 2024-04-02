export function getOptions(data: any[]) {
  return data?.map((item: { doctorId: string; medicalCareId: string; patientId: string; name: string }) => {
    return {
      key: item.patientId ?? item.doctorId ?? item.medicalCareId,
      value: item.patientId ?? item.doctorId ?? item.medicalCareId,
      text: `${item.patientId ?? item.doctorId ?? item.medicalCareId} | ${item.name}`,
    };
  });
}
