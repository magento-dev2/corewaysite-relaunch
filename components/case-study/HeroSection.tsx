'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowLeft, ArrowRight, MapPin, Clock, Users, Briefcase, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection({ data }: { data: any }) {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          buttonsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          statsRef.current?.children || [],
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.4'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className="container mx-auto px-6 max-w-7xl pt-8 pb-4">
        <Link href="/case-studies">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm">Back to Case Studies</span>
          </button>
        </Link>
      </div>

      <section ref={heroRef} className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-b from-[#0E0918] via-[#1a1325] to-[#0E0918]">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 text-purple-500/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
            </svg>
          </div>
          <div className="absolute top-40 right-20 w-16 h-16 text-purple-500/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="absolute bottom-32 left-20 w-12 h-12 text-purple-500/20">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div>
                <h1
                  ref={titleRef}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
                >
                  {data.title.split(' ').map((word: string, index: number) => {
                    // Highlight specific words in purple
                    const highlightWords = ['Geliyoo', 'Turkey', 'Digital', 'Future', 'Search']
                    const isHighlight = highlightWords.some(hw => word.includes(hw))
                    return (
                      <span key={index}>
                        {isHighlight ? (
                          <span className="bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                            {word}
                          </span>
                        ) : (
                          word
                        )}{' '}
                      </span>
                    )
                  })}
                </h1>
                <p
                  ref={subtitleRef}
                  className="text-xl md:text-2xl text-gray-400 leading-relaxed"
                >
                  {data.subtitle}
                </p>
              </div>

              <div ref={buttonsRef} className="flex flex-wrap gap-4">
                <Link href="#client-overview">
                  <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-fuchsia-700 transition-all shadow-lg hover:shadow-purple-500/50 inline-flex items-center gap-2 group">
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-white rounded-xl font-semibold hover:bg-gray-700/50 transition-all inline-flex items-center gap-2">
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <div ref={imageRef} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 blur-3xl"></div>
              <img
                src={data.imageUrl}
                alt={data.title}
                className="relative rounded-2xl shadow-2xl border border-purple-500/20 w-full object-cover"
              />
            </div>
          </div>

          {/* Stats Section Below */}
          <div
            ref={statsRef}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-3">
                <Briefcase className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-gray-500 mb-1">Client</p>
              <p className="text-white font-semibold">{data.client}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-3">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-gray-500 mb-1">Location</p>
              <p className="text-white font-semibold">{data.location}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-3">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-gray-500 mb-1">Duration</p>
              <p className="text-white font-semibold">{data.duration}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-xl mb-3">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-sm text-gray-500 mb-1">Team Size</p>
              <p className="text-white font-semibold">{data.teamSize}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
