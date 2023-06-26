'use client';
import React, { useEffect, useState } from 'react';
import Prism, { Token } from 'prismjs';
import '../prism-one-dark.css';

export interface CodeProps {
  language:
    | 'javascript'
    | 'css'
    | 'json'
    | 'jsx'
    | 'tsx'
    | 'typescript'
    | 'bash';
  children: string;
}

function tokenToReactNode(token: Token | string, i: number): React.ReactNode {
  if (typeof token === 'string') {
    return <span key={i}>{token}</span>;
  } else if (typeof token.content === 'string') {
    return (
      <span key={i} className={`token ${token.type}`}>
        {token.content}
      </span>
    );
  } else if (Array.isArray(token.content)) {
    return (
      <span key={i} className={`token ${token.type}`}>
        {token.content.map(tokenToReactNode)}
      </span>
    );
  } else {
    return (
      <span key={i} className={`token ${token.type}`}>
        {tokenToReactNode(token.content, 0)}
      </span>
    );
  }
}

export const CodeBlock: React.FC<CodeProps> = ({ language, children }) => {
  const [data, replaceToken] = useState<Array<string | Token>>([]);
  useEffect(() => {
    import(`prismjs/components/prism-${language}`).then(() => {
      const tokens: Array<string | Token> = Prism.languages[language]
        ? Prism.tokenize(children, Prism.languages[language])
        : [];
      replaceToken(tokens);
    });
  }, [children, language]);

  return (
    <pre className={`language-${language}`}>
      {data.length ? data.map(tokenToReactNode) : children}
    </pre>
  );
};
