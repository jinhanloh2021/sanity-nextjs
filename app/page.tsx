import { getProjects } from '@/sanity/sanity.utils';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div className='bg-red-500'>
      {projects.map((p) => (
        <div key={p._id}>{p.name}</div>
      ))}
    </div>
  );
}
