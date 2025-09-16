import React from "react";

const Community = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16 px-6 md:px-20">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-emerald-700">
          Community & Collaboration
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          A living digital archive, shaped by contributions from monks, local
          communities, historians, and visitors. Share your memories, upload
          artifacts, or help preserve Sikkim’s monastery heritage.
        </p>
      </div>

      {/* Contribution Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Oral Histories */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-emerald-700">
            📖 Contribute Oral Histories
          </h2>
          <p className="mt-3 text-gray-600">
            Help us record stories, chants, and personal experiences related to
            monasteries. Upload audio, text, or videos for future generations.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
              Upload Story
            </button>
            <button className="px-4 py-2 bg-gray-100 text-emerald-700 rounded-xl hover:bg-gray-200 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Photos & Artifacts */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-emerald-700">
            🖼️ Share Photos & Artifacts
          </h2>
          <p className="mt-3 text-gray-600">
            Have old monastery photos, thangkas, manuscripts, or artifacts? Scan
            and upload them to our digital archive to make them accessible to
            all.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
              Upload Image
            </button>
            <button className="px-4 py-2 bg-gray-100 text-emerald-700 rounded-xl hover:bg-gray-200 transition">
              View Guidelines
            </button>
          </div>
        </div>

        {/* Research & Documentation */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-emerald-700">
            📚 Collaborate on Research
          </h2>
          <p className="mt-3 text-gray-600">
            Historians, linguists, and students can contribute research papers,
            translations, and historical documentation.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
              Submit Paper
            </button>
            <button className="px-4 py-2 bg-gray-100 text-emerald-700 rounded-xl hover:bg-gray-200 transition">
              Join Research Forum
            </button>
          </div>
        </div>

        {/* Community Training */}
        <div className="bg-white p-8 rounded-2xl shadow hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold text-emerald-700">
            🤝 Local Guardian Training
          </h2>
          <p className="mt-3 text-gray-600">
            We provide digital training for monks and community members to
            archive materials, digitize content, and safeguard local heritage.
          </p>
          <div className="mt-5 flex gap-3">
            <button className="px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition">
              Request Training
            </button>
            <button className="px-4 py-2 bg-gray-100 text-emerald-700 rounded-xl hover:bg-gray-200 transition">
              Volunteer
            </button>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="text-center mt-16">
        <h2 className="text-2xl font-bold text-gray-800">
          Together, we can preserve Sikkim’s monastic legacy.
        </h2>
        <button className="mt-6 px-6 py-3 bg-emerald-600 text-white text-lg rounded-xl shadow hover:bg-emerald-700 transition">
          Start Contributing
        </button>
      </div>
    </div>
  );
};

export default Community;
