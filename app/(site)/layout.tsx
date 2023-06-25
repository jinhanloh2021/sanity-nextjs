import Link from 'next/link';
import '../globals.css';
import { Inter } from 'next/font/google';
import { getPages } from '@/sanity/sanity.utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Site',
  description: 'Generated by NextJs and Sanity',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get all pages
  const pages = await getPages();
  return (
    <html lang='en'>
      <body className='max-w-3xl mx-auto py-10'>
        <header className='flex items-center justify-between'>
          <Link
            href={'/'}
            className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold'
          >
            Hello world
          </Link>
          <div className='flex items-center gap-5 text-sm text-gray-600'>
            {pages.map((p) => (
              <Link key={p._id} href={`/${p.slug}`} className='hover:underline'>
                {p.title}
              </Link>
            ))}
          </div>
        </header>
        <div className='py-20'>{children}</div>
      </body>
    </html>
  );
}