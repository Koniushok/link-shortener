// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { AccountCircle } from 'styled-icons/material/AccountCircle';
import { ChartBar } from 'styled-icons/fa-regular/ChartBar';
import { ExternalLink } from 'styled-icons/feather/ExternalLink';
import { Users } from 'styled-icons/fa-solid/Users';
import { UserTie } from 'styled-icons/fa-solid/UserTie';
import { type Profile as ProfileData } from '../../types';
import Loader from '../../components/loader';
import { fetchProfileRequest } from '../../actions/fetchProfile';

const Table = styled.table`
  display: inline-flex;
  flex-wrap: wrap;
  font-size: 18px;
  text-align: left;
  td {
    display: inline-block;
    padding: 0.75rem;
  }
  th {
    display: inline-block;
    padding: 0.75rem 0.5rem 0.75rem 0;
    white-space: nowrap;
    width: 90px;
  }
  svg {
    width: 20px;
  }
`;
const Title = styled.div`
  margin-top: 30px;
  svg {
    width: 150px;
  }
  h2 {
    margin-top: 0;
  }
`;
const ProfileWrapper = styled.section`
  text-align: center;
  padding: 5px;
  margin: 0 auto;
`;
type Props = {
  profileData: ?ProfileData,
  loading: boolean,
  fetchProfileRequest: typeof fetchProfileRequest,
};
class Profile extends Component<Props> {
  componentDidMount() {
    this.props.fetchProfileRequest();
  }

  render() {
    const { profileData, loading } = this.props;
    return (
      <ProfileWrapper>
        <Title>
          <AccountCircle />
          {profileData && <h2>{profileData.loginName}</h2>}
        </Title>
        {loading && <Loader />}
        {profileData && (
          <Table>
            <tbody>
              <tr>
                <td>
                  <Users />
                </td>
                <th>Name</th>
                <td>{profileData.name}</td>
              </tr>
              <tr>
                <td>
                  <UserTie />
                </td>
                <th>Surname</th>
                <td>{profileData.surname}</td>
              </tr>
              <tr>
                <td>
                  <ExternalLink />
                </td>
                <th>Link Count</th>
                <td>{profileData.linkCount}</td>
              </tr>
              <tr>
                <td>
                  <ChartBar />
                </td>
                <th>Total clinks</th>
                <td>{profileData.totalClinks}</td>
              </tr>
            </tbody>
          </Table>
        )}
      </ProfileWrapper>
    );
  }
}

export default Profile;
