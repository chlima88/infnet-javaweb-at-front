import { SyntheticEvent } from 'react';
import { Form, Icon, Message } from 'semantic-ui-react';

type Props = {
  handleClick: (event: SyntheticEvent) => void;
  handleClose?: () => void;
  errMsg?: string;
};

export function RegisterControl(props: Props) {
  return (
    <>
      <Message
        success
        onDismiss={props.handleClose}
        header="Registration Completed"
        content="It can be now be assigned to schedules."
      />
      <Message
        error
        onDismiss={props.handleClose}
        header="Something got wrong!"
        content={
          props.errMsg
            ? `Error: ${props.errMsg}`
            : 'Review the information above. If the problem persists and try again later.'
        }
      />
      <Form.Group>
        <Form.Button color="teal" type="submit">
          <Icon name="save" />
          Save
        </Form.Button>
        <Form.Button onClick={props.handleClick}>
          <Icon name="unordered list" />
          Go to List
        </Form.Button>
      </Form.Group>
    </>
  );
}
