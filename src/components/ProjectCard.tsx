interface Props {
  title: string;
  description: string;
  technologies: string;
}

export default function ProjectCard({ title, description, technologies }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 italic">{technologies}</p>
    </div>
  );
}

