import { Container, Divider, Form, Header, Icon } from 'semantic-ui-react';

import { ViewControl } from 'modules/core/components';
import { useViewData } from 'modules/core/hooks';
import { getMedicalCare, deleteMedicalCare } from '../services';

export function MedicalCareView() {
  const {
    data: medicalCare,
    success,
    error,
    isLoading,
    handleClickDelete,
    handleClick,
  } = useViewData(getMedicalCare, deleteMedicalCare, '/medical-care/list');

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="heartbeat" />
        Medical Care View
      </Header>
      <Divider section horizontal hidden>
        Service data
      </Divider>
      <Form loading={isLoading} success={success} error={error}>
        <Form.Group>
          <Form.Input name="id" width={1} label="ID" value={medicalCare?.medicalCareId} />
          <Form.Input
            name="name"
            icon="users"
            iconPosition="left"
            label="Name *"
            width={8}
            placeholder={`Ex: ${medicalCare?.name}`}
            value={medicalCare?.name}
          />
          <Form.Input
            name="code"
            icon="barcode"
            iconPosition="left"
            label="Code *"
            width={4}
            placeholder={`Ex: ${medicalCare?.code}`}
            value={medicalCare?.code}
          />
          <Form.Input
            name="durationInMinutes"
            icon="time"
            iconPosition="left"
            label="Duration in Minutes *"
            width={3}
            placeholder={`Ex: ${medicalCare?.durationInMinutes}`}
            value={medicalCare?.durationInMinutes}
          />
        </Form.Group>
        <ViewControl handleClick={handleClick} handleClickDelete={handleClickDelete} />
      </Form>
    </Container>
  );
}
