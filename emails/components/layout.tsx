import { Container } from '@react-email/container';
import { Hr } from '@react-email/hr';
import { Img } from '@react-email/img';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email(children) {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';
  
  return (
    <Section style={main}>
      <Container style={container}>
        <Img
          src={`${baseUrl}/static/logo.png`}
          width="100"
          height="75"
          alt="Infisical"
          style={logo}
        />
        {children}
        <Text style={text}>
          Infisical is a simple end-to-end encrypted solution that enables teams to sync and manage their environment variables.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          44 Montgomery St, San Francisco, CA 94104
        </Text>
      </Container>
    </Section>
  );
}

const fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

const main = {
  backgroundColor: '#0e1014',
  margin: '0 auto',
};

const container = {
  backgroundColor: '#1a1c20',
  border: '1px solid #374151',
  borderRadius: '5px',
  margin: '40px auto',
  padding: '20px 20px 10px',
  width: '465px',
};

const logo = {
  margin: '0 auto',
};

const text = {
  fontFamily,
  color: '#e5e7eb',
  fontSize: '14px',
  lineHeight: '24px',
};

const hr = {
  border: 'none',
  borderTop: '1px solid #374151',
  margin: '26px 0',
  width: '100%',
};

const footer = {
  fontFamily,
  color: '#9ca3af',
  textAlign: 'center' as const,
  fontSize: '12px',
  lineHeight: '24px',
};
