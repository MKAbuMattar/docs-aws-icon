import type { NextPage } from 'next';
import { Suspense } from 'react';

import Loader from '@/components/Loader';
import Navbar from '@/components/Navbar';

import { Container, Section, SectionTitle } from '@/assets/style/style';

import {
  VersionGrid,
  VersionCard,
  VersionCardHeader,
  VersionCardTitle,
  VersionCardSubtitle,
  VersionCardFooter,
  VersionTag,
  VersionLink,
} from '@/styles/pages/versions/styles';

// Version data with metadata
const ICON_VERSIONS = [
  {
    version: '3.2.0',
    isLatest: true,
    releaseDate: 'Sep 14, 2025',
  },
  {
    version: '3.0.0',
    isLatest: false,
    releaseDate: 'Jun 4, 2025',
  },
  {
    version: '2.1.0',
    isLatest: false,
    releaseDate: 'Dec 29, 2023',
  },
  {
    version: '1.3.0',
    isLatest: false,
    releaseDate: 'May 4, 2023',
  },
  {
    version: '1.2.0',
    isLatest: false,
    releaseDate: 'Apr 29, 2023',
  },
];

const REACT_VERSIONS = [
  {
    version: '3.2.0',
    isLatest: true,
    releaseDate: 'Sep 14, 2025',
  },
  {
    version: '3.0.0',
    isLatest: false,
    releaseDate: 'Jun 4, 2025',
  },
  {
    version: '2.1.1',
    isLatest: false,
    releaseDate: 'Dec 29, 2023',
  },
  {
    version: '1.3.0',
    isLatest: false,
    releaseDate: 'May 4, 2023',
  },
  {
    version: '1.2.0',
    isLatest: false,
    releaseDate: 'Apr 29, 2023',
  },
];

const VersionsPage: NextPage = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Container>
          <Section>
            <SectionTitle>AWS Icons Versions</SectionTitle>

            {/* Icons Versions Section */}
            <h2 style={{ margin: '2rem 0 1rem 0', fontSize: '1.5rem' }}>
              AWS Icons
            </h2>
            <VersionGrid>
              {ICON_VERSIONS.map((versionInfo) => (
                <VersionCard key={`icons-${versionInfo.version}`}>
                  <VersionCardHeader>
                    <VersionCardTitle>
                      Version {versionInfo.version}
                      {versionInfo.isLatest && <VersionTag>Latest</VersionTag>}
                    </VersionCardTitle>
                    <VersionCardSubtitle>
                      Released {versionInfo.releaseDate}
                    </VersionCardSubtitle>
                  </VersionCardHeader>

                  <VersionCardFooter>
                    {versionInfo.isLatest ? (
                      <VersionLink href="/icons" $primary>
                        View Latest Icons
                      </VersionLink>
                    ) : (
                      <VersionLink href={`/icons/v${versionInfo.version}`}>
                        View v{versionInfo.version}
                      </VersionLink>
                    )}
                  </VersionCardFooter>
                </VersionCard>
              ))}
            </VersionGrid>

            {/* React Icons Versions Section */}
            <h2 style={{ margin: '3rem 0 1rem 0', fontSize: '1.5rem' }}>
              AWS React Icons
            </h2>
            <VersionGrid>
              {REACT_VERSIONS.map((versionInfo) => (
                <VersionCard key={`react-${versionInfo.version}`}>
                  <VersionCardHeader>
                    <VersionCardTitle>
                      Version {versionInfo.version}
                      {versionInfo.isLatest && <VersionTag>Latest</VersionTag>}
                    </VersionCardTitle>
                    <VersionCardSubtitle>
                      Released {versionInfo.releaseDate}
                    </VersionCardSubtitle>
                  </VersionCardHeader>

                  <VersionCardFooter>
                    {versionInfo.isLatest ? (
                      <VersionLink href="/react" $primary>
                        View Latest React Icons
                      </VersionLink>
                    ) : (
                      <VersionLink href={`/react/v${versionInfo.version}`}>
                        View v{versionInfo.version}
                      </VersionLink>
                    )}
                  </VersionCardFooter>
                </VersionCard>
              ))}
            </VersionGrid>
          </Section>
        </Container>
      </Suspense>
    </>
  );
};

export default VersionsPage;
