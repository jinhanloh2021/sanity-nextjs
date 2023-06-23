import { getProjects } from '@/sanity/sanity.utils';

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      {projects.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
}
