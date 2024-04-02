import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { AddressFormPart, ViewControl } from 'modules/core/components';
import { useViewData } from 'modules/core/hooks';
import { deleteDoctor, getDoctor } from '../services';

export function DoctorView() {
  const {
    data: doctor,
    success,
    error,
    isLoading,
    handleClickDelete,
    handleClick,
  } = useViewData(getDoctor, deleteDoctor, '/doctors/list');

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="doctor" />
        Doctor Register
      </Header>
      <Divider section horizontal hidden>
        Personal data
      </Divider>

      <Form loading={isLoading} success={success} error={error}>
        <Form.Group>
          <Form.Input name="id" width={1} label="ID" value={doctor?.doctorId} />
          <Form.Input
            name="name"
            width={15}
            icon="users"
            iconPosition="left"
            label="Full Name *"
            defaultValue={doctor?.name}
          />
        </Form.Group>
        <Form.Input
          name="birthday"
          icon="calendar"
          iconPosition="left"
          label="Birthday *"
          defaultValue={doctor?.birthday}
          type="date"
        />
        <Form.Input name="crm" icon="mail" iconPosition="left" label="CRM" defaultValue={doctor?.crm} />
        <Form.Input name="specialty" label="Specialty *" defaultValue={doctor?.specialty} />
        <AddressFormPart address={doctor?.address!} />
        <ViewControl handleClick={handleClick} handleClickDelete={handleClickDelete} />
      </Form>
    </Container>
  );
}
