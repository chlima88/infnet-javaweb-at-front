import { Form } from 'semantic-ui-react';
import { Schedule } from 'modules/core/types';

export function ScheduleFormPart(props: { schedule: Schedule }) {
  return (
    <>
      <Form.Group>
        <Form.Input name="id" width={1} label="ID" value={props.schedule?.scheduleId} />
        <Form.Input
          type="datetime-local"
          width={15}
          step={60 * 30}
          label="Date and Time"
          value={props.schedule?.datetime}
        />
      </Form.Group>
      <Form.Input name="patient" label="Patient" value={props.schedule?.patient.name} />
      <Form.Input name="doctor" label="Doctor" value={props.schedule?.doctor.name} />
      <Form.Input name="medical-care" label="Medical Care" value={props.schedule?.medicalCare.name} />
    </>
  );
}
