import type { NextPage } from 'next';

import Navbar from '@/components/Navbar';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

import {
  Container,
  Section,
  SectionTitle,
  SectionSubtitle,
  SectionDescription,
  SectionTxt,
  Card,
  CardInfo,
  CardTitle,
} from '@/style/style';

const HomePage: NextPage = () => {
  return (
    <>
      <Navbar />

      <Container>
        <Section>
          <SectionTitle>AWS Icons</SectionTitle>
          <SectionDescription>
            Open-source icon library of AWS services.
          </SectionDescription>
          <SectionTxt>
            AWS Icons is a free icon library of AWS services. It contains icons
            of all AWS services, and it is constantly updated with new services.
          </SectionTxt>
          <SectionSubtitle>How to use</SectionSubtitle>
          <SectionTxt>
            You download the package and use the icons in your projects. or you
            can use the CDN.
          </SectionTxt>

          <Card>
            <CardInfo>
              <CardTitle>Install package / AWS Icons</CardTitle>
            </CardInfo>

            <SyntaxHighlighter language={'Bash'}>
              {`#npm
npm install --save aws-icons

#yarn
yarn add aws-icons

#pnpm
pnpm add aws-icons`}
            </SyntaxHighlighter>
          </Card>

          <Card>
            <CardInfo>
              <CardTitle>Install package / CDN</CardTitle>
            </CardInfo>

            <SyntaxHighlighter language={'HTML'}>
              {`<!-- unpkg -->
<img
  src="https://unpkg.com/aws-icons@latest/icons/ICON_SVG_NAME.svg"
  alt="AWS Icons"
/>

<!-- jsdelivr -->
<img
  src="https://cdn.jsdelivr.net/npm/aws-icons@latest/icons/ICON_SVG_NAME.svg"
  alt="AWS Icons"
/>`}
            </SyntaxHighlighter>
          </Card>
        </Section>
        <Section>
          <SectionTitle>AWS React Icons</SectionTitle>
          <SectionDescription>
            Open-source icon library of AWS services for React.
          </SectionDescription>
          <SectionTxt>
            AWS React Icons is a free icon library of AWS services for React. It
            contains icons of all AWS services, and it is constantly updated
            with new services.
          </SectionTxt>
          <SectionSubtitle>How to use</SectionSubtitle>
          <SectionTxt>
            You download the package and use the icons in your projects.
          </SectionTxt>

          <Card>
            <CardInfo>
              <CardTitle>Install package / AWS React Icons</CardTitle>
            </CardInfo>

            <SyntaxHighlighter language={'Bash'}>
              {`#npm
npm install --save aws-react-icons

#yarn
yarn add aws-react-icons

#pnpm
pnpm add aws-react-icons`}
            </SyntaxHighlighter>
          </Card>

          <Card>
            <CardInfo>
              <CardTitle>Usage</CardTitle>
            </CardInfo>

            <SyntaxHighlighter language={'TypeScript'}>
              {`import ArchitectureServiceAmazonEC2 from 'aws-react-icons/icons/ArchitectureServiceAmazonEC2';

const App = () => {
  return (
    <div>
      <ArchitectureServiceAmazonEC2 />
    </div>
  );

export default App;`}
            </SyntaxHighlighter>
          </Card>
        </Section>
      </Container>
    </>
  );
};

export default HomePage;
