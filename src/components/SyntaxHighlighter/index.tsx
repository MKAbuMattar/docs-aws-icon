import React from 'react';
import ReactHighlightSyntax, {
  CopyBtnTheme,
  Language,
  Theme,
} from 'react-highlight-syntax';

type Props = {
  language: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
};

const SyntaxHighlighter = ({
  language,
  theme = 'Base16Darcula',
  copy = false,
  copyBtnTheme = 'Dark',
  children,
}: Props) => {
  return (
    <ReactHighlightSyntax
      language={language}
      theme={theme}
      copy={copy}
      copyBtnTheme={copyBtnTheme}
    >
      {children}
    </ReactHighlightSyntax>
  );
};

export default React.memo(SyntaxHighlighter);
