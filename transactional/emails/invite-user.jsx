import * as React from 'react';
import { Button } from '@react-email/button';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import Layout from './components/layout';

export default function InviteUser() {
  return (
    <Html>
      <Head />
      <Preview>Zeno (zeno@resend.com) has invited you to their Infisical team.</Preview>
      <Layout>
        <Text style={h1}>
          Join the Resend team on Infisical
        </Text>
        <Text style={text}>
          <strong>Zeno (zeno@resend.com)</strong> has invited you to their Infisical team.
        </Text>
        <Section style={btnContainer}>
          <Button
            pX={20}
            pY={12}
            style={btn}
            href="https://infisical.com"
          >
            Join the team
          </Button>
        </Section>
      </Layout>
    </Html>
  );
}

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const h1 = {
  fontFamily,
  color: '#e5e7eb',
  fontSize: '24px',
  fontWeight: 'normal',
  textAlign: 'center',
  margin: '30px 0',
  padding: '0',
};

const text = {
  fontFamily,
  color: '#e5e7eb',
  fontSize: '14px',
  lineHeight: '24px',
};

const btnContainer = {
  textAlign: 'center',
};

const btn = {
  fontFamily,
  backgroundColor: '#badc58',
  borderRadius: '8px',
  color: '#000000',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '50px',
  textDecoration: 'none',
  textAlign: 'center',
};