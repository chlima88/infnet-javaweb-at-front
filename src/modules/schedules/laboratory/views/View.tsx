import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { getLaboratory } from 'modules/schedules/laboratory/services';
import { useViewData } from 'modules/core/hooks';
import { ScheduleFormPart, ViewControl } from 'modules/core/components';
import { deleteSchedule } from 'modules/schedules/services';

export function LaboratoryView() {
  const {
    data: schedule,
    success,
    error,
    isLoading,
    handleClickDelete,
    handleClick,
  } = useViewData(getLaboratory, deleteSchedule, '/schedules/laboratory/list');

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="lab" />
        View Laboratory
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
