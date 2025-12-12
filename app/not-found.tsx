export const metadata = {
  title: "404 - Page Not Found | Coreway Solution",
  description: "The page you are looking for does not exist.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Custom404() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center bg-[#0E0918] text-white px-4">
      
      {/* Center Image */}
      <img
        src="/4041.png" // <-- change this to your image path
        alt="Page Not Found"
        className="w-[700px] h-auto mb-8" // perfect size for center
      />

      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Oops! This page is missing.
      </h1>

      <p className="text-lg md:text-xl max-w-xl mb-6 opacity-80">
        Looks like the page you're trying to reach isn’t available.
        Let’s get you back on track.
      </p>

      <a
        href="/"
        className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition-all font-medium"
      >
        Go Home
      </a>
    </div>
  );
}
