import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function Intro() {
  const { globalState } = useSelector((state) => state);

  const [admin, setAdmin] = useState([]);
  useEffect(() => {
    const users = globalState.mocks.filter((m) => m.admin);

    setAdmin(users[0]);
  }, [globalState.mocks]);

  return (
    <div className='container-lg p-2'>
      <Card className=''>
        <Card.Header>About CEO</Card.Header>
        <Card.Img
          variant='top'
          className='w-25 p-2 fluid
          rounded'
          src={admin.avatar}
        />
        <Card.Body>
          <Card.Title>{admin.first_name + ' ' + admin.last_name}</Card.Title>
          <Card.Text>CEO</Card.Text>

          <Card.Text>{admin.email}</Card.Text>
          <Card.Text>
            <strong>Motto</strong>: Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Amet quaerat temporibus doloribus delectus
            deleniti aut optio aliquid, magnam asperiores minima, vitae sapiente
            natus, corporis ducimus? Nostrum dolorum soluta placeat veritatis.
          </Card.Text>
          <Card.Text>
            <strong>Vison for company</strong>: Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Amet quaerat temporibus doloribus
            delectus deleniti aut optio aliquid, magnam asperiores minima, vitae
            sapiente natus, corporis ducimus? Nostrum dolorum soluta placeat
            veritatis.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
//9866314608
