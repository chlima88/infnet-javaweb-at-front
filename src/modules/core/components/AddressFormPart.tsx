import { Divider, Form } from 'semantic-ui-react';

type Address = {
  street: string;
  number: string;
  cep: string;
  district: string;
  city: string;
  state: string;
};

export function AddressFormPart(props: { address: Address | null }) {
  const { address } = props;
  const dummy = {
    street: 'R. São José',
    number: '506',
    cep: '20010-020',
    district: 'Centro',
    city: 'Rio de Janeiro',
    state: 'RJ',
  };

  return (
    <>
      <Divider section hidden horizontal>
        Address
      </Divider>
      <Form.Group>
        <Form.Input
          name="street"
          label="Street"
          placeholder={`Ex: ${dummy.street}`}
          defaultValue={address?.street}
          onChange={(event) => (address!.street = event.target.value)}
          width={11}
        />
        <Form.Input
          name="number"
          label="Number"
          placeholder={`Ex: ${dummy.number}`}
          defaultValue={address?.number}
          onChange={(event) => (address!.number = event.target.value)}
          width={2}
        />
        <Form.Input
          name="cep"
          label="ZIP Code *"
          placeholder={`Ex: ${dummy.cep}`}
          defaultValue={address?.cep}
          onChange={(event) => (address!.cep = event.target.value)}
          width={3}
        />
      </Form.Group>
      <Form.Group>
        <Form.Input
          name="district"
          label="District"
          placeholder={`Ex: ${dummy.district}`}
          defaultValue={address?.district}
          onChange={(event) => (address!.district = event.target.value)}
          width={6}
        />
        <Form.Input
          name="city"
          label="City"
          placeholder={`Ex: ${dummy.city}`}
          defaultValue={address?.city}
          onChange={(event) => (address!.city = event.target.value)}
          width={6}
        />
        <Form.Input
          name="state"
          label="State"
          placeholder={`Ex: ${dummy.state}`}
          defaultValue={address?.state}
          onChange={(event) => (address!.state = event.target.value)}
          width={4}
        />
      </Form.Group>
    </>
  );
}
