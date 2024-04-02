export async function getImageDiagnostics() {
  const data = await fetch('http://localhost:8080/api/schedule/image-diagnostic', {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function getImageDiagnostic(id: string) {
  const data = await fetch(`http://localhost:8080/api/schedule/image-diagnostic/${id}`, {
    method: 'GET',
  }).then((res) => res.json());
  return data;
}

export async function deleteImageDiagnostic(id: string): Promise<Response> {
  return await fetch(`http://localhost:8080/api/schedule/image-diagnostic/${id}`, {
    method: 'DELETE',
  });
}

export async function createImageDiagnostic(imageDiagnosticData: ImageDiagnostic): Promise<Response> {
  return await fetch('http://localhost:8080/api/schedule/image-diagnostic', {
    method: 'POST',
    body: JSON.stringify(imageDiagnosticData),
  });
}

type ImageDiagnostic = {
  patientId: string;
  medicalCareId: string;
  doctorId: string;
  // symptoms: string;
  // diagnosis: string;
  // prescription: string;
};
