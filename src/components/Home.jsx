"use client";

import Link from "next/link";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero / Banner Section */}
      <section className="relative bg-gray-100 h-[90vh] flex items-center justify-center">
        {/* Background image + overlay */}
        <div className="absolute inset-0">
          <img
            src="/images/banner.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Learn, Grow & Succeed
          </h1>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Join thousands of students and take your skills to the next level.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link
              href="/courses"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Explore Courses
            </Link>
            <Link
              href="/auth/register"
              className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Why CourseMaster?</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Access world-class courses, track your progress, and learn from top instructors.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
            <p className="text-gray-600">Learn from professionals with real-world experience.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-600">Learn at your own pace, anytime, anywhere.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Certifications</h3>
            <p className="text-gray-600">Earn certificates to showcase your skills.</p>
          </div>
        </div>
      </section>
    </>
  );
}
