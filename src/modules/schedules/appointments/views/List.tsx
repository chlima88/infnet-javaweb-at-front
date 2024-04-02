import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable } from 'modules/core/components';
import { useScheduleListData } from 'modules/core/hooks';
import { getAppointments } from '../services';

export function AppointmentList() {
  const { schedules: appointments, tableHeaders, isLoading } = useScheduleListData(getAppointments);

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="stethoscope" />
        Appointments List
      </Header>
      <AppTable data={appointments} isLoading={isLoading} headers={tableHeaders} idField="scheduleId" />
    </Container>
  );
}
