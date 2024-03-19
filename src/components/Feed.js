// Feed.js
import React from "react";
import "./Feed.css";

const getRandomImage = () => {
  const images = [
    "https://picsum.photos/2300",
    "https://picsum.photos/2200",
    "https://picsum.photos/2100",
    "https://picsum.photos/2000",
    "https://picsum.photos/1900",
    "https://picsum.photos/1800",
    "https://picsum.photos/1700",
    "https://picsum.photos/1600",
    "https://picsum.photos/1500",
    "https://picsum.photos/1400",
    "https://picsum.photos/1300",
    "https://picsum.photos/1200",
    "https://picsum.photos/1100",
    "https://picsum.photos/1000",
    "https://picsum.photos/900",
    "https://picsum.photos/800",
    "https://picsum.photos/700",
    "https://picsum.photos/600",
    "https://picsum.photos/500",
    "https://picsum.photos/400",
    "https://picsum.photos/300",
    // Add more placeholder image URLs as needed
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

const Feed = () => {
  const trips = [
    {
      type: "Tourism",
      title: "Discover the Wonders of Tokyo",
      description:
        "Experience the blend of traditional and modern in Japan's bustling capital.",
    },
    {
      type: "Therapeutic",
      title: "Wellness Retreat in the Maldives",
      description:
        "Recharge your mind and body surrounded by crystal-clear waters and white sandy beaches.",
    },
    {
      type: "Religious",
      title: "Sacred Pilgrimage to Mecca",
      description:
        "Embark on a spiritual journey to the holiest city in Islam.",
    },
    {
      type: "Studying",
      title: "Art and History Exploration in Florence",
      description:
        "Immerse yourself in the Renaissance art and architecture of Florence, Italy.",
    },
    {
      type: "Tourism",
      title: "Adventurous Safari in Serengeti National Park",
      description:
        "Witness the incredible wildlife of Africa on a thrilling safari adventure.",
    },
    {
      type: "Therapeutic",
      title: "Yoga Retreat in the Himalayas",
      description:
        "Find peace and tranquility surrounded by the majestic mountains of the Himalayas.",
    },
    {
      type: "Religious",
      title: "Cultural Experience in Varanasi",
      description:
        "Explore the spiritual and cultural richness of the holy city of Varanasi, India.",
    },
    {
      type: "Studying",
      title: "Archaeological Expedition to Athens",
      description:
        "Delve into the ancient history of Greece with a study tour in Athens.",
    },
    {
      type: "Tourism",
      title: "Scenic Road Trip along the Amalfi Coast",
      description:
        "Drive along the stunning Amalfi Coast, exploring picturesque towns and coastal views.",
    },
    {
      type: "Therapeutic",
      title: "Hot Springs Retreat in Iceland",
      description:
        "Relax in geothermal hot springs surrounded by Iceland's otherworldly landscapes.",
    },
    {
      type: "Religious",
      title: "Journey to the Western Wall in Jerusalem",
      description:
        "Visit the Western Wall, one of the holiest sites in Judaism, in the heart of Jerusalem.",
    },
    {
      type: "Studying",
      title: "Literary Tour of Oxford",
      description:
        "Discover the literary history of Oxford, exploring the haunts of famous authors.",
    },
    {
      type: "Tourism",
      title: "Cruise the Norwegian Fjords",
      description:
        "Sail through the breathtaking fjords of Norway, surrounded by majestic landscapes.",
    },
    {
      type: "Therapeutic",
      title: "Meditation Retreat in Bali",
      description:
        "Reconnect with nature and inner peace through guided meditation in Bali.",
    },
    {
      type: "Religious",
      title: "Pilgrimage to Lourdes",
      description:
        "Experience the healing atmosphere of Lourdes, a significant Catholic pilgrimage site.",
    },
    {
      type: "Studying",
      title: "History and Culture in Kyoto",
      description:
        "Explore the traditional side of Japan with a focus on history and culture in Kyoto.",
    },
    {
      type: "Tourism",
      title: "Island Hopping in Greece",
      description:
        "Hop between the enchanting Greek islands, each with its own unique charm.",
    },
    {
      type: "Therapeutic",
      title: "Ayurvedic Retreat in Kerala",
      description:
        "Experience the healing traditions of Ayurveda in the serene landscapes of Kerala, India.",
    },
    {
      type: "Religious",
      title: "Camino de Santiago Pilgrimage",
      description:
        "Embark on the famous Camino de Santiago, a historic pilgrimage route in Spain.",
    },
    {
      type: "Studying",
      title: "Science Exploration in CERN",
      description:
        "Uncover the mysteries of particle physics with a visit to CERN in Geneva, Switzerland.",
    },
    {
      type: "Tourism",
      title: "Magical Adventure in Santorini",
      description:
        "Experience the charm of Santorini with its iconic white-washed buildings, breathtaking sunsets, and crystal-clear blue waters.",
    },
  ];

  const tripTypes = ["Tourism", "Therapeutic", "Religious", "Studying"];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle the search form submission
    // You can access the form values using e.target.elements
  };

  return (
    <div className="feed-container">
      <div className="banner">
        <h1>Find Your Perfect Trip</h1>
        <form onSubmit={handleSubmit} className="search-container">
          <div className="form-group">
            <label>Trip Type:</label>
            <select name="tripType">
              {tripTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="search-sub-container">
            <div className="form-group form-group-streched-input">
              <label>From:</label>
              <input
                type="text"
                name="fromLocation"
                placeholder="Enter location"
                className="form-group-streched-input"
              />
            </div>
            <div className="form-group form-group-streched-input">
              <label>Destination:</label>
              <input
                type="text"
                name="destination"
                placeholder="Enter destination"
                className="form-group-streched-input"
              />
            </div>
          </div>

          <div className="search-sub-container">
            <div className="form-group form-group-streched-input">
              <label>Date From:</label>
              <input
                type="date"
                name="dateFrom"
                className="form-group-streched-input"
              />
            </div>
            <div className="form-group form-group-streched-input">
              <label>Date To:</label>
              <input
                type="date"
                name="dateTo"
                className="form-group-streched-input"
              />
            </div>
          </div>

          <button type="submit">Search</button>
        </form>
      </div>




      <h2 className="section-title">Companies</h2>
      <div className="companies-container">
        {/* Company 1 */}
        <div className="company-card">
          <img src="https://picsum.photos/300" alt="company 1" />
          <div className="company-info">
            <h3>EXPOLRE TRIPS WITH</h3>
            <p>Al-Raaid</p>
          </div>
        </div>

        {/* company 2 */}
        <div className="company-card">
          <img src="https://picsum.photos/301" alt="company 2" />
          <div className="company-info">
            <h3>EXPOLRE TRIPS WITH</h3>
            <p>Baghdad Co</p>
          </div>
        </div>

        {/* company 3 */}
        <div className="company-card">
          <img src="https://picsum.photos/302" alt="company 3" />
          <div className="company-info">
            <h3>EXPOLRE TRIPS WITH</h3>
            <p>Erbil Travel</p>
          </div>
        </div>

        {/* company 4 */}
        <div className="company-card">
          <img src="https://picsum.photos/303" alt="company 4" />
          <div className="company-info">
            <h3>EXPOLRE TRIPS WITH</h3>
            <p>Mama mia</p>
          </div>
        </div>

        {/* company 4 */}
        <div className="company-card">
          <img src="https://picsum.photos/304" alt="company 4" />
          <div className="company-info">
            <h3>EXPOLRE TRIPS WITH</h3>
            <p>Travelaco</p>
          </div>
        </div>

        {/* company 6 */}
        <div className="company-card">
          <img src="https://picsum.photos/305" alt="company 4" />
          <div className="company-info">
            <h3>EXPOLRE TRIPS WITH</h3>
            <p>Al-Naser</p>
          </div>
        </div>
      </div>

      
      <h2 className="section-title">Trips</h2>
      <div className="trips-container">
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <img src={getRandomImage()} alt={`Trip ${index + 1}`} />
            <h2>{trip.type} Trip</h2>
            <p>{trip.title}</p>
            <p>{trip.description}</p>
          </div>
        ))}
      </div>


      <h2 className="section-title">Trending cities</h2>
      <div className="cities-container">
        {/* City 1 */}
        <div className="city-card">
          <img src="https://picsum.photos/300" alt="City 1" />
          <div className="city-info">
            <h3>FIND TRIPS TO</h3>
            <p>Najaf</p>
          </div>
        </div>

        {/* City 2 */}
        <div className="city-card">
          <img src="https://picsum.photos/301" alt="City 2" />
          <div className="city-info">
            <h3>FIND TRIPS TO</h3>
            <p>Karbalaa</p>
          </div>
        </div>

        {/* City 3 */}
        <div className="city-card">
          <img src="https://picsum.photos/302" alt="City 3" />
          <div className="city-info">
            <h3>FIND TRIPS TO</h3>
            <p>Erbil</p>
          </div>
        </div>

        {/* City 4 */}
        <div className="city-card">
          <img src="https://picsum.photos/303" alt="City 4" />
          <div className="city-info">
            <h3>FIND TRIPS TO</h3>
            <p>Dubai</p>
          </div>
        </div>

        {/* City 5 */}
        <div className="city-card">
          <img src="https://picsum.photos/304" alt="City 5" />
          <div className="city-info">
            <h3>FIND TRIPS TO</h3>
            <p>Duhok</p>
          </div>
        </div>

        {/* City 6 */}
        <div className="city-card">
          <img src="https://picsum.photos/305" alt="City 6" />
          <div className="city-info">
            <h3>FIND TRIPS TO</h3>
            <p>Dublin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
