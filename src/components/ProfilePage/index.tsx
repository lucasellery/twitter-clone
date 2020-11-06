import React from 'react';
import Feed from '../Feed';
import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>
        <h1>Lucas Ellery</h1>
        <h2>@llucasellery</h2>

        <p>
          Developer at <a href="https://somapay.com.br/">@somapay</a>
        </p>

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
      <Feed />
    </Container>
  );
};

export default ProfilePage;
