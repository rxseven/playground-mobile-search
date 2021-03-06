// @flow
// Module dependencies
import * as React from 'react';

import Layout from 'components/common/Layout';
import { Body, Document, Head, Title } from 'components/common/Page';

// Styles
import './styles.scss';

// Types
type Return = React.Node;

// Component
const Profile = (): Return => (
  <Document>
    <Head>
      <Title>Profile | Search Flow</Title>
    </Head>
    <Body>
      <Layout>
        <div styleName="wrapper">
          <h2 styleName="headline">Profile</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industrys standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Layout>
    </Body>
  </Document>
);

// Module exports
export default Profile;
