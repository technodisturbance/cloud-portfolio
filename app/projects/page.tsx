import { ProjectPosts } from 'app/components/projects'

export const metadata = {
  title: 'Projects',
  description: 'My cloud engineering and development projects.',
}

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Projects</h1>
      <ProjectPosts />
    </section>
  )
}
