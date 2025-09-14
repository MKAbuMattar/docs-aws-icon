import { useCallback, useEffect, useState, useMemo } from 'react';
import type { Language } from 'react-highlight-syntax';

import { filterIt } from '../utils/filterIt.util';
import { initialItems } from '../utils/initialItems.util';
import UnifiedCard from '../UnifiedCard';
import { VersionConfig } from '../config/versions.config';

import {
  Cards,
  SearchInput,
  SearchSection,
} from '../styles/PageStyles';

import {
  IconsPageMainDaum as IconsDaum,
  ReactPageMainDaum as ReactDaum,
} from '@/types/index';

interface UnifiedPageMainProps {
  icons: IconsDaum[] | ReactDaum[];
  language?: Language;
  versionConfig: VersionConfig;
}

const UnifiedPageMain = ({ 
  icons, 
  language = 'TypeScript', 
  versionConfig 
}: UnifiedPageMainProps) => {
  const originalItems = useMemo(() => initialItems(icons), [icons]);
  const [items, setItems] = useState(originalItems);

  const filterList = useCallback(({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = target.value.toLowerCase();
    
    if (searchQuery === '' || searchQuery.length < 2) {
      setItems(originalItems);
    } else {
      const updatedList = filterIt(searchQuery, originalItems);
      setItems(updatedList);
    }
  }, [originalItems]);

  useEffect(() => {
    const newOriginalItems = initialItems(icons);
    setItems(newOriginalItems);
  }, [icons]);

  return (
    <>
      <SearchSection id="search">
        <SearchInput type="text" placeholder="Search" onChange={filterList} />
      </SearchSection>

      <Cards>
        {items.map((item: IconsDaum | ReactDaum) => (
          <div key={item.name}>
            <UnifiedCard 
              item={item} 
              language={language} 
              versionConfig={versionConfig}
            />
          </div>
        ))}
      </Cards>
    </>
  );
};

export default UnifiedPageMain;