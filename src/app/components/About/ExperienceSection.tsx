export default function ExperienceSection() {
  return (
    <section className="mt-20 w-full max-w-6xl space-y-10">
      <h2 className="mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        Experience
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition hover:border-purple-500">
          <h3 className="text-xl font-semibold text-blue-400">
            Frontend Developer Intern
          </h3>
          <p className="mb-2 text-sm text-gray-400">Appaura | Remote</p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-gray-300">
            <li>Built responsive interfaces using React.js</li>
            <li>Translated design mockups into components</li>
            <li>Debugged and optimized frontend performance</li>
            <li>Integrated APIs and participated in reviews</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg transition hover:border-purple-500">
          <h3 className="text-xl font-semibold text-blue-400">
            Backend Developer Intern
          </h3>
          <p className="mb-2 text-sm text-gray-400">TechTommy | Remote</p>
          <ul className="ml-5 list-disc space-y-2 text-sm text-gray-300">
            <li>Created REST APIs with Node.js & Express.js</li>
            <li>Designed optimized PostgreSQL schemas</li>
            <li>Integrated backend services with frontend</li>
            <li>Handled deployments and Git version control</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
