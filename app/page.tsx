import { BlogPosts } from 'app/components/posts'
import { ProjectPosts } from 'app/components/projects'
import Link from 'next/link'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Cloud engineer building production systems with modern infrastructure tools. 
        Specializing in IaC, containers, and CI/CD pipelines.`}
      </p>
      
      <div className="my-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <Link 
            href="/projects" 
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all →
          </Link>
        </div>
        <ProjectPosts />
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <BlogPosts />
      </div>
    </section>
  )
}
