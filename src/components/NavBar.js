import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../store';
export default function NavigationBar() {
  const dispatch = useDispatch();

  const { globalState } = useSelector((state) => state);

  return (
    <>
      {globalState.valid ? (
        <Navbar
          className='container-lg'
          collapseOnSelect
          expand='lg'
          bg='primary'
          variant='dark'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse
            id='responsive-navbar-nav'
            className='text-warning justify-content-between'>
            {globalState.admin ? (
              <>
                <Nav className=''>
                  <NavLink
                    style={({ isActive }) => ({
                      margin: 3,
                      padding: 1,
                      textDecoration: 'none',
                      color: isActive ? 'pink' : 'yellow',
                    })}
                    to='/'>
                    Home
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                      margin: 3,
                      padding: 1,
                      textDecoration: 'none',
                      color: isActive ? 'pink' : 'yellow',
                    })}
                    to='/users'>
                    Users
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                      margin: 3,
                      padding: 1,
                      textDecoration: 'none',
                      color: isActive ? 'pink' : 'yellow',
                    })}
                    to='/schedule'>
                    Event Calender
                  </NavLink>
                </Nav>
                <Nav>
                  <button
                    className='ms-auto btn btn-danger'
                    onClick={() => dispatch(logout())}>
                    Logout
                  </button>
                </Nav>
              </>
            ) : (
              <>
                <Nav>
                  <NavLink
                    style={({ isActive }) => ({
                      margin: 3,
                      marginRight: 5,
                      padding: 1,
                      textDecoration: 'none',
                      color: isActive ? 'pink' : 'yellow',
                    })}
                    to='/'>
                    User Info
                  </NavLink>
                  <NavLink
                    style={({ isActive }) => ({
                      margin: 3,
                      marginRight: 5,
                      padding: 1,
                      textDecoration: 'none',
                      color: isActive ? 'pink' : 'yellow',
                    })}
                    to='/timeline'>
                    Monthly activity
                  </NavLink>
                </Nav>
                <Nav>
                  <button
                    className='ms-auto btn btn-danger'
                    onClick={() => dispatch(logout())}>
                    Logout
                  </button>
                </Nav>
              </>
            )}
          </Navbar.Collapse>
        </Navbar>
      ) : (
        <></>
      )}
    </>
  );
}
