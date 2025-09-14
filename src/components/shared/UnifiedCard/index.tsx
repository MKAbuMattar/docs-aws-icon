import Image from 'next/image';
import type { Language } from 'react-highlight-syntax';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';
import ReactIcon from '@/components/shared/ReactIcon';

import {
  IconsPageMainDaum as IconsDaum,
  ReactPageMainDaum as ReactDaum,
} from '@/types/index';
import { VersionConfig } from '../config/versions.config';
import {
  Card,
  CardInfo,
  CardTitle,
} from '../styles/PageStyles';

interface UnifiedCardProps {
  item: IconsDaum | ReactDaum;
  language: Language;
  versionConfig: VersionConfig;
}

const UnifiedCard = ({ item, language = 'TypeScript', versionConfig }: UnifiedCardProps) => {
  const isIconsPage = versionConfig.isIconsPage;
  const isReactPage = versionConfig.isReactPage;

  return (
    <div>
      <Card>
        <CardInfo>
          {isIconsPage && (
            <IconComponent item={item as IconsDaum} versionConfig={versionConfig} />
          )}
          {isReactPage && (
            <ReactIcon
              componentName={(item as ReactDaum).component}
              versionConfig={versionConfig}
            />
          )}
          <CardTitle>{item.name}</CardTitle>
        </CardInfo>

        {isIconsPage && (
          <>
            <SyntaxHighlighter language="TypeScript">
              {`import ${item.name.replaceAll(' ', '')} from '${
                (item as IconsDaum).importIcon.NPM.npm
              }';`}
            </SyntaxHighlighter>

            <SyntaxHighlighter language={language}>
              {`<!-- unpkg -->
<img
  src="${(item as IconsDaum).importIcon.CDN.unpkg}"
  alt="AWS Icons"
/>

<!-- jsdelivr -->
<img
  src="${(item as IconsDaum).importIcon.CDN.jsdelivr}"
  alt="AWS Icons"
/>`}
            </SyntaxHighlighter>
          </>
        )}

        {isReactPage && (
          <SyntaxHighlighter language={language}>
            {(item as ReactDaum).importComponent}
          </SyntaxHighlighter>
        )}
      </Card>
    </div>
  );
};

interface IconComponentProps {
  item: IconsDaum;
  versionConfig: VersionConfig;
}

const IconComponent = ({ item, versionConfig }: IconComponentProps) => {
  const myLoader = ({ src, width, quality }: any) => {
    const version = versionConfig.version === 'latest' ? '3.2.0' : versionConfig.version;
    return `https://unpkg.com/aws-icons@${version}/icons/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <Image
      loader={myLoader}
      src={item.icon}
      alt={item.name}
      width={140}
      height={140}
    />
  );
};

export default UnifiedCard;