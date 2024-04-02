import { Container, Header, Icon } from 'semantic-ui-react';

import { AppTable } from 'modules/core/components';
import { useScheduleListData } from 'modules/core/hooks';
import { getImageDiagnostics } from '../services';

export function ImageDiagnosticList() {
  const { schedules: appointments, tableHeaders, isLoading } = useScheduleListData(getImageDiagnostics);

  return (
    <Container textAlign="left">
      <Header as="h1" color="teal">
        <Icon name="dna" />
        Image Diagnostics List
      </Header>
      <AppTable data={appointments} isLoading={isLoading} headers={tableHeaders} idField="scheduleId" />
    </Container>
  );
}
