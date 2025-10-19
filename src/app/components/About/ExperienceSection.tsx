export default function ExperienceSection() {
  return (
    <section className="max-w-6xl w-full mt-20 space-y-10">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
        Experience
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition">
          <h3 className="text-xl font-semibold text-blue-400">
            Frontend Developer Intern
          </h3>
          <p className="text-gray-400 text-sm mb-2">Appaura | Remote</p>
          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm">
            <li>Built responsive interfaces using React.js</li>
            <li>Translated design mockups into components</li>
            <li>Debugged and optimized frontend performance</li>
            <li>Integrated APIs and participated in reviews</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-500 transition">
          <h3 className="text-xl font-semibold text-blue-400">
            Backend Developer Intern
          </h3>
          <p className="text-gray-400 text-sm mb-2">TechTommy | Remote</p>
          <ul className="list-disc ml-5 space-y-2 text-gray-300 text-sm">
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
