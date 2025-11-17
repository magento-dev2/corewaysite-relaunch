import type { Metadata } from "next";
import CaseStudyDetails from "@/components/casestudy/CaseStudyDetails";

interface PageProps {
  params: Promise<{ slug: string }>; // ✅ Next.js now returns params as a Promise
}

import productsData from "../../../data/caseStudies.json";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  return {
    title: product
      ? `${product.title} | Case Study`
      : "Case Study Not Found | Coreway Solution",
    description: product
      ? `Explore how Coreway Solution helped with ${product.title}.`
      : "Case study not found.",
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;

  const product = productsData.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!product)
    return (
      <div className="pt-40 text-center text-red-500 min-h-screen">
        Product not found
      </div>
    );

  return (
    <>
      <div className="max-w-5xl mx-auto pt-32 pb-24 px-6">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {product.title}
          </h1>
          <p className="text-gray-400 text-lg">A Coreway Case Study</p>
        </header>

        {/* Hero Image */}
        <div className="mb-10">
          <img
            src={product.imageUrl}
            alt={product.imageAlt}
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Horizontal Scroll Animation Section */}
      <CaseStudyDetails
        challenges={product.challenges}
        solutions={product.solutions}
        stats={product.stats}
      />
    </>
  );
}


// import type { Metadata } from "next";

// interface PageProps {
//   params: Promise<{ slug: string }>; // Pass the documentId or id
// }

// interface CaseStudy {
//   id: number;
//   title: string;
//   slug: string;
//   challenges?: string | null;
//   solutions?: string | null;
//   imageUrl?: string | null;
//   imageAlt?: string | null;
//   stats?: { value: string; label: string }[];
//   body?: string | null;
// }

// export default async function CaseStudyPage({ params }: PageProps) {
//   const { slug } = await params;


//   // Fetch article from Strapi by id
//   const res = await fetch(`http://localhost:1337/api/articles/${slug}`);
//   if (!res.ok) {
//     return (
//       <div className="pt-40 text-center text-red-500 min-h-screen">
//         Failed to load case study
//       </div>
//     );
//   }

//   const json = await res.json();
//   const product: CaseStudy = json.data;

//   if (!product) {
//     return (
//       <div className="pt-40 text-center text-red-500 min-h-screen">
//         Case study not found
//       </div>
//     );
//   }

//   // Use first image from body if imageUrl is not set
//   let featuredImage = product.imageUrl;
//   if (!featuredImage && product.body) {
//     const match = product.body.match(/<img\s+[^>]*src=["']([^"']+)["']/i);
//     featuredImage = match ? match[1] : null;
//   }

//   return (
//     <div className="max-w-5xl mx-auto pt-32 pb-24 px-6">
//       {/* Header Section */}
//       <header className="text-center mb-12">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//           {product.title}
//         </h1>
//         <p className="text-gray-400 text-lg">A Coreway Case Study</p>
//       </header>

//       {/* Featured Image */}
//       {featuredImage && (
//         <div className="mb-10">
//           <img
//             src={featuredImage}
//             alt={product.imageAlt || product.title}
//             className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
//           />
//         </div>
//       )}

//       {/* Content Section */}
//       <section className="space-y-10 text-gray-300">
//         {product.challenges && (
//           <div>
//             <h2 className="text-2xl font-semibold text-purple-400 mb-3">
//               Challenges
//             </h2>
//             <p>{product.challenges}</p>
//           </div>
//         )}

//         {product.solutions && (
//           <div>
//             <h2 className="text-2xl font-semibold text-purple-400 mb-3">
//               Solutions
//             </h2>
//             <p>{product.solutions}</p>
//           </div>
//         )}

//         {/* Render body HTML */}
//         {product.body && (
//           <div
//             className="text-gray-300 leading-relaxed space-y-4"
//             dangerouslySetInnerHTML={{ __html: product.body }}
//           />
//         )}

//         {/* Stats Section */}
//         {product.stats && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
//             {product.stats.map((stat, index) => (
//               <div
//                 key={index}
//                 className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 text-center"
//               >
//                 <div className="text-3xl font-bold text-purple-400 mb-2">
//                   {stat.value}
//                 </div>
//                 <p className="text-gray-300">{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// }
