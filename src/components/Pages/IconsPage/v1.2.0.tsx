import { UnifiedPageMain, VERSION_CONFIGS } from '@/components/shared';
import { PropsIconsPageMain as Props } from '@/types/index';

const IconsPageMain = ({ icons, language = 'TypeScript' }: Props) => {
  return (
    <UnifiedPageMain
      icons={icons}
      language={language}
      versionConfig={VERSION_CONFIGS['icons_1.2.0']}
    />
  );
};

export default IconsPageMain;
