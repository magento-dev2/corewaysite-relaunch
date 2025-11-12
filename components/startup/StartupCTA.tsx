import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAData {
  text: string;
  button: {
    label: string;
    link: string;
  };
}

interface StartupCTAProps {
  data: CTAData;
}

export default function StartupCTA({ data }: StartupCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-8">
          {data.text}
        </h2>
        <Link
          to={data.button.link}
          className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-lg font-medium text-lg hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
        >
          <span>{data.button.label}</span>
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
}
