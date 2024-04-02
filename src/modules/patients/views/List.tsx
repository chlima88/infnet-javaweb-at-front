import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable as Table } from 'modules/core/components';
import { useFetchData } from 'modules/core/hooks';
import { getPatients } from '../services';

export function PatientList() {
  const { data: patients, isLoading } = useFetchData(getPatients);

  const tableHeaders = [
    { label: 'ID', key: 'patientId', tag: false },
    { label: 'Name', key: 'name', tag: true },
    { label: 'Birthday', key: 'birthday', tag: false },
    { label: 'Insurance', key: 'insurance', tag: true },
  ];

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="user" />
        Patient List
      </Header>
      <Table data={patients} isLoading={isLoading} headers={tableHeaders} idField="patientId" />
    </Container>
  );
}
