import { SyntheticEvent } from 'react';
import { Form, Icon, Message } from 'semantic-ui-react';

type Props = {
  handleClickDelete: (event: SyntheticEvent) => void;
  handleClick: (event: SyntheticEvent) => void;
  handleClose?: () => void;
  errMsg?: string;
};

export function ViewControl(props: Props) {
  return (
    <>
      <Message success onDismiss={props.handleClose} header="Successfully Deleted" />
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
        <Form.Button color="red" onClick={props.handleClickDelete}>
          <Icon name="trash alternate" />
          Delete
        </Form.Button>
        <Form.Button onClick={props.handleClick}>
          <Icon name="unordered list" />
          Go to list
        </Form.Button>
      </Form.Group>
    </>
  );
}
