import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable } from 'modules/core/components';
import { useFetchData } from 'modules/core/hooks';
import { getMedicalCares } from '../services';

export function MedicalCareList() {
  const { data: medicalCares, isLoading } = useFetchData(getMedicalCares);

  const tableHeaders = [
    { label: 'ID', key: 'medicalCareId', tag: false },
    { label: 'Name', key: 'name', tag: true },
    { label: 'Code', key: 'code', tag: true },
    { label: 'Duration in Minutes', key: 'durationInMinutes', tag: false },
  ];

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="heartbeat" />
        Medical Care List
      </Header>
      <AppTable data={medicalCares} isLoading={isLoading} headers={tableHeaders} idField="medicalCareId" />
    </Container>
  );
}
