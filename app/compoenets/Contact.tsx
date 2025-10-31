// "use client";
// import { useState } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
//   FaBehance,
//   FaDribbble,
// } from "react-icons/fa";

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [errors, setErrors] = useState({});

//   const handleChange = (e: { target: { name: any; value: any; }; }) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     const newErrors = {};
//     if (!formData.name) newErrors.name = true;
//     if (!formData.email) newErrors.email = true;
//     if (!formData.message) newErrors.message = true;
//     setErrors(newErrors);
//   };

//   return (
//     <div className="bg-[#141414] min-h-screen flex items-center justify-center px-6 py-20">
//       <div className="w-full max-w-6xl text-white">
//         {/* HEADER */}
//         <div className="text-center mb-16">
//           <h5 className="text-[#2ecc71] uppercase text-sm tracking-[3px] mb-3 font-semibold">
//             Contact Us
//           </h5>
//           <h2 className="text-4xl md:text-5xl font-bold leading-snug">
//             Reach out for a new project or just <br /> say hello
//           </h2>
//         </div>

//         {/* CONTACT BOX */}
//         <div className="grid grid-cols-1 md:grid-cols-2 bg-[#111] rounded-lg overflow-hidden shadow-xl">
//           {/* LEFT FORM */}
//           <div className="px-10 py-12 md:py-16 border-b md:border-b-0 md:border-r border-[#232222]">
//             <h3 className="text-xs tracking-[2px] uppercase mb-10 font-semibold text-gray-200">
//               Send Us a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-7">
//               <div>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                   className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] transition"
//                 />
//                 {errors.name && (
//                   <span className="inline-block mt-2 bg-[#2ecc71] text-black text-[10px] font-bold px-3 py-[2px] uppercase tracking-wider">
//                     This field is required.
//                   </span>
//                 )}
//               </div>

//               <div>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Your Email"
//                   className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] transition"
//                 />
//                 {errors.email && (
//                   <span className="inline-block mt-2 bg-[#2ecc71] text-black text-[10px] font-bold px-3 py-[2px] uppercase tracking-wider">
//                     This field is required.
//                   </span>
//                 )}
//               </div>

//               <div>
//                 <input
//                   type="text"
//                   name="subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   placeholder="Subject"
//                   className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] transition"
//                 />
//               </div>

//               <div>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Your Message"
//                   className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 h-28 resize-none focus:outline-none focus:border-[#2ecc71] transition"
//                 ></textarea>
//                 {errors.message && (
//                   <span className="inline-block mt-2 bg-[#2ecc71] text-black text-[10px] font-bold px-3 py-[2px] uppercase tracking-wider">
//                     This field is required.
//                   </span>
//                 )}
//               </div>

//               <button
//                 type="submit"
//                 className="w-full bg-[#2ecc71] text-black font-semibold py-3 rounded-sm text-sm tracking-[2px] uppercase hover:bg-[#27ae60] transition"
//               >
//                 Submit
//               </button>
//             </form>
//           </div>

//           {/* RIGHT INFO */}
//           <div className="px-10 py-12 md:py-16 bg-[#0c0c0c]">
//             <h3 className="text-xs tracking-[2px] uppercase mb-10 font-semibold text-gray-200">
//               Contact Info
//             </h3>

//             <div className="space-y-10  text-gray-300 text-sm">
//               <div>
//                 <h4 className="text-[#2ecc71] font-semibold mb-2">
//                   Where to Find Us
//                 </h4>
//                 <p>
//                   1600 Amphitheatre Parkway
//                   <br />
//                   Mountain View, CA
//                   <br />
//                   94043 US
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-[#2ecc71] font-semibold mb-2">
//                   Email Us At
//                 </h4>
//                 <p>
//                   contact@glintsite.com
//                   <br />
//                   info@glintsite.com
//                 </p>
//               </div>

//               <div>
//                 <h4 className="text-[#2ecc71] font-semibold mb-2">
//                   Call Us At
//                 </h4>
//                 <p>
//                   Phone: (+63) 555 1212
//                   <br />
//                   Mobile: (+63) 555 0100
//                   <br />
//                   Fax: (+63) 555 0101
//                 </p>
//               </div>

//               <div className="flex space-x-6 pt-2 text-lg">
//                 <FaFacebookF className="hover:text-[#2ecc71] cursor-pointer transition" />
//                 <FaTwitter className="hover:text-[#2ecc71] cursor-pointer transition" />
//                 <FaInstagram className="hover:text-[#2ecc71] cursor-pointer transition" />
//                 <FaBehance className="hover:text-[#2ecc71] cursor-pointer transition" />
//                 <FaDribbble className="hover:text-[#2ecc71] cursor-pointer transition" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }












"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBehance,
  FaDribbble,
} from "react-icons/fa";

// ✅ Type definitions
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: boolean;
  email?: boolean;
  message?: boolean;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  // ✅ Change Handler with type
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Submit Handler with type
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = true;
    if (!formData.email) newErrors.email = true;
    if (!formData.message) newErrors.message = true;

    setErrors(newErrors);

    // ✅ Optional: console log for debugging
    if (Object.keys(newErrors).length === 0) {
      console.log("✅ Form submitted successfully:", formData);
    }
  };

  return (
    <div className="bg-[#141414] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl text-white">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h5 className="text-[#2ecc71] uppercase text-sm tracking-[3px] mb-3 font-semibold">
            Contact Us
          </h5>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Reach out for a new project or just <br /> say hello
          </h2>
        </div>

        {/* CONTACT BOX */}
        <div className="grid grid-cols-1 md:grid-cols-2 bg-[#111] rounded-lg overflow-hidden shadow-xl">
          {/* LEFT FORM */}
          <div className="px-10 py-12 md:py-16 border-b md:border-b-0 md:border-r border-[#232222]">
            <h3 className="text-xs tracking-[2px] uppercase mb-10 font-semibold text-gray-200">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] transition"
                />
                {errors.name && (
                  <span className="inline-block mt-2 bg-[#2ecc71] text-black text-[10px] font-bold px-3 py-[2px] uppercase tracking-wider">
                    This field is required.
                  </span>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] transition"
                />
                {errors.email && (
                  <span className="inline-block mt-2 bg-[#2ecc71] text-black text-[10px] font-bold px-3 py-[2px] uppercase tracking-wider">
                    This field is required.
                  </span>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 focus:outline-none focus:border-[#2ecc71] transition"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b border-[#333] py-3 text-sm placeholder-gray-400 h-28 resize-none focus:outline-none focus:border-[#2ecc71] transition"
                ></textarea>
                {errors.message && (
                  <span className="inline-block mt-2 bg-[#2ecc71] text-black text-[10px] font-bold px-3 py-[2px] uppercase tracking-wider">
                    This field is required.
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#2ecc71] text-black font-semibold py-3 rounded-sm text-sm tracking-[2px] uppercase hover:bg-[#27ae60] transition"
              >
                Submit
              </button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="px-10 py-12 md:py-16 bg-[#0c0c0c]">
            <h3 className="text-xs tracking-[2px] uppercase mb-10 font-semibold text-gray-200">
              Contact Info
            </h3>

            <div className="space-y-10 text-gray-300 text-sm">
              <div>
                <h4 className="text-[#2ecc71] font-semibold mb-2">
                  Where to Find Us
                </h4>
                <p>
                  1600 Amphitheatre Parkway
                  <br />
                  Mountain View, CA
                  <br />
                  94043 US
                </p>
              </div>

              <div>
                <h4 className="text-[#2ecc71] font-semibold mb-2">
                  Email Us At
                </h4>
                <p>
                  contact@glintsite.com
                  <br />
                  info@glintsite.com
                </p>
              </div>

              <div>
                <h4 className="text-[#2ecc71] font-semibold mb-2">
                  Call Us At
                </h4>
                <p>
                  Phone: (+63) 555 1212
                  <br />
                  Mobile: (+63) 555 0100
                  <br />
                  Fax: (+63) 555 0101
                </p>
              </div>

              <div className="flex space-x-6 pt-2 text-lg">
                <FaFacebookF className="hover:text-[#2ecc71] cursor-pointer transition" />
                <FaTwitter className="hover:text-[#2ecc71] cursor-pointer transition" />
                <FaInstagram className="hover:text-[#2ecc71] cursor-pointer transition" />
                <FaBehance className="hover:text-[#2ecc71] cursor-pointer transition" />
                <FaDribbble className="hover:text-[#2ecc71] cursor-pointer transition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

