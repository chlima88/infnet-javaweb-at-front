import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Label, Loader, Message, Table } from 'semantic-ui-react';
import { TableTag } from './TableTag';

type LabelKey = {
  key: string | string[];
  label: string;
  tag: boolean;
};

export function AppTable(props: { isLoading: boolean; idField: string; headers: LabelKey[]; data: any[] | null }) {
  const navigate = useNavigate();
  const location = useLocation().pathname.split('/')[1];

  function getKeys(arr: any[] | any, obj: any) {
    if (typeof arr != 'object') return obj[arr];
    let val;
    for (let i = 0; i < arr.length; i++) {
      if (i == 0) val = obj;
      val = val[arr[i]];
    }
    return val;
  }

  return (
    <>
      <Table compact textAlign="center">
        <Table.Header>
          <Table.Row>
            {props.headers?.map((header) => (
              <Table.HeaderCell key={header.label}>{header.label ?? header.key.toString()}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        {!props.isLoading && (
          <Table.Body className="cursor-pointer">
            {props.data?.map((item) => (
              <Table.Row
                key={item[props.idField]}
                onClick={() =>
                  item.type
                    ? navigate(`/${location}/${item.type}/${item[props.idField]}`)
                    : navigate(`/${location}/${item[props.idField]}`)
                }
              >
                {props.headers?.map((header) => (
                  <Table.Cell key={item[header.label]}>
                    {header.key == 'type' ? (
                      <TableTag data={item['type']} />
                    ) : header.tag ? (
                      <Label>{getKeys(header.key, item)}</Label>
                    ) : (
                      getKeys(header.key, item)
                    )}
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        )}
      </Table>
      {props.isLoading && (
        <Loader active inline="centered">
          Loading please wait
        </Loader>
      )}
      {!props.isLoading && !props.data?.length && (
        <Message warning>
          No data. Click{' '}
          <Link to={`/${location}/create`}>
            <strong>here</strong>
          </Link>{' '}
          to create a new registry.
        </Message>
      )}
    </>
  );
}
