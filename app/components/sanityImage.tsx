import clientConfig from '@/sanity/client-config';
import { ImageShape } from '@/sanity/schemas/project.schema';
import { PortableTextTypeComponentProps } from '@portabletext/react';
import { createClient } from 'next-sanity';
import { UseNextSanityImageProps, useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';
import React from 'react';

const sanityClient = createClient(clientConfig);

type Props = {
  imageData: PortableTextTypeComponentProps<ImageShape>;
};

export default async function SanityImage({ imageData }: Props) {
  const imageProps: UseNextSanityImageProps | null = useNextSanityImage(
    sanityClient,
    imageData.value.asset
  );
  if (imageProps === null) return <></>;
  return (
    <Image
      src={imageProps.src}
      width={imageProps.width}
      height={imageProps.height}
      style={{ width: '100%', height: 'auto' }}
      alt={imageData.value.alt}
      sizes='(max-width: 800px) 100vw, 800px'
    />
  );
}
