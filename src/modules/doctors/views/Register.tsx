import { SyntheticEvent, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { AddressFormPart, RegisterControl } from 'modules/core/components';
import { useRegistrySubmit } from 'modules/core/hooks';
import { createDoctor } from '../services';

export function DoctorRegister() {
  const navigate = useNavigate();

  const dummy = useRef({
    name: 'Elberth Moraes',
    birthday: '2000-01-01',
    crm: '472740-RJ',
    specialty: 'Cardiologista',
    address: {
      street: 'R. São José',
      number: '506',
      cep: '20010-020',
      district: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
    },
  });

  const { success, setSuccess, error, setError, isLoading, handleSubmit } = useRegistrySubmit(
    dummy.current,
    createDoctor,
  );

  function handleClick(event: SyntheticEvent): void {
    event.preventDefault();
    navigate('/doctors/list');
  }

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="doctor" />
        Doctor Register
      </Header>
      <Divider section horizontal hidden>
        Personal data
      </Divider>

      <Form onSubmit={handleSubmit} loading={isLoading} success={success} error={error}>
        <Form.Input
          name="name"
          icon="users"
          iconPosition="left"
          label="Full Name *"
          placeholder={`Ex: ${dummy.current.name}`}
          defaultValue={dummy.current.name}
          onChange={(event) => (dummy.current.name = event.target.value)}
        />
        <Form.Input
          name="birthday"
          icon="calendar"
          iconPosition="left"
          label="Birthday *"
          placeholder={`Ex: ${dummy.current.birthday}`}
          defaultValue={dummy.current.birthday}
          onChange={(event) => (dummy.current.birthday = event.target.value)}
          type="date"
        />
        <Form.Input
          name="crm"
          icon="mail"
          iconPosition="left"
          label="CRM"
          placeholder={`Ex: ${dummy.current.crm}`}
          defaultValue={dummy.current.crm}
          onChange={(event) => (dummy.current.crm = event.target.value)}
        />
        <Form.Input
          name="specialty"
          label="Specialty *"
          placeholder={`Ex: ${dummy.current.specialty}`}
          defaultValue={dummy.current.specialty}
          onChange={(event) => (dummy.current.specialty = event.target.value)}
        />
        <AddressFormPart address={dummy.current.address} />
        <RegisterControl
          handleClose={() => {
            setSuccess(false), setError(false);
          }}
          handleClick={handleClick}
        />
      </Form>
    </Container>
  );
}
