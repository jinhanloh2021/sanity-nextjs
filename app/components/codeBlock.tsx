import Prism, { Token } from 'prismjs';
import '../prism-one-dark.css';

type Props = {
  language:
    | 'javascript'
    | 'css'
    | 'json'
    | 'jsx'
    | 'tsx'
    | 'typescript'
    | 'bash';
  children: string;
};

const CodeBlock = async ({ language, children }: Props) => {
  await import(`prismjs/components/prism-${language}`); // conditional import
  const data: Array<string | Token> = Prism.languages[language]
    ? Prism.tokenize(children, Prism.languages[language])
    : [];

  return (
    <pre className={`language-${language} text-sm`}>
      {data.length ? data.map(tokenToReactNode) : children}
    </pre>
  );
};

export default CodeBlock;

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
