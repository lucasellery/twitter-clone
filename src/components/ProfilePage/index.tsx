import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        {/* <EditButton outlined>Editar perfil</EditButton> */}
        <h1>Lucas Ellery</h1>
        <h2>@llucasellery</h2>

        <p>Developer at @somapay</p>

        <ul>
          <li>
            <LocationIcon />
            Fortaleza, CE
          </li>

          <li>
            <CakeIcon />
            Nascido(a) em 29 de maio de 2000
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>100</strong>
          </span>

          <span>
            <strong>200 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>
    </Container>
  );
};

export default ProfilePage;
