// "use client";

// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import CenterHeading from "./CenterHeading";

// const Clients = () => {
//   const [activeReview, setActiveReview] = useState(0);
//   const scrollContainerRef = useRef(null);

//   const reviews = [
//     {
//       id: 1,
//       text: "Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur ",
//       author: "Tim Cook",
//       position: "CEO, Agib",
//     },
//     {
//       id: 2,
//       text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur ",
//       author: "Sarah Johnson",
//       position: "CTO, InnovateX",
//     },
//     {
//       id: 3,
//       text: "Dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//       author: "Michael Chen",
//       position: "Director, TechSolutions",
//     },
//     {
//       id: 4,
//       text: "Consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
//       author: "Emily Rodriguez",
//       position: "VP Marketing, BrandVision",
//     },
//   ];

//   const scrollToReview = (index: number) => {
//     setActiveReview(index);
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const reviewWidth = container.scrollWidth / reviews.length;
//       container.scrollTo({
//         left: reviewWidth * index,
//         behavior: "smooth",
//       });
//     }
//   };

//   const handleScroll = () => {
//     if (scrollContainerRef.current) {
//       const container = scrollContainerRef.current;
//       const scrollPosition = container.scrollLeft;
//       const reviewWidth = container.scrollWidth / reviews.length;
//       const newActiveReview = Math.round(scrollPosition / reviewWidth);
//       setActiveReview(newActiveReview);
//     }
//   };

//   return (
//     <section className="py-20 bg-[#E6E6E6] text-black">
//       <div className="container mx-auto px-4">
//         <CenterHeading
//           title="OUR CLIENTS"
//           heading="Gilnt has been honored to partner up with these clients"
//           titleColour="text-[#39B54A]"
//           headingColour="text-black"
//         />

//         {/* Reviews Section */}
//         <div className="max-w-4xl mx-auto">
//           <motion.div
//             className="relative"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             {/* Review Content */}
//             <div
//               ref={scrollContainerRef}
//               className="overflow-x-hidden scrollbar-hide"
//               onScroll={handleScroll}
//             >
//               <div className="flex">
//                 {reviews.map((review) => (
//                   <div key={review.id} className="w-full flex-shrink-0 px-4">
//                     <div className="rounded-xl p-8 md:p-10">
//                       <p className="text-lg md:text-xl text-center Text text-gray-600 mb-6 leading-relaxed">
//                         {review.text}
//                       </p>
//                       <div className="border-t flex flex-col items-center justify-center border-gray-400 pt-6">
//                         <h4 className="font-semibold text-sm">
//                           {review.author}
//                         </h4>
//                         <p className="text-black text-xs">{review.position}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Navigation Buttons */}
//             <button
//               onClick={() =>
//                 scrollToReview(
//                   activeReview > 0 ? activeReview - 1 : reviews.length - 1
//                 )
//               }
//               className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4  text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//               aria-label="Previous review"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>
//             <button
//               onClick={() =>
//                 scrollToReview(
//                   activeReview < reviews.length - 1 ? activeReview + 1 : 0
//                 )
//               }
//               className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4  text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
//               aria-label="Next review"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Clients;













"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import CenterHeading from "./CenterHeading";

interface Review {
  id: number;
  text: string;
  author: string;
  position: string;
}

const Clients: React.FC = () => {
  const [activeReview, setActiveReview] = useState<number>(0);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const reviews: Review[] = [
    {
      id: 1,
      text: "Qui ipsam temporibus quisquam vel. Maiores eos cumque distinctio nam accusantium ipsum. Laudantium quia consequatur ",
      author: "Tim Cook",
      position: "CEO, Agib",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur ",
      author: "Sarah Johnson",
      position: "CTO, InnovateX",
    },
    {
      id: 3,
      text: "Dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      author: "Michael Chen",
      position: "Director, TechSolutions",
    },
    {
      id: 4,
      text: "Consectetur adipisicing elit. Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      author: "Emily Rodriguez",
      position: "VP Marketing, BrandVision",
    },
  ];

  const scrollToReview = (index: number) => {
    setActiveReview(index);
    const container = scrollContainerRef.current;
    if (container) {
      const reviewWidth = container.scrollWidth / reviews.length;
      container.scrollTo({
        left: reviewWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollPosition = container.scrollLeft;
      const reviewWidth = container.scrollWidth / reviews.length;
      const newActiveReview = Math.round(scrollPosition / reviewWidth);
      setActiveReview(newActiveReview);
    }
  };

  return (
    <section className="py-20 bg-[#E6E6E6] text-black">
      <div className="container mx-auto px-4">
        <CenterHeading
          title="OUR CLIENTS"
          heading="Gilnt has been honored to partner up with these clients"
          titleColour="text-[#39B54A]"
          headingColour="text-black"
        />

        {/* Reviews Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Review Content */}
            <div
              ref={scrollContainerRef}
              className="overflow-x-hidden scrollbar-hide"
              onScroll={handleScroll}
            >
              <div className="flex">
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <div className="rounded-xl p-8 md:p-10">
                      <p className="text-lg md:text-xl text-center text-gray-600 mb-6 leading-relaxed">
                        {review.text}
                      </p>
                      <div className="border-t flex flex-col items-center justify-center border-gray-400 pt-6">
                        <h4 className="font-semibold text-sm">
                          {review.author}
                        </h4>
                        <p className="text-black text-xs">{review.position}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() =>
                scrollToReview(
                  activeReview > 0 ? activeReview - 1 : reviews.length - 1
                )
              }
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Previous review"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() =>
                scrollToReview(
                  activeReview < reviews.length - 1 ? activeReview + 1 : 0
                )
              }
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-black w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              aria-label="Next review"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
