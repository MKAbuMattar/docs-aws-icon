import type { NextPage } from 'next';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

import AWSIconsData from '@/data/aws-icons.data.1.3.0.json';

const DynamicMain = dynamic(() => import('@/components/IconsPageMain_1.3.0'), {
  loading: () => <Loader />,
  suspense: true,
});

import {
  Card,
  CardInfo,
  CardTitle,
  Container,
  Section,
  SectionTitle,
} from '@/assets/style/style';

const IconsPage: NextPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Container>
          <Section>
            <SectionTitle>AWS Icons</SectionTitle>

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

            <DynamicMain icons={AWSIconsData.data} />
          </Section>
        </Container>
      </Suspense>
    </>
  );
};

export default IconsPage;
