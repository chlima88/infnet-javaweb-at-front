import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { AddressFormPart, ViewControl } from 'modules/core/components';
import { useViewData } from 'modules/core/hooks';
import { getPatient, deletePatient } from '../services';

export function PatientView() {
  const {
    data: patient,
    success,
    error,
    isLoading,
    handleClickDelete,
    handleClick,
  } = useViewData(getPatient, deletePatient, '/patients/list');

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="user" />
        Patient View
      </Header>
      <Divider section horizontal hidden>
        Personal data
      </Divider>

      <Form loading={isLoading} success={success} error={error}>
        <Form.Group>
          <Form.Input name="id" width={1} label="ID" value={patient?.patientId} />
          <Form.Input
            name="name"
            icon="users"
            width={15}
            iconPosition="left"
            label="Full Name *"
            value={patient?.name}
          />
        </Form.Group>
        <Form.Input
          name="birthday"
          icon="calendar"
          iconPosition="left"
          label="Birthday *"
          value={patient?.birthday}
          type="date"
        />
        <Form.Input name="contact" icon="mail" iconPosition="left" label="Contact" value={patient?.contact} />
        <Form.Input name="document" label="Document" value={patient?.document} />
        <Form.Checkbox name="insurance" label="The patient? has our health insurance?" checked={patient?.insurance} />
        <AddressFormPart address={patient?.address!} />
        <ViewControl handleClick={handleClick} handleClickDelete={handleClickDelete} />
      </Form>
    </Container>
  );
}
