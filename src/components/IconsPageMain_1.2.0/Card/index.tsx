import Image from 'next/image';

import type { Language } from 'react-highlight-syntax';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

import { IconsPageMainDaum as Daum } from '@/types/index';
import {
  Card,
  CardInfo,
  CardTitle,
} from '@/components/IconsPageMain_1.2.0/Card/style';

type Props = {
  item?: Daum;
  language?: Language;
};

type IconComponentProps = {
  item: Daum;
};

const CardComponent = ({ item, language = 'HTML' }: Props) => {
  return (
    <div>
      <Card>
        <CardInfo>
          <IconComponent item={item} />
          <CardTitle>{item?.name}</CardTitle>
        </CardInfo>

        <SyntaxHighlighter language={'TypeScript'}>
          {`import ${item?.name.replaceAll(' ', '')} from '${
            item?.importIcon.NPM.npm
          }';`}
        </SyntaxHighlighter>

        <SyntaxHighlighter language={language}>
          {`<!-- unpkg -->
<img
  src="${item?.importIcon.CDN.unpkg}"
  alt="AWS Icons"
/>

<!-- jsdelivr -->
<img
  src="${item?.importIcon.CDN.jsdelivr}"
  alt="AWS Icons"
/>`}
        </SyntaxHighlighter>
      </Card>
    </div>
  );
};

const IconComponent = ({ item }: IconComponentProps) => {
  const myLoader = ({ src, width, quality }: any) => {
    return `https://unpkg.com/aws-icons@1.2.0/icons/${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <Image
      loader={myLoader}
      src={`${item.icon}`}
      alt={item.name}
      width={140}
      height={140}
    />
  );
};

export default CardComponent;
