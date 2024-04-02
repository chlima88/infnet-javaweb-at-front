import { Link } from 'react-router-dom';
import { Menu, Container, Dropdown, Icon } from 'semantic-ui-react';

export function Header() {
  return (
    <Menu fixed="top">
      <Container>
        <Menu.Item as="a" header>
          <Icon size="big" color="teal" name="react" />
          HealU
        </Menu.Item>
        <Menu.Item as={Link} to="/home">
          Home
        </Menu.Item>
        <Dropdown item text="Patients">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/patients/create">
              Create
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/patients/list">
              List
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Doctors">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/doctors/create">
              Create
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/doctors/list">
              List
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Medical Care">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/medical-care/create">
              Create
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/medical-care/list">
              List
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Schedules">
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/schedules/create">
              Create
            </Dropdown.Item>
            <Dropdown item text="List">
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/schedules/list">
                  All Schedules
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/schedules/appointment/list">
                  Appointments
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/schedules/laboratory/list">
                  Laboratory
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/schedules/image-diagnostic/list">
                  Image Diagnostics
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Dropdown.Menu>
        </Dropdown>
        <Menu.Menu position="right">
          <Menu.Item as="a">Log In</Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
}
