import React, { useState } from 'react';
import './DriverPage.css';

import {
  FaChevronDown,
  FaWallet,
  FaClock,
  FaLocationArrow
} from 'react-icons/fa';

/* ================= LOCATION DATA ================= */

const locationData = {
  TamilNadu: {
    "Ariyalur": ["Ariyalur", "Andimadam", "Sendurai", "Udayarpalayam", "Jayankondam", "T.Palur"],

    "Chengalpattu": ["Chengalpattu", "Madurantakam", "Cheyyur", "Thirukazhukundram", "Tirupporur"],

    "Coimbatore": ["Pollachi", "Mettupalayam", "Anaimalai", "Kinathukadavu", "Valparai", "Sulur", "Perur"],

    "Cuddalore": ["Cuddalore", "Chidambaram", "Neyveli", "Panruti", "Vridhachalam", "Tittakudi", "Veppur"],

    "Dharmapuri": ["Dharmapuri", "Harur", "Palacode", "Pennagaram", "Pappireddipatti", "Marandahalli", "Karimangalam", "Nallampalli"],

    "Dindigul": ["Dindigul", "Palani", "Oddanchatram", "Nilakottai", "Vedasandur", "Natham", "Kodaikanal (Outer)", "Gujiliamparai"],

    "Erode": ["Erode", "Gobichettipalayam", "Sathyamangalam", "Perundurai", "Bhavani", "Kodumudi", "Anthiyur", "Ammapettai", "Thalavadi"],

    "Kallakurichi": ["Kallakurichi", "Ulundurpet", "Sankarapuram", "Thirukovilur", "Chinnasalem"],

    "Kanchipuram": ["Kanchipuram", "Sriperumbudur", "Uthiramerur", "Walajabad", "Kunrathur (Outer)"],

    "Kanyakumari": ["Nagercoil", "Padmanabhapuram", "Kuzhithurai"],

    "Karur": ["Karur", "Kulithalai", "Aravakurichi", "Krishnarayapuram", "Pugalur", "Kadavur"],

    "Krishnagiri": ["Krishnagiri", "Denkanikottai", "Bargur", "Kaveripattinam", "Uthangarai", "Hosur (Outer)"],

    "Madurai": ["Madurai", "Melur", "Usilampatti", "Thirumangalam", "Vadipatti", "Alanganallur", "T.Kallupatti"],

    "Mayiladuthurai": ["Mayiladuthurai", "Sirkazhi", "Tharangambadi", "Kuthalam"],

    "Nagapattinam": ["Nagapattinam", "Velankanni", "Kilvelur", "Vedaranyam", "Thalainayar"],

    "Namakkal": ["Namakkal", "Rasipuram", "Tiruchengode", "Paramathi Velur", "Sendamangalam", "Kolli Hills", "Komarapalayam", "Mohanur"],

    "Nilgiris": ["Ooty (Outer)", "Coonoor", "Kotagiri", "Gudalur", "Ketti", "Muthorai Palada"],

    "Perambalur": ["Perambalur", "Kunnam", "Veppanthattai", "Alathur"],

    "Pudukkottai": ["Pudukkottai", "Aranthangi", "Alangudi", "Keeranur", "Avudaiyarkoil", "Thirumayam"],

    "Ramanathapuram": ["Ramanathapuram", "Paramakudi", "Rameswaram (Outer)", "Keelakarai"],

    "Ranipet": ["Ranipet", "Arcot", "Walajapet", "Arakkonam", "Kalavai"],

    "Salem": ["Salem", "Mettur", "Attur", "Omalur", "Edappadi", "Sankagiri", "Gangavalli"],

    "Sivaganga": ["Karaikudi", "Devakottai", "Manamadurai", "Ilayangudi", "Tirupathur", "Kalayarkoil"],

    "Tenkasi": ["Tenkasi", "Sankarankovil", "Alangulam", "Kadayanallur", "Puliyangudi", "Surandai"],

    "Thanjavur": ["Thanjavur", "Kumbakonam", "Papanasam", "Orathanadu", "Thiruvaiyaru", "Pattukkottai", "Peravurani"],

    "Theni": ["Theni", "Cumbum", "Chinnamanur", "Uthamapalayam", "Bodinayakanur"],

    "Thoothukudi": ["Thoothukudi", "Kovilpatti", "Tiruchendur", "Sathankulam", "Ettayapuram"],

    "Tiruchirappalli": ["Tiruchirappalli", "Manapparai", "Lalgudi", "Musiri", "Thuraiyur", "Thottiyam", "Manachanallur"],

    "Tirunelveli": ["Tirunelveli", "Ambasamudram", "Nanguneri", "Palayamkottai", "Alwarkurichi"],

    "Tirupathur": ["Tirupathur", "Jolarpet", "Alangayam", "Vaniyambadi (Outer)", "Natrampalli"],

    "Tiruppur": ["Tiruppur", "Dharapuram", "Udumalpet", "Avinashi", "Kangeyam", "Palladam", "Madathukulam"],

    "Tiruvallur": ["Tiruvallur", "Ponneri", "Poonamallee (Outer)", "Gummidipoondi", "Minjur"],

    "Tiruvannamalai": ["Tiruvannamalai", "Arani", "Polur", "Chengam", "Vandavasi", "Cheyyar"],

    "Tiruvarur": ["Tiruvarur", "Thiruthuraipoondi", "Mannargudi", "Needamangalam", "Kodavasal"],

    "Vellore": ["Vellore", "Gudiyatham", "Ambur", "Katpadi", "Pernambut"],

    "Viluppuram": ["Viluppuram", "Tindivanam", "Gingee", "Thiruvennainallur", "Kandachipuram"],

    "Virudhunagar": ["Virudhunagar", "Rajapalayam", "Sivakasi", "Srivilliputhur", "Aruppukottai", "Sattur"]
  },

  /* ================= TELANGANA ================= */
  Telangana: {
    "Adilabad": ["Adilabad", "Kagaznagar", "Bellampalli", "Luxettipet", "Mancherial"],

    "Bhadradri": ["Kothagudem", "Bhadrachalam", "Manuguru", "Palvancha"],

    "Hanamkonda": ["Hanamkonda", "Kazipet", "Hasanparthy", "Dharmasagar"],

    "Hyderabad": ["Ghatkesar", "Shamirpet", "Medchal", "Keesara", "Malkajgiri (Outer)"],

    "Jagtial": ["Jagtial", "Metpalli", "Mallapur", "Velgatur"],

    "Karimnagar": ["Karimnagar", "Jammikunta", "Huzurabad", "Manakondur"],

    "Khammam": ["Khammam", "Madhira", "Sathupalli", "Yellandu"],

    "Mahabubnagar": ["Mahabubnagar", "Jadcherla", "Narayanpet", "Devarakadra"],

    "Medak": ["Medak", "Siddipet (Outer)", "Narsapur", "Zaheerabad"],

    "Nalgonda": ["Nalgonda", "Miryalaguda", "Bhongir", "Kodad"],

    "Nizamabad": ["Nizamabad", "Armoor", "Bodhan"],

    "RangaReddy": ["Shadnagar", "Ibrahimpatnam", "Maheswaram", "Yacharam"],

    "Sangareddy": ["Sangareddy", "Patancheru", "Zaheerabad", "Narsapur"],

    "Siddipet": ["Siddipet", "Gajwel", "Husnabad"],

    "Warangal": ["Warangal", "Narsampet", "Wardhannapet", "Geesugonda"]
  },
  Karnataka: {
    "Bagalkot": ["Bagalkot", "Badami", "Bilagi", "Guledgudda", "Hungund", "Ilkal", "Jamkhandi", "Mudhol", "Rabkavi Banhatti", "Terdal"],

    "Ballari": ["Ballari", "Hampi (Outer areas)", "Kampli", "Sandur", "Siruguppa", "Hospet (Hosapete)", "Kudligi"],

    "Belagavi": ["Athani", "Chikkodi", "Gokak", "Mudalgi", "Nippani", "Khanapur", "Raybag"],

    "Bengaluru Rural": ["Devanahalli", "Hoskote", "Anekal (Outer)", "Nelamangala", "Kanakapura (Outer)", "Magadi"],

    "Bidar": ["Bidar", "Bhalki", "Basavakalyan", "Aurad"],

    "Chikkaballapura": ["Chikkaballapur", "Gauribidanur", "Gudibanda"],

    "Chikkamagaluru": ["Chikkamagaluru (Outer)", "Kadur", "Tarikere", "Sringeri", "Mudigere", "Kalasa"],

    "Chitradurga": ["Chitradurga", "Challakere", "Hiriyur", "Holalkere", "Hosadurga", "Molakalmuru"],

    "Dakshina Kannada": ["Belthangady", "Kadaba", "Puttur", "Sullia"],

    "Davangere": ["Davanagere", "Channagiri", "Harihara", "Honnali", "Jagalur"],

    "Dharwad": ["Dharwad", "Hubli (Outer)", "Kalghatgi", "Alnavar", "Annigeri", "Navalgund"],

    "Gadag": ["Gadag", "Ron", "Mundargi", "Shirahatti", "Nargund", "Laxmeshwar"],

    "Hassan": ["Hassan", "Arasikere", "Belur", "Channarayapatna", "Sakleshpura", "Hole-Narsipura"],

    "Haveri": ["Haveri", "Ranebennur", "Byadgi", "Hangal", "Hirekerur", "Savanur"],

    "Kodagu": ["Madikeri", "Virajpet", "Somwarpet", "Kushalnagar", "Ponnampet"],

    "Kolar": ["Kolar", "Malur", "Mulbagal", "Bangarpet", "K.G.F (Outer)", "Srinivaspur"],

    "Koppal": ["Koppal", "Gangavathi", "Kushtagi", "Yelburga", "Kanakagiri"],

    "Mandya": ["Mandya", "Nagamangala", "Pandavapura", "Srirangapatna", "Maddur (Outer)"],

    "Mysuru": ["Nanjangud", "Heggadadevanakote", "K.R. Nagar", "Hunsur", "Periyapatna"],

    "Raichur": ["Raichur", "Manvi", "Lingsugur", "Sindhanur", "Devadurga"],

    "Ramanagara": ["Ramanagara", "Kanakapura", "Magadi", "Channapatna", "Harohalli"],

    "Shivamogga": ["Shivamogga", "Bhadravati (Outer)", "Sagar", "Hosanagara", "Sorab", "Thirthahalli", "Shikaripura"],

    "Tumakuru": ["Tumakuru", "Sira", "Madhugiri", "Gubbi", "Kunigal", "Tiptur"],

    "Udupi": ["Udupi", "Kundapura", "Karkala", "Byndoor", "Hebri"],

    "Uttara Kannada": ["Karwar", "Kumta", "Sirsi", "Honavar", "Ankola", "Haliyal", "Mundgod"],

    "Vijayapura": ["Vijayapura", "Sindgi", "Basavana Bagewadi", "Indi"],

    "Yadgir": ["Yadgir", "Shahapur", "Shorapur", "Gurumitkal"]
  },

  AndhraPradesh: {
    "ASR": ["Rampa-chodavaram", "Paderu", "Narsipatnam (Outer)", "Araku Valley (Outer)"],

    "Anakapalli": ["Anakapalli", "Narsipatnam", "Payakaraopeta", "Chodavaram"],

    "Anantapur": ["Anantapur", "Guntakal", "Dharmavaram", "Penukonda", "Hindupur"],

    "Annamayya": ["Rayachoti", "Madanapalle", "Pileru", "Gurramkonda"],

    "Bapatla": ["Bapatla", "Addanki", "Chirala (Outer)", "Ponnur"],

    "Chittoor": ["Chittoor", "Kuppam", "Srikalahasti (Outer)", "Nagari", "Palamaner"],

    "East Godavari": ["Rajahmundry (Outer)", "Kakinada (Outer)", "Peddapuram", "Tuni"],

    "Eluru": ["Eluru", "Jangareddygudem", "Chintalapudi", "Kaikaluru"],

    "Guntur": ["Guntur", "Tenali (Outer)", "Piduguralla", "Sattenapalle", "Macherla"],

    "Kakinada": ["Kakinada", "Samalkota", "Pithapuram", "Yeleswaram"],

    "Krishna": ["Machilipatnam", "Gudivada", "Nuzvid", "Jaggaiahpet", "Avanigadda"],

    "Kurnool": ["Kurnool", "Nandyal (Outer)", "Adoni", "Yemmiganur", "Dhone"],

    "Nandyal": ["Nandyal", "Atmakur", "Allagadda", "Srisailam"],

    "NTR": ["Vijayawada (Outer)", "Nandigama", "Tiruvuru", "A. Konduru"],

    "Palnadu": ["Narasaraopet", "Chilakaluripet", "Gurazala", "Vinukonda"],

    "Prakasam": ["Ongole", "Markapuram", "Kanigiri", "Darsi", "Kandukur"],

    "Srikakulam": ["Srikakulam", "Ichchapuram", "Palasa", "Sompeta", "Tekkali"],

    "Nellore": ["Nellore", "Gudur", "Kavali", "Venkatagiri", "Kovvur"],

    "Tirupati": ["Tirupati (Outer)", "Srikalahasti", "Puttur", "Venkatagiri"],

    "Visakhapatnam": ["Anakapalli", "Bheemunipatnam", "Payakaraopeta", "Chodavaram"],

    "Vizianagaram": ["Vizianagaram", "Bobbili", "Salur", "Parvathipuram (Outer)"],

    "West Godavari": ["Bhimavaram", "Tadepalligudem", "Tanuku", "Palakollu"],

    "YSR Kadapa": ["Kadapa", "Proddatur", "Pulivendula", "Jammalamadugu"]
  },
  Kerala: {
    "Alappuzha": ["Chengannur", "Mavelikkara", "Kayamkulam (Outer)", "Ambalappuzha"],
    "Ernakulam": ["Perumbavoor", "Aluva (Outer)", "Muvattupuzha", "Paravur"],
    "Idukki": ["Thodupuzha", "Kattappana", "Painavu", "Kumily", "Peermade", "Nedumkandam"],
    "Kannur": ["Thalassery", "Payyannur", "Taliparamba", "Iritty", "Mattannur"],
    "Kasaragod": ["Kasaragod", "Kanhangad", "Nileshwar", "Manjeshwar"],
    "Kollam": ["Kottarakkara", "Karunagappally", "Punalur", "Paravur"],
    "Kottayam": ["Changanassery", "Palai", "Ettumanoor", "Vaikom"],
    "Kozhikode": ["Vatakara", "Koyilandy", "Ramanattukara"],
    "Malappuram": ["Tirur", "Ponnani", "Kondotty", "Valanchery"],
    "Palakkad": ["Ottappalam", "Mannarkkad", "Chittur-Thathamangalam", "Alathur"],
    "Pathanamthitta": ["Pathanamthitta", "Adoor", "Thiruvalla (Outer)", "Ranni"],
    "Thiruvananthapuram": ["Varkala", "Neyyattinkara", "Attingal", "Nedumangad"],
    "Thrissur": ["Irinjalakuda", "Chalakudy", "Kodungallur", "Kunnamkulam"],
    "Wayanad": ["Kalpetta", "Mananthavady", "Sulthan Bathery"]
  },

  Puducherry: {
    "Karaikal": ["Karaikal", "Nedungadu", "Kottucherry", "Neravy", "Tirunallar"],
    "Mahe": ["Mahe", "Palloor"],
    "Puducherry": ["Ariyankuppam", "Villianur", "Bahour", "Mannadipet", "Nettapakkam", "Karayambuthur"],
    "Yanam": ["Yanam (Outer areas)"]
  }
};

const DriverPage = () => {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [area, setArea] = useState("");
  const [dob, setDob] = useState("");

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  /* ================= HANDLE SUBMIT ================= */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !phone || !state || !district || !area || !dob) {
      alert("Please fill in all required fields.");
      return;
    }

    try {

      const response = await fetch('/api/driver-applications', {

        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          name,
          phone: `+91 ${phone}`,
          state,
          district,
          area,
          dob
        })

      });

      const data = await response.json();

      if (response.ok && data.success) {

        setPopupMessage(
          data.message || "Application submitted successfully!"
        );

        setShowPopup(true);

        setName("");
        setPhone("");
        setState("");
        setDistrict("");
        setArea("");
        setDob("");

      } else {

        setPopupMessage(
          data.message || "Failed to submit application"
        );

        setShowPopup(true);
      }

    } catch (err) {

      console.error("Submission error:", err);

      setPopupMessage(
        "Failed to connect to backend server"
      );

      setShowPopup(true);
    }
  };

  return (

    <div className="driver-page">

      {/* ================= HERO SECTION ================= */}

      <section className="driver-hero">

        <div className="driver-container">

          {/* ================= HERO CONTENT ================= */}

          <div className="driver-hero-content">

            <span className="hero-badge">
              PARTNER ONBOARDING
            </span>

            <h1 className="driver-title">
              Deliver the Future with DENDO
            </h1>

            <p className="driver-subtitle">
              Join the most advanced hyperlocal delivery network
              in South India. Set your own schedule and earn
              premium rates.
            </p>

          </div>

          {/* ================= FORM SECTION ================= */}

          <div className="driver-form-wrapper">

            <div className="driver-form-outline">

              <div className="driver-card">

                <div className="driver-form-container">

                  {/* ================= FORM HEADER ================= */}

                  <div className="form-header">

                    <h2 className="form-heading">
                      Driver Application
                    </h2>

                    <p className="form-subheading">
                      Complete your profile to start your journey with us.
                    </p>

                  </div>

                  {/* ================= FORM ================= */}

                  <form
                    onSubmit={handleSubmit}
                    className="driver-form"
                  >

                    {/* ================= POPUP ================= */}

                    {showPopup && (

                      <div className="popup-overlay">

                        <div className="popup-content">

                          <p>{popupMessage}</p>

                          <button
                            type="button"
                            className="popup-close"
                            onClick={() => setShowPopup(false)}
                          >
                            Close
                          </button>

                        </div>

                      </div>
                    )}

                    {/* ================= NAME ================= */}

                    <div className="form-group">

                      <label>Full Name</label>

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />

                    </div>

                    {/* ================= PHONE ================= */}

                    <div className="form-group">

                      <label>Phone Number</label>

                      <div className="phone-input-group">

                        <span className="country-code">
                          +91
                        </span>

                        <input
                          type="text"
                          placeholder="Mobile Number"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          required
                        />

                      </div>

                    </div>

                    {/* ================= TWO COLUMN ================= */}

                    <div className="two-column">

                      {/* STATE */}

                      <div className="form-group">

                        <label>State</label>

                        <div className="select-wrapper">

                          <select
                            value={state}
                            onChange={(e) => {
                              setState(e.target.value);
                              setDistrict("");
                            }}
                            required
                          >

                            <option value="">
                              Select State
                            </option>

                            {Object.keys(locationData).map((st) => (

                              <option
                                key={st}
                                value={st}
                              >
                                {st}
                              </option>

                            ))}

                          </select>

                          <FaChevronDown className="select-icon" />

                        </div>

                      </div>

                      {/* DISTRICT */}

                      <div className="form-group">

                        <label>District</label>

                        <div className="select-wrapper">

                          <select
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                            disabled={!state}
                            required
                          >

                            <option value="">
                              Select District
                            </option>

                            {state &&
                              Object.keys(locationData[state]).map((dist) => (

                                <option
                                  key={dist}
                                  value={dist}
                                >
                                  {dist}
                                </option>

                              ))
                            }

                          </select>

                          <FaChevronDown className="select-icon" />

                        </div>

                      </div>

                    </div>

                    {/* ================= AREA ================= */}

                    <div className="form-group">

                      <label>Area / Locality</label>

                      <input
                        type="text"
                        placeholder="Enter your area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                      />

                    </div>

                    {/* ================= DOB ================= */}

                    <div className="form-group">

                      <label>Date of Birth</label>

                      <input
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                      />

                    </div>

                    {/* ================= BUTTON ================= */}

                    <button
                      type="submit"
                      className="btn-start-journey"
                    >
                      Start Your Journey
                    </button>

                  </form>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= WHY DENDO SECTION ================= */}

      <section className="why-dendo">

        <h2 className="why-title">
          Why DENDO?
        </h2>

        <div className="why-line"></div>

        <div className="why-container">

          {/* CARD 1 */}

          <div className="why-card">

            <div className="why-icon-box">
              <FaWallet />
            </div>

            <h3>Weekly Payouts</h3>

            <p>
              Instant transfers every Monday morning directly
              to your linked bank account.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="why-card">

            <div className="why-icon-box">
              <FaClock />
            </div>

            <h3>Flexible Hours</h3>

            <p>
              Work whenever you want. Deliver part-time or
              full-time with complete flexibility.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="why-card">

            <div className="why-icon-box">
              <FaLocationArrow />
            </div>

            <h3>Smart Routing</h3>

            <p>
              AI-driven route suggestions help maximize your
              earnings and reduce travel time.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
};

export default DriverPage;