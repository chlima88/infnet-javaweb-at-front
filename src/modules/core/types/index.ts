export type Schedule = {
  scheduleId?: string;
  datetime: string;
  type: string;
  patient: Patient;
  doctor: Doctor;
  medicalCare: MedicalCare;
  confirmed: boolean | string;
};

export type Patient = {
  patientId?: string;
  name: string;
  birthday: string;
  contact: string;
  document: string;
  insurance: boolean;
  address: { street: string; number: string; cep: string; district: string; city: string; state: string };
};

export type Doctor = {
  doctorId?: string;
  name: string;
  birthday: string;
  crm: string;
  specialty: string;
  address: { street: string; number: string; cep: string; district: string; city: string; state: string };
};

export type MedicalCare = {
  medicalCareId?: string;
  name: string;
  code: string;
  durationInMinutes: string;
};
