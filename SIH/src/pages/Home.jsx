import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Feature Card
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
    <h3 className="text-xl md:text-xl font-bold text-indigo-600 flex items-center gap-2">{icon} {title}</h3>
    <p className="mt-3 text-gray-600 text-sm md:text-base">{description}</p>
  </div>
);

// Review Card
const ReviewCard = ({ img, name, text }) => (
  <div className="flex-shrink-0 bg-white p-6 rounded-3xl shadow-lg min-w-[280px] md:min-w-[300px] text-center hover:scale-105 transition-transform duration-300">
    <img
      src={img}
      alt={name}
      className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-indigo-600"
    />
    <p className="mt-4 text-gray-700 italic text-sm md:text-base">"{text}"</p>
    <p className="mt-4 font-semibold text-indigo-600 text-sm md:text-base">{name}</p>
  </div>
);




const Home = () => {
  const features = [
    { icon: "🌄", title: "Virtual Tours", description: "Walk through monastery interiors, prayer halls, and sacred relic rooms in stunning 360° panoramas." },
    { icon: "📜", title: "Digital Archives", description: "Access digitized manuscripts, murals, and artifacts for research, learning, and global appreciation." },
    { icon: "🎉", title: "Cultural Calendar", description: "Stay updated on festivals, teachings, and rituals with our interactive cultural event listings." },
    { icon: "🎧", title: "Audio Narration", description: "Listen to stories, chants, and history narrated by monks for a fully immersive experience." },
    { icon: "🗺️", title: "Interactive Maps", description: "Explore monasteries geographically with detailed maps and points of interest." },
    { icon: "🤝", title: "Community & Learning", description: "Engage with a global community, join discussions, and access educational resources." },
  ];

  const reviews = [
    { text: "Amazing experience! Felt like I was really inside the monasteries.", name: "Lama Tenzin", img: "1.png" },
    { text: "The virtual tours are breathtaking and highly immersive.", name: "Lama Dalai", img: "2.png" },
    { text: "Loved exploring rare digital archives and cultural events online.", name: "Lama Pema", img: "3.png" },
    { text: "A perfect blend of heritage and technology.", name: "Yaswanth Reddy", img: "4.jpg" },
    { text: "The cultural insights were eye-opening and beautifully presented.", name: "Narendra Modi", img: "5.png" },
  ];

  // Monastery slideshow images
  const monasteryImages = [
    "buddha.png",
    "rumtek.jpg",
    "logo.png",
    "Pemayangtse.png",
    "Tashiding.png"
  ];

  // State and effect for slideshow
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % monasteryImages.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const [email, setEmail] = useState("");
const [message, setMessage] = useState("");

const handleSubscribe = async () => {
  if (!email) return setMessage("Please enter a valid email");

  try {
    const res = await fetch("http://localhost:5000/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.message); // show success/failure message
    setEmail(""); // clear input
  } catch (err) {
    setMessage("Something went wrong. Try again!");
  }
};

  return (
    <div className="bg-gradient-to-b from-indigo-50 via-white to-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
        style={{ backgroundImage: "url('/cover.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
              Discover Monasteries<br />Like Never Before
            </h1>
            <p className="mt-4 text-base md:text-lg text-gray-200 max-w-3xl mx-auto">
              Immerse yourself in the sacred monasteries of Sikkim with 360° tours, cultural stories, and spiritual experiences.
            </p>
            <div className="mt-8 flex justify-center gap-6 flex-wrap">
              <Link
                to="/virtual-tour"
                className="bg-indigo-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1 text-sm md:text-base"
              >
                Start Virtual Tour
              </Link>
              <Link
                to="/explore"
                className="bg-white text-indigo-700 px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-100 transition-all transform hover:-translate-y-1 text-sm md:text-base"
              >
                Explore Monasteries
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission */}
<section className="relative py-20 px-6 md:px-20 text-center bg-gradient-to-r from-white via-indigo-50 to-white overflow-hidden">
  {/* Decorative glow */}
  <div className="absolute -top-16 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl"></div>

  <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
    Preserving Heritage Digitally
  </h2>
  <p className="mt-6 text-gray-600 max-w-4xl mx-auto text-sm md:text-base">
    Monastery360 combines technology and spirituality to bring Sikkim’s sacred
    monasteries to the world. Experience 360° tours, cultural archives, rituals,
    and stories from ancient monks — all online.
  </p>

  <div className="mt-12 w-full max-w-3xl mx-auto overflow-hidden rounded-3xl shadow-xl border-8 border-indigo-200">
    <img
      src={monasteryImages[currentIndex]}
      alt="Monastery"
      className="w-full h-[420px] object-cover rounded-2xl transition-all duration-700 hover:scale-105"
    />
  </div>
</section>



      {/* Features Section */}
      <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-white to-indigo-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-700 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} {...feature} />
          ))}
        </div>
      </section>

      {/* Storytelling Section */}
<section className="py-16 px-6 md:px-20 text-center bg-gradient-to-b from-gray-50 to-white">
  <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
    Experience Monastic Life
  </h2>
  <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-sm md:text-base">
    Explore rituals, meditation, and the serene daily life of monks. Feel the
    spiritual ambiance through immersive visuals and storytelling.
  </p>

  {/* Image Grid */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border-4 border-green-200">
      <img
        src="prayer.png"
        alt="Monk 1"
        className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
        Rituals & Prayers
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl shadow-lg border-4 border-green-200">
      <img
        src="meditation.png"
        alt="Monk 2"
        className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
        Meditation
      </div>
    </div>

    <div className="group relative overflow-hidden rounded-2xl shadow-lg border-4 border-green-200">
      <img
        src="monastic.jpg"
        alt="Monk 3"
        className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition">
        Daily Monastic Life
      </div>
    </div>
  </div>
</section>

      {/* Call To Action */}
      <section className="relative py-20 px-6 md:px-20 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white overflow-hidden rounded-3xl shadow-2xl">
  {/* Decorative background circles */}
  <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
  <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl"></div>

  <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
    Begin Your Spiritual Journey Today
  </h2>
  <p className="mt-4 max-w-2xl mx-auto text-gray-200 text-sm md:text-base">
    Explore Sikkim’s monasteries from anywhere in the world with immersive digital tours.
  </p>

  <Link
    to="/map"
    className="mt-8 inline-block bg-white text-indigo-700 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
  >
    Explore the Map
  </Link>
</section>



      {/* Reviews Section */}
      {/* Reviews Section */}
<section className="py-16 bg-indigo-50 overflow-hidden relative">
  <h2 className="text-3xl md:text-4xl font-bold text-indigo-700 text-center mb-12">
    What Visitors Say
  </h2>
  <div className="relative w-full overflow-hidden">
    <div className="flex space-x-6 min-w-max animate-marquee">
      {[...reviews, ...reviews].map((review, idx) => ( // ✅ duplicate array for seamless loop
        <ReviewCard key={idx} {...review} />
      ))}
    </div>
  </div>
  <style>
    {`
      @keyframes marquee { 
        0% { transform: translateX(0); } 
        100% { transform: translateX(-50%); } 
      }
      .animate-marquee { 
        animation: marquee 35s linear infinite; 
      }
    `}
  </style>
</section>


      {/* Newsletter Section */}
      {/* Newsletter Section */}
<section className="relative py-20 px-6 md:px-20 text-center bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-800 text-white overflow-hidden rounded-t-3xl shadow-2xl">
  {/* Decorative background circles */}
  <div className="absolute -top-16 -left-16 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
  <div className="absolute -bottom-20 -right-20 w-52 h-52 bg-purple-400/20 rounded-full blur-3xl"></div>

  <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide drop-shadow-lg">
    Stay Connected ✨
  </h2>
  <p className="mt-4 max-w-3xl mx-auto text-gray-200 text-sm md:text-base">
    Be the first to know about new monasteries, festivals, and immersive virtual tours.
  </p>

  {/* Input + Button */}
  <div className="mt-8 flex justify-center items-center gap-3 flex-wrap">
    <div className="relative w-full md:w-96">
 <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl drop-shadow-lg">
    📧
  </span>
  <input
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="pl-12 pr-4 py-3 w-full rounded-2xl bg-white/10 text-white placeholder:text-white border border-white/30 focus:bg-white/20 focus:ring-2 focus:ring-indigo-400 focus:outline-none shadow-md transition-all duration-300"
/>

    </div>
    <button
  onClick={handleSubscribe}
  className="bg-white text-indigo-700 px-8 py-3 rounded-2xl font-semibold shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
>
  Subscribe
</button>
{message && <p className="mt-2 text-white">{message}</p>}

  </div>

  {/* Small note */}
  <p className="mt-4 text-xs text-gray-300">No spam. Unsubscribe anytime.</p>
</section>

    </div>
  );
};

export default Home;
