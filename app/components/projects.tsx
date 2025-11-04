import Link from 'next/link'
import { formatDate, getProjectPosts } from 'app/lib/projects'

export function ProjectPosts() {
  let allProjects = getProjectPosts()

  return (
    <div>
      {allProjects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/projects/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <div className="flex-1">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                {post.metadata.state && (
                  <span className="text-xs px-2 py-1 rounded bg-neutral-100 dark:bg-neutral-800 ml-2">
                    {post.metadata.state}
                  </span>
                )}
              </div>
            </div>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              {post.metadata.summary}
            </p>
            {post.metadata.tags && (
              <div className="flex gap-2 flex-wrap">
                {post.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
    </div>
  )
}
