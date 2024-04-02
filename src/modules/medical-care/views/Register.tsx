import { useNavigate } from 'react-router-dom';
import { SyntheticEvent, useRef } from 'react';
import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { RegisterControl } from 'modules/core/components';
import { useRegistrySubmit } from 'modules/core/hooks';
import { createMedicalCare } from '../services';

export function MedicalCareRegister() {
  const navigate = useNavigate();
  const dummy = useRef({
    name: 'Consulta Cardiologista',
    code: 'SA001',
    durationInMinutes: '60',
    // symptoms: 'Dores constante no peito e falta de ar',
    // diagnosis: 'Doença arterial periférica',
    // prescription: 'Repouso. Utilizar xxxx 200mg 2x ao dia ',
  });

  const { success, setSuccess, error, setError, isLoading, handleSubmit } = useRegistrySubmit(
    dummy.current,
    createMedicalCare,
  );

  function handleClick(event: SyntheticEvent): void {
    event.preventDefault();
    navigate('/medical-care/list');
  }

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="heartbeat" />
        Medical Care Register
      </Header>
      <Divider section horizontal hidden>
        Service data
      </Divider>
      <Form onSubmit={handleSubmit} loading={isLoading} success={success} error={error}>
        <Form.Group>
          <Form.Input
            name="name"
            icon="users"
            iconPosition="left"
            label="Name *"
            width={9}
            placeholder={`Ex: ${dummy.current.name}`}
            defaultValue={dummy.current.name}
            onChange={(event) => (dummy.current.name = event.target.value)}
          />{' '}
          <Form.Input
            name="code"
            icon="barcode"
            iconPosition="left"
            label="Code *"
            width={4}
            placeholder={`Ex: ${dummy.current.code}`}
            defaultValue={dummy.current.code}
            onChange={(event) => (dummy.current.code = event.target.value)}
          />
          <Form.Input
            name="durationInMinutes"
            icon="time"
            iconPosition="left"
            label="Duration in Minutes *"
            width={3}
            placeholder={`Ex: ${dummy.current.durationInMinutes}`}
            defaultValue={dummy.current.durationInMinutes}
            onChange={(event) => (dummy.current.durationInMinutes = event.target.value)}
          />
        </Form.Group>
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
          name="diagnosis"
          icon="time"
          iconPosition="left"
          label="Diagnosis"
          style={{ minHeight: 100 }}
          placeholder={`Ex: ${dummy.current.diagnosis}`}
          defaultValue={dummy.current.diagnosis}
          onChange={(event) => (dummy.current.diagnosis = event.target.value)}
        />
        <Form.TextArea
          name="prescription"
          icon="time"
          iconPosition="left"
          label="Prescription"
          style={{ minHeight: 100 }}
          placeholder={`Ex: ${dummy.current.prescription}`}
          defaultValue={dummy.current.prescription}
          onChange={(event) => (dummy.current.prescription = event.target.value)}
        /> */}
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
