import type { Language } from 'react-highlight-syntax';
import SyntaxHighlighter from '@/components/SyntaxHighlighter';

import { ReactPageMainDaum as Daum } from '@/types/index';
import {
  Card,
  CardInfo,
  CardTitle,
} from '@/components/ReactPageMain_1.2.0/Card/style';

import ListIcons from '@/components/ReactPageMain_1.2.0/Card/ListIcons';

type Props = {
  item?: Daum;
  language?: Language;
};

const CardComponent = ({ item, language = 'TypeScript' }: Props) => {
  return (
    <div>
      <Card>
        <CardInfo>
          <ListIcons componentName={item.component} />
          <CardTitle>{item?.name}</CardTitle>
        </CardInfo>

        <SyntaxHighlighter language={language}>
          {`${item?.importComponent}`}
        </SyntaxHighlighter>
      </Card>
    </div>
  );
};

export default CardComponent;
