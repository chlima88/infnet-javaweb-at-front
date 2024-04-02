import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { useViewData } from 'modules/core/hooks';
import { ScheduleFormPart, ViewControl } from 'modules/core/components';
import { deleteSchedule } from 'modules/schedules/services';
import { getImageDiagnostic } from '../services';

export function ImageDiagnosticView() {
  // const dummy = useRef({
  //   datetime: '2023-04-19T01:00:00.000',
  //   patientId: '1',
  //   medicalCareId: '1',
  //   doctorId: '1',
  //   // symptoms: 'Dores constante no peito e falta de ar',
  //   // diagnostic: 'Doença arterial periférica',
  //   // prescription: 'Repouso. Utilizar xxxx 200mg 2x ao dia ',
  // });

  const {
    data: schedule,
    success,
    error,
    isLoading,
    handleClickDelete,
    handleClick,
  } = useViewData(getImageDiagnostic, deleteSchedule, '/schedules/image-diagnostic/list');

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="dna" />
        View Image Diagnostic
      </Header>
      <Divider section horizontal hidden>
        Service data
      </Divider>
      <Form loading={isLoading} success={success} error={error}>
        <ScheduleFormPart schedule={schedule!} />
        {/* <Form.TextArea
          name="symptoms"
          icon="time"
          iconPosition="left"
          label="Symptoms"
          style={{ minHeight: 100 }}
          placeholder={`Ex: ${dummy.current.symptoms}`}
          defaultValue={dummy.current.symptoms}
          onChange={(event) => (dummy.current.symptoms = event.target.value)}
        />
        <Form.TextArea
          name="diagnostic"
          icon="time"
          iconPosition="left"
          label="Diagnosis"
          style={{ minHeight: 100 }}
          placeholder={`Ex: ${dummy.current.diagnostic}`}
          // defaultValue={dummy.current.diagnostic}
          onChange={(event) => (dummy.current.diagnostic = event.target.value)}
        />
        <Form.TextArea
          name="prescription"
          icon="time"
          iconPosition="left"
          label="Prescription"
          style={{ minHeight: 100 }}
          placeholder={`Ex: ${dummy.current.prescription}`}
          // defaultValue={dummy.current.prescription}
          onChange={(event) => (dummy.current.prescription = event.target.value)}
        /> */}
        <ViewControl handleClickDelete={handleClickDelete} handleClick={handleClick} />
      </Form>
    </Container>
  );
}
