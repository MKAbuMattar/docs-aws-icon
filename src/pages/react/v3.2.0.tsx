import type { NextPage } from 'next';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

import AWSReactIconsData from '@/data/aws-react-icons.data.3.2.0.json';

const DynamicMain = dynamic(() => import('@/components/Pages/ReactPage/v3.2.0'), {
  loading: () => <Loader />,
  
});

import {
  Card,
  CardInfo,
  CardTitle,
  Container,
  Section,
  SectionTitle,
} from '@/assets/style/style';

const ReactPage: NextPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Container>
          <Section>
            <SectionTitle>AWS React Icons</SectionTitle>

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
            <DynamicMain icons={AWSReactIconsData.data} />
          </Section>
        </Container>
      </Suspense>
    </>
  );
};

export default ReactPage;
