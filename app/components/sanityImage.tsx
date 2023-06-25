import clientConfig from '@/sanity/client-config';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { createClient } from 'next-sanity';
import { useNextSanityImage } from 'next-sanity-image';
import Image from 'next/image';

const sanityClient = createClient(clientConfig);

import React from 'react';

type Props = {
  asset: SanityImageSource | null;
};

export default function SanityImage({ asset }: any) {
  //   console.log(`Asset: ${asset?.toString()}`);
  const imageProps: any = useNextSanityImage(sanityClient, asset);
  //   console.log(`Image Props: ${imageProps}`);

  if (imageProps === null) return null;
  return (
    <Image
      {...imageProps}
      alt=''
      fill
      sizes='(max-width: 800px) 100vw, 800px'
    />
  );
}
