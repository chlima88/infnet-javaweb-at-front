import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useRef } from 'react';
import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { AddressFormPart, RegisterControl } from 'modules/core/components';
import { useRegistrySubmit } from 'modules/core/hooks';
import { createPatient } from '../services';
export function PatientRegister() {
  const navigate = useNavigate();
  const dummy = useRef({
    name: 'Charles Lima',
    birthday: '2000-01-01',
    contact: 'cl@infnet.br',
    document: '12345678900',
    insurance: true,
    address: {
      street: 'R. São José',
      number: '506',
      cep: '20010-020',
      district: 'Centro',
      city: 'Rio de Janeiro',
      state: 'RJ',
    },
  });

  const { success, setSuccess, error, errorMsg, setError, isLoading, handleSubmit } = useRegistrySubmit(
    dummy.current,
    createPatient,
  );

  function handleClick(event: SyntheticEvent): void {
    event.preventDefault();
    navigate('/patients/list');
  }

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="user" />
        Patient Register
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
          placeholder={`Ex: ${dummy.current.birthday}`}
          defaultValue={dummy.current.birthday}
          onChange={(event) => (dummy.current.birthday = event.target.value)}
          type="date"
        />
        <Form.Input
          name="contact"
          icon="mail"
          iconPosition="left"
          label="Contact"
          placeholder={`Ex: ${dummy.current.contact}`}
          defaultValue={dummy.current.contact}
          onChange={(event) => (dummy.current.contact = event.target.value)}
        />
        <Form.Input
          name="document"
          label="Document"
          placeholder={`Ex: ${dummy.current.document}`}
          defaultValue={dummy.current.document}
          onChange={(event) => (dummy.current.document = event.target.value)}
        />
        <Form.Checkbox
          name="insurance"
          label="The patient has our health insurance?"
          defaultChecked={dummy.current.insurance}
          onChange={(_, data) => (dummy.current.insurance = data.checked as boolean)}
        />

        <AddressFormPart address={dummy.current.address} />
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
