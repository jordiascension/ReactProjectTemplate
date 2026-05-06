import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

function UserCard({ name, email, rol, avatarUrl }) {
  return (
    <Card sx={{ maxWidth: 320 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar alt={name} src={avatarUrl} sx={{ width: 56, height: 56 }} />
          <Stack>
            <Typography variant="h6">{name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {email}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {rol}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  rol: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string,
};

UserCard.defaultProps = {
  avatarUrl: '',
};

export default UserCard;
