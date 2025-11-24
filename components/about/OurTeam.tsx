import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter } from 'lucide-react';

interface TeamMemberData {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedinUrl: string | null;
  twitterUrl: string | null;
}

interface OurTeamProps {
  members: TeamMemberData[];
}

export default function OurTeam({ members }: OurTeamProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#0E0918] to-[#1a1325]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            The talented people behind our innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <article
              key={member.id}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0918] via-transparent to-transparent opacity-60"></div>

                {(member.linkedinUrl || member.twitterUrl) && (
                  <div className="absolute bottom-4 left-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {member.linkedinUrl && (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <Linkedin size={18} className="text-white" />
                      </a>
                    )}
                    {member.twitterUrl && (
                      <a
                        href={member.twitterUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500 hover:border-purple-500 transition-all"
                        aria-label={`${member.name} on Twitter`}
                      >
                        <Twitter size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                {member.bio && (
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
