export default function CertificationsProjects() {
  return (
    <section className="mt-20 w-full max-w-6xl">
      <h2 className="mb-10 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center text-3xl font-bold text-transparent">
        Certifications & Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6 text-gray-300 transition hover:border-purple-500">
          <h3 className="mb-3 text-xl font-semibold text-blue-400">
            Certifications
          </h3>
          <ul className="ml-5 list-disc space-y-1">
            <li>SQL (Basic) — HackerRank</li>
            <li>SQL (Intermediate) — HackerRank</li>
            <li>CSS (Basic) — HackerRank</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-700 bg-gray-800 p-6 text-gray-300 transition hover:border-purple-500">
          <h3 className="mb-3 text-xl font-semibold text-blue-400">
            Highlighted Projects
          </h3>
          <ul className="ml-5 list-disc space-y-2">
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
