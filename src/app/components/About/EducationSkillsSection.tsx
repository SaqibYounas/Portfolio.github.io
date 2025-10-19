export default function EducationSkillsSection() {
  return (
    <section className="mt-20 w-full max-w-6xl space-y-10">
      <h2 className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        Education & Skills
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition hover:border-purple-500">
          <h3 className="text-xl font-semibold text-blue-400">
            Bachelor&apos;s Degree in Information Technology (BSIT)
          </h3>
          <p className="mt-1 text-gray-400">The Superior University, Lahore</p>
          <p className="text-sm text-gray-400">In Progress — CGPA: 3.3</p>
        </div>

        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6 text-gray-300 shadow-lg transition hover:border-purple-500">
          <p>
            <span className="font-semibold text-purple-400">Frontend:</span>{' '}
            React.js, Next.js, Tailwind CSS, Bootstrap 5
          </p>
          <p>
            <span className="font-semibold text-purple-400">Backend:</span>{' '}
            Node.js, Express.js, REST APIs, GraphQL
          </p>
          <p>
            <span className="font-semibold text-purple-400">Databases:</span>{' '}
            PostgreSQL, MongoDB, Redis
          </p>
          <p>
            <span className="font-semibold text-purple-400">Tools:</span>{' '}
            Docker, Git, AWS, Vercel, Render
          </p>
          <p>
            <span className="font-semibold text-purple-400">Testing:</span>{' '}
            Jest, Vitest, Postman, RTL
          </p>
        </div>
      </div>
    </section>
  );
}
