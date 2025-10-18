'use client';

import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLock,
  FaUserShield,
  FaNetworkWired,
  FaBrain,
  FaCogs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiGithubactions,
  SiNginx,
  SiVercel,
  SiNetlify,
  SiRender,
  SiVitest,
  SiJest,
  SiPostman,
  SiTestinglibrary,
  SiMysql,
  SiRailway,
} from 'react-icons/si';

export default function SkillsPage() {
  const skillSections = [
    {
      title: 'Frontend Skills',
      color: 'from-blue-400 to-purple-500',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
        { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
        {
          name: 'TypeScript',
          icon: <SiTypescript className="text-blue-400" />,
        },
        { name: 'React.js', icon: <FaReact className="text-blue-400" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
        { name: 'Redux', icon: <SiRedux className="text-purple-400" /> },
        { name: 'Zustand', icon: <FaBrain className="text-gray-300" /> },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
        {
          name: 'Bootstrap 5',
          icon: <SiBootstrap className="text-purple-500" />,
        },
      ],
    },
    {
      title: 'Backend Skills',
      color: 'from-green-400 to-teal-500',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
        { name: 'Express.js', icon: <SiExpress className="text-gray-300" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-pink-500" /> },
        {
          name: 'REST APIs',
          icon: <FaNetworkWired className="text-blue-400" />,
        },
        {
          name: 'Passport.js',
          icon: <FaUserShield className="text-gray-300" />,
        },
        { name: 'JWT', icon: <FaLock className="text-yellow-400" /> },
        { name: '2FA', icon: <FaUserShield className="text-green-400" /> },
      ],
    },
    {
      title: 'Databases',
      color: 'from-sky-400 to-blue-500',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-sky-400" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-400" /> },
        { name: 'Redis', icon: <SiRedis className="text-red-500" /> },
      ],
    },
    {
      title: 'Cloud & DevOps',
      color: 'from-yellow-400 to-orange-500',
      skills: [
        { name: 'AWS', icon: <FaAws className="text-yellow-400" /> },
        { name: 'Docker', icon: <FaDocker className="text-blue-400" /> },
        { name: 'Git', icon: <FaGitAlt className="text-orange-400" /> },
        {
          name: 'GitHub Actions (CI/CD)',
          icon: <SiGithubactions className="text-white" />,
        },
        { name: 'Nginx', icon: <SiNginx className="text-green-500" /> },
        { name: 'Vercel', icon: <SiVercel className="text-white" /> },
        { name: 'Netlify', icon: <SiNetlify className="text-cyan-400" /> },
        { name: 'Railway', icon: <SiRailway className="text-gray-300" /> },
        { name: 'Render', icon: <SiRender className="text-blue-400" /> },
      ],
    },
    {
      title: 'Testing',
      color: 'from-pink-400 to-red-500',
      skills: [
        { name: 'Vitest', icon: <SiVitest className="text-green-400" /> },
        {
          name: 'React Testing Library',
          icon: <SiTestinglibrary className="text-red-400" />,
        },
        { name: 'Jest', icon: <SiJest className="text-red-500" /> },
        { name: 'Postman', icon: <SiPostman className="text-orange-500" /> },
      ],
    },
    {
      title: 'Soft Skills',
      color: 'from-cyan-400 to-purple-500',
      skills: [
        { name: 'Problem Solving', icon: <FaCogs className="text-cyan-400" /> },
        { name: 'Teamwork', icon: <FaCogs className="text-purple-400" /> },
        { name: 'Communication', icon: <FaCogs className="text-blue-400" /> },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-8 py-16">
      {/* Heading Animation Same as Contact Page */}
      <motion.h1
        className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        My Skills
      </motion.h1>

      {/* Skills Cards with Smooth Motion */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skillSections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/50 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.3,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.05 }}
          >
            <h2
              className={`text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r ${section.color}`}
            >
              {section.title}
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {section.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-2 bg-gray-700/50 px-3 py-2 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 cursor-default"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
