import { UnifiedPageMain, VERSION_CONFIGS } from '@/components/shared';
import { PropsReactPageMain as Props } from '@/types/index';

const ReactPageMain = ({ icons, language = 'TypeScript' }: Props) => {
  return (
    <UnifiedPageMain
      icons={icons}
      language={language}
      versionConfig={VERSION_CONFIGS['react_3.0.0']}
    />
  );
};

export default ReactPageMain;
