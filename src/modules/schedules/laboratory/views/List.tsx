import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable } from 'modules/core/components';
import { useScheduleListData } from 'modules/core/hooks';
import { getLaboratories } from '../services';

export function LaboratoryList() {
  const { schedules: laboratories, tableHeaders, isLoading } = useScheduleListData(getLaboratories);

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="lab" />
        Laboratory List
      </Header>
      <AppTable data={laboratories} isLoading={isLoading} headers={tableHeaders} idField="scheduleId" />
    </Container>
  );
}
