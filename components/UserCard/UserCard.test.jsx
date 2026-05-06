import React from 'react';
import renderer from 'react-test-renderer';
import UserCard from './UserCard';

// Sample props
const sampleProps = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  rol: 'Admin',
  avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
};

describe('UserCard', () => {
  it('matches snapshot', () => {
    const tree = renderer.create(<UserCard {...sampleProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
