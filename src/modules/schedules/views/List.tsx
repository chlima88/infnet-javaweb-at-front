import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable } from 'modules/core/components';
import { useScheduleListData } from 'modules/core/hooks';
import { getSchedules } from '../services';

export function ScheduleList() {
  const { schedules, tableHeaders, isLoading } = useScheduleListData(getSchedules);
  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="stethoscope" />
        Schedules List
      </Header>
      <AppTable data={schedules} isLoading={isLoading} headers={tableHeaders} idField="scheduleId" />
    </Container>
  );
}
