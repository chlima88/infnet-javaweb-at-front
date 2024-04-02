import { SyntheticEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { useFetchData, useRegistrySubmit } from 'modules/core/hooks';
import { RegisterControl } from 'modules/core/components';
import { getDoctors } from 'modules/doctors/services';
import { getMedicalCares } from 'modules/medical-care/services';
import { getPatients } from 'modules/patients/services';
import { createSchedule } from '../services';
import { getOptions } from '../util';

export function ScheduleRegister() {
  const navigate = useNavigate();
  const dummy = useRef({
    datetime: '2023-04-19T09:00:00.000',
    patientId: '1',
    medicalCareId: '1',
    doctorId: '1',
    type: 'image-diagnostic',
    // diagnosis: 'Doença arterial periférica',
    // prescription: 'Repouso. Utilizar xxxx 200mg 2x ao dia ',
  });

  const { data: patients } = useFetchData(getPatients);
  const { data: doctors } = useFetchData(getDoctors);
  const { data: medicalCares } = useFetchData(getMedicalCares);

  const scheduleTypes = [
    { key: 'appointment', value: 'appointment', text: 'Appointment' },
    { key: 'laboratory', value: 'laboratory', text: 'Laboratory' },
    { key: 'image-diagnostic', value: 'image-diagnostic', text: 'Image Diagnostic' },
  ];

  const { success, setSuccess, error, setError, errorMsg, isLoading, handleSubmit } = useRegistrySubmit(
    dummy.current,
    createSchedule,
  );

  function handleClick(event: SyntheticEvent): void {
    event.preventDefault();
    navigate('/schedules/list');
  }

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="stethoscope" />
        Create New Schedule
      </Header>
      <Divider section horizontal hidden>
        Service data
      </Divider>
      <Form onSubmit={handleSubmit} loading={isLoading} success={success} error={error}>
        <Form.Input
          type="datetime-local"
          step={60 * 30}
          label="Date and Time"
          defaultValue={dummy.current.datetime}
          onChange={(_, data) => (dummy.current.datetime = data.value as string)}
        />
        <Form.Dropdown
          selection
          clearable
          search
          name="type"
          label="Schedule Type"
          placeholder="Select a Type"
          defaultValue={'test'}
          options={scheduleTypes}
          onChange={(_, data) => (dummy.current.type = data.value as string)}
        />
        <Form.Dropdown
          selection
          clearable
          search
          name="patient"
          label="Patient"
          placeholder="Select a Patient"
          options={getOptions(patients)}
          onChange={(_, data) => (dummy.current.patientId = data.value as string)}
        />
        <Form.Dropdown
          selection
          clearable
          search
          name="doctor"
          label="Doctor"
          placeholder="Select a Doctor"
          options={getOptions(doctors)}
          onChange={(_, data) => (dummy.current.doctorId = data.value as string)}
        />
        <Form.Dropdown
          selection
          clearable
          search
          name="medical-care"
          label="Medical Care"
          placeholder="Select a Medical Care"
          options={getOptions(medicalCares)}
          onChange={(_, data) => (dummy.current.medicalCareId = data.value as string)}
        />
        <RegisterControl
          errMsg={errorMsg}
          handleClose={() => {
            setSuccess(false), setError(false);
          }}
          handleClick={handleClick}
        />
      </Form>
    </Container>
  );
}
