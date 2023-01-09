import * as React from 'react';
import { Head } from '@react-email/head';
import { Html } from '@react-email/html';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import Layout from './components/layout';

export default function ConfirmEmail() {
  return (
    <Html>
      <Head />
      <Preview>Your confirmation code is below — enter it in the browser window where you've started signing up for Infisical.</Preview>
      <Layout>
        <Text style={h1}>
          Confirm your email address
        </Text>
        <Text style={text}>
          Your confirmation code is below — enter it in the browser window where you've started signing up for Infisical.
        </Text>
        <Section style={codeContainer}>
          <Text style={code}>144833</Text>
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

const codeContainer = {
  background: '#0e1014',
  borderRadius: '5px',
  margin: '16px auto 14px',
  verticalAlign: 'middle',
  width: '280px',
};

const code = {
  fontFamily,
  color: '#e5e7eb',
  display: 'inline-block',
  fontSize: '32px',
  fontWeight: 700,
  letterSpacing: '6px',
  lineHeight: '40px',
  paddingBottom: '8px',
  paddingTop: '8px',
  margin: '0 auto',
  width: '100%',
  textAlign: 'center',
};