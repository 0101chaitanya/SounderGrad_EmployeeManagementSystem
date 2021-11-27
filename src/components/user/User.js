import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const User = () => {
  const { globalState } = useSelector((state) => state);

  const [member, setMember] = useState([]);
  useEffect(() => {
    const user = globalState.mocks.filter((m) => m.email === globalState.email);

    setMember(user[0]);
  }, [globalState]);

  return (
    <div className='container-lg p-2'>
      <Card className=''>
        <Card.Header>Employee details</Card.Header>

        <Card.Img
          variant='top'
          className='w-25 p-2 fluid
          rounded'
          src={member.avatar}
        />
        <Card.Body>
          <Card.Title>{member.first_name + ' ' + member.last_name}</Card.Title>
          <Card.Text>Associate Developer</Card.Text>

          <Card.Text>{member.email}</Card.Text>
          <Card.Text>
            <strong>Joined</strong>:2013
          </Card.Text>
          <Card.Text>
            <strong>Personal Motto</strong>: Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Amet quaerat temporibus doloribus
            delectus deleniti aut optio aliquid, magnam asperiores minima, vitae
            sapiente natus, corporis ducimus? Nostrum dolorum soluta placeat
            veritatis.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default User;
