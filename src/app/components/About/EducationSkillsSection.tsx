export default function EducationSkillsSection() {
  return (
    <section className="max-w-6xl w-full mt-20 space-y-10">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
        Education & Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-2xl border-gray-700 shadow-lg border hover:border-purple-500 transition">
          <h3 className="text-xl font-semibold text-blue-400">
            Bachelor&apos;s Degree in Information Technology (BSIT)
          </h3>
          <p className="text-gray-400 mt-1">The Superior University, Lahore</p>
          <p className="text-gray-400 text-sm">In Progress — CGPA: 3.3</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition text-gray-300">
          <p>
            <span className="text-purple-400 font-semibold">Frontend:</span>{' '}
            React.js, Next.js, Tailwind CSS, Bootstrap 5
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Backend:</span>{' '}
            Node.js, Express.js, REST APIs, GraphQL
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Databases:</span>{' '}
            PostgreSQL, MongoDB, Redis
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Tools:</span>{' '}
            Docker, Git, AWS, Vercel, Render
          </p>
          <p>
            <span className="text-purple-400 font-semibold">Testing:</span>{' '}
            Jest, Vitest, Postman, RTL
          </p>
        </div>
      </div>
    </section>
  );
}
