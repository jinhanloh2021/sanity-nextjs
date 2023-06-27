import SanityImage from '@/app/components/sanityImage';
import { getProject } from '@/sanity/sanity.utils';
import { CodeShape, ImageShape } from '@/types/Project';
import {
  PortableText,
  PortableTextTypeComponentProps,
} from '@portabletext/react';
import Image from 'next/image';
import styles from './styles.module.scss';
import CodeBlock from '@/app/components/codeBlock';

type Props = {
  params: { project: string };
};

const customPortableTextComponents = {
  types: {
    image: (props: PortableTextTypeComponentProps<ImageShape>) => {
      return <SanityImage imageData={props} />;
    },
    code: (props: PortableTextTypeComponentProps<CodeShape>) => {
      return (
        <CodeBlock language={props.value.language}>
          {props.value.code}
        </CodeBlock>
      );
    },
  },
};

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
      <header className='flex items-center justify-between mb-10'>
        <h1 className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold leading-[64px]'>
          {project.name}
        </h1>
        <a
          href={project.url}
          title='View Project'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-500 hover:text-pink-100 transition'
        >
          View Project
        </a>
      </header>
      <div className={styles.portable_text}>
        <PortableText
          value={project.content}
          components={customPortableTextComponents}
        />
      </div>
      <Image
        src={project.image}
        alt={project.name}
        width={1240}
        height={960}
        className='mt-10 border-2 border-gray-700 object-cover rounded-xl'
      />
    </div>
  );
}
