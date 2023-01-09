import { Button } from '@react-email/button';
import { Container } from '@react-email/container';
import { Head } from '@react-email/head';
import { Hr } from '@react-email/hr';
import { Html } from '@react-email/html';
import { Img } from '@react-email/img';
import { Link } from '@react-email/link';
import { Preview } from '@react-email/preview';
import { Section } from '@react-email/section';
import { Text } from '@react-email/text';
import * as React from 'react';

export default function Email() {
  const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : '';
  
  return (
    <Html>
      <Head />
      <Preview>Zeno (zeno@resend.com) has invited you to their Infisical team.</Preview>
      <Section style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/static/logo.png`}
            width="100"
            height="75"
            alt="Infisical"
            style={logo}
          />
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
          <Text style={text}>
            Infisical is a simple end-to-end encrypted solution that enables teams to sync and manage their environment variables.
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            44 Montgomery St, San Francisco, CA 94104
          </Text>
        </Container>
      </Section>
    </Html>
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

const h1 = {
  fontFamily,
  color: '#e5e7eb',
  fontSize: '24px',
  fontWeight: 'normal',
  textAlign: 'center' as const,
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
  textAlign: 'center' as const,
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
  textAlign: 'center' as const,
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
