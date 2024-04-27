import { useCallback, useEffect, useState } from 'react';

import { filterIt } from '@/components/ReactPageMain_1.3.0/utils/filterIt.util';
import { initialItems } from '@/components/ReactPageMain_1.3.0/utils/initialItems.util';
import Card from '@/components/ReactPageMain_1.3.0/Card';

import {
  Cards,
  SearchInput,
  SearchSection,
} from '@/components/ReactPageMain_1.3.0/style';

import {
  PropsReactPageMain as Props,
  ReactPageMainDaum as Daum,
} from '@/types/index';

const ReactPageMain = ({ icons, language = 'TypeScript' }: Props) => {
  const [items, setItems] = useState(initialItems(icons));

  const filterList = useCallback(({ target }: any) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, initialItems(icons));
    setItems(updatedList);
  }, []);

  useEffect(() => {
    setItems(initialItems(icons));
  }, []);

  return (
    <>
      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      <Cards>
        {items.map((item: Daum) => (
          <div key={item?.name}>
            <Card item={item} language={language} />
          </div>
        ))}
      </Cards>
    </>
  );
};

export default ReactPageMain;
