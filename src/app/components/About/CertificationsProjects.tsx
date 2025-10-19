export default function CertificationsProjects() {
  return (
    <section className="max-w-6xl w-full mt-20">
      <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent mb-10">
        Certifications & Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-gray-300 hover:border-purple-500 transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Certifications
          </h3>
          <ul className="list-disc ml-5 space-y-1">
            <li>SQL (Basic) — HackerRank</li>
            <li>SQL (Intermediate) — HackerRank</li>
            <li>CSS (Basic) — HackerRank</li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 text-gray-300 hover:border-purple-500 transition">
          <h3 className="text-xl font-semibold text-blue-400 mb-3">
            Highlighted Projects
          </h3>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <span className="font-semibold text-purple-400">
                Weather Forecast App:
              </span>{' '}
              Built with React.js, Tailwind CSS, and OpenWeather API.
            </li>
            <li>
              <span className="font-semibold text-purple-400">
                Information Display Page:
              </span>{' '}
              Developed using React.js & Bootstrap 5.
            </li>
            <li>
              <span className="font-semibold text-purple-400">
                Role-Based Service Platform:
              </span>{' '}
              Full-stack app using React, Express, MongoDB, Redis, and OAuth.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
