import { useCallback, useEffect, useState } from 'react';

import Card from '@/components/IconsPageMain_3.0.0/Card';

import { filterIt } from '@/components/IconsPageMain_3.0.0/utils/filterIt.util';
import initialItems from '@/components/IconsPageMain_3.0.0/utils/initialItems.util';
import {
  Cards,
  SearchInput,
  SearchSection,
} from '@/components/IconsPageMain_3.0.0/style';
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

  return (
    <>
      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      <Cards>
        {items.map((item: Daum) => (
          <div key={item.name}>
            <Card item={item} language={language} />
          </div>
        ))}
      </Cards>
    </>
  );
};

export default IconsPageMain;
