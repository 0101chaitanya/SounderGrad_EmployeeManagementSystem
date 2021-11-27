import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'react-bootstrap/Image';
import { v4 } from 'uuid';
export default function Users() {
  const { globalState } = useSelector((state) => state);

  const [members, setMembers] = useState([]);

  const [checkBoxes, setCheckBoxes] = useState({
    Ferguson: true,
    Funke: false,
    Fields: false,
    Edwards: true,
    Howell: true,
  });

  const [selectBoxes, setSelectBoxes] = useState({
    Ferguson: 3,
    Funke: 3,
    Fields: 2,
    Edwards: 1,
    Howell: 1,
  });

  useEffect(() => {
    const users = globalState.mocks.filter((m) => !m.admin);

    setMembers(users);
  }, [globalState.mocks]);

  return (
    <div className='container-lg table-responsive'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th className='img-fluid' scope='col'>
              Avatar
            </th>
            <th scope='col'>Name</th>
            <th className='d-none d-xl-inline' scope='col'>
              Email
            </th>
            <th scope='col'>Access level</th>
            <th scope='col'>Currently involved project</th>
            <th scope='col'>Performance Rating</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, i) => {
            return (
              <tr key={i}>
                <th scope='row'>{member.id - 1}</th>
                <td>
                  <Image
                    src={member.avatar}
                    className='img-fluid'
                    rounded={true}
                    alt='avatar'
                  />
                </td>
                <td>
                  {member.last_name} {member.first_name}
                </td>
                <td className='d-none d-xl-inline'>{member.email}</td>
                <td>
                  <select
                    value={selectBoxes[member.last_name]}
                    name={member.last_name}
                    onChange={({ target }) =>
                      setSelectBoxes({
                        ...selectBoxes,
                        [target.name]: target.value,
                      })
                    }>
                    <option value={1}>Level 1</option>
                    <option value={2}>Level 2</option>
                    <option value={3}>Level 3</option>
                  </select>
                </td>
                <td>
                  <input
                    type='checkbox'
                    checked={checkBoxes[member.last_name] ? true : false}
                    onChange={({ target }) =>
                      setCheckBoxes({
                        ...checkBoxes,
                        [target.name]: target.checked,
                      })
                    }
                    name={member.last_name}
                  />
                </td>
                <td>
                  {Array(member.score)
                    .fill(1)
                    .map((item) => (
                      <i key={v4()}>&#11088;</i>
                    ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
