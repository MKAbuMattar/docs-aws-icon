import { useCallback, useEffect, useState } from 'react';

import Card from '@/components/IconsPageMain/Card';

import { filterIt } from '@/components/IconsPageMain/utils/filterIt.util';
import initialItems from '@/components/IconsPageMain/utils/initialItems.util';
import {
  Cards,
  SearchInput,
  SearchSection,
} from '@/components/IconsPageMain/style';
import {
  PropsIconsPageMain as Props,
  IconsPageMainDaum as Daum,
} from '@/types/index';

const IconsPageMain = ({ icons, language = 'TypeScript' }: Props) => {
  const [items, setItems] = useState(initialItems(icons));

  const filterList = useCallback(({ target }: any) => {
    const searchQuery = target.value.toLowerCase();
    const updatedList = filterIt(searchQuery, initialItems(icons));
    console.log(updatedList);

    setItems(updatedList);
  }, []);

  useEffect(() => {
    setItems(initialItems(icons));
  }, []);

  let globalPrefix = 'id';
  let lastId = 0;
  const nextgenerateUniqueKey = (localPrefix = '') => {
    lastId++;
    return `${localPrefix || globalPrefix}${lastId}`;
  };

  const generateUniqueNumber = () => {
    return Math.floor(Math.random() * 100_000_000_000);
  };

  const generateUniqueKey = (pre) => {
    return `${pre}_${nextgenerateUniqueKey()}_${new Date().getTime()}_${generateUniqueNumber()}_`.toLowerCase();
  };

  return (
    <>
      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      <Cards>
        {items.map((item: Daum) => (
          <div key={generateUniqueKey(item.name)}>
            <Card item={item} language={language} />
          </div>
        ))}
      </Cards>
    </>
  );
};

export default IconsPageMain;
