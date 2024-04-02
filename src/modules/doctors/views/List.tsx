import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable as Table } from 'modules/core/components';
import { useFetchData } from 'modules/core/hooks';
import { getDoctors } from '../services';

export function DoctorList() {
  const { data: doctors, isLoading } = useFetchData(getDoctors);

  const tableHeaders = [
    { label: 'ID', key: 'doctorId', tag: false },
    { label: 'Name', key: 'name', tag: true },
    { label: 'CRM', key: 'crm', tag: false },
    { label: 'Specialty', key: 'specialty', tag: true },
  ];

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="doctor" />
        Doctor List
      </Header>
      <Table data={doctors} isLoading={isLoading} headers={tableHeaders} idField="doctorId" />
    </Container>
  );
}
