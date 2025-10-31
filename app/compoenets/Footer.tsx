"use client";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-400 px-6 md:px-20 py-16 font-sans">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#39b54a] mb-6">Glint.</h2>
          <p className="leading-relaxed text-gray-600">
            Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh
            pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non
            nisi. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla
            porttitor accumsan tincidunt. Nulla porttitor accumsan tincidunt. Quaerat
            voluptas autem necessitatibus vitae aut.
          </p>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get Notified</h3>
          <p className="mb-6 leading-relaxed text-gray-600">
            Quia quo qui sed odit. Quaerat voluptas autem necessitatibus vitae aut non alias
            sed quia. Ut itaque enim optio ut excepturi deserunt iusto porro.
          </p>

          {/* Subscribe Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row items-stretch"
          >
            <div className="flex items-center bg-[#111111] px-4 py-3  flex-grow">
              <Mail className="w-5 h-5 text-white mr-3" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none text-gray-200 w-full placeholder-gray-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#39b54a] hover:bg-[#2d9d3e] text-white uppercase tracking-wider font-semibold px-6 py-3 text-sm transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        © Copyright Glint 2017 &nbsp; | &nbsp; Site Template by{" "}
        <span className="text-white">Colorlib</span>
      </div>
    </footer>
  );
}
