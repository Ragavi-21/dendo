import React, { useState } from 'react';
import './VendorPage.css';
import {
  FaCheckCircle,
  FaChartLine,
  FaTruck,
  FaHeadset,
  FaChevronDown
} from 'react-icons/fa';

import vendorMapImg from '../assets/vendor-map.jpg';

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

const VendorPage = () => {

  const [ownerName, setOwnerName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopNumber, setShopNumber] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [city, setCity] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ownerName || !phone || !shopName || !state || !district || !city) {
      alert("Please fill in all required fields.");
      return;
    }

    try {
      const response = await fetch('/api/vendor-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ownerName,
          phone,
          shopName,
          shopNumber,
          state,
          district,
          city
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setPopupMessage(data.message || "Vendor application submitted successfully!");
        setShowPopup(true);
        // reset form fields
        setOwnerName("");
        setPhone("");
        setState("");
        setDistrict("");
        setShopName("");
        setShopNumber("");
        setCity("");
      } else {
        setPopupMessage(data.message || "Failed to submit application");
        setShowPopup(true);
      }
    } catch (err) {
      console.error('Submission error:', err);
      setPopupMessage("Failed to connect to the backend server. Please make sure the server is running.");
      setShowPopup(true);
    }
  };

  return (
    <div className="vendor-page">

      {/* ================= HERO ================= */}
      <section className="vendor-hero">
        <div className="vendor-container">

          <div className="vendor-hero-content">
            <span className="hero-badge">VENDOR PARTNER NETWORK</span>

            <h1 className="vendor-title">
              Scale Your Business with <span>DENDO</span>
            </h1>

            <p className="vendor-subtitle">
              Join the most advanced hyperlocal delivery network in South India.
            </p>

            <div className="hero-checks">
              <div className="check-item">
                <FaCheckCircle className="check-icon" /> 15-MIN SETUP
              </div>
              <div className="check-item">
                <FaCheckCircle className="check-icon" /> WEEKLY PAYOUTS
              </div>
            </div>
          </div>

          <div className="vendor-hero-image">
            <div className="map-illustration-wrapper">
              <img src={vendorMapImg} alt="map" className="map-illustration" />
            </div>
          </div>

        </div>
      </section>

        {showPopup && (
          <div className="popup-overlay">
            <div className="popup-content">
              <p>{popupMessage}</p>
              <button onClick={() => setShowPopup(false)} className="popup-close">Close</button>
            </div>
          </div>
        )}

        {/* ================= APPLICATION ================= */}
      <section className="vendor-app-section">
        <div className="vendor-app-container">

          <div className="vendor-app-header">
            <h2 className="app-title">Vendor Application</h2>
            <p className="app-subtitle">Start your journey today. Fill in your details and our team will reach out within 24 hours.</p>
          </div>

          <div className="vendor-app-card">

            <form className="vendor-form" onSubmit={handleSubmit}>

              {/* OWNER + PHONE */}
              <div className="form-row">
                <div className="form-group">
                  <label>OWNER NAME <span>*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter full name" 
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>PHONE NUMBER <span>*</span></label>
                  <input 
                    type="text" 
                    placeholder="+91 XXXXX XXXXX" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* SHOP */}
              <div className="form-row">
                <div className="form-group">
                  <label>SHOP NAME <span>*</span></label>
                  <input 
                    type="text" 
                    placeholder="Business name" 
                    value={shopName}
                    onChange={(e) => setShopName(e.target.value)}
                    required 
                  />
                </div>

                <div className="form-group">
                  <label>SHOP NUMBER (Optional)</label>
                  <input 
                    type="text" 
                    placeholder="License or Door No." 
                    value={shopNumber}
                    onChange={(e) => setShopNumber(e.target.value)}
                  />
                </div>
              </div>

              {/* STATE + DISTRICT */}
              <div className="form-row">

                {/* STATE */}
                <div className="form-group">
                  <label>STATE <span>*</span></label>
                  <div className="select-wrapper">
                    <select
                      required
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                        setDistrict("");
                      }}
                    >
                      <option value="">Select State</option>
                      {Object.keys(locationData).map((st) => (
                        <option key={st} value={st}>{st}</option>
                      ))}
                    </select>
                    <FaChevronDown className="select-icon" />
                  </div>
                </div>

                {/* DISTRICT */}
                <div className="form-group">
                  <label>DISTRICT <span>*</span></label>
                  <div className="select-wrapper">
                    <select
                      required
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      disabled={!state}
                    >
                      <option value="">Select District</option>

                      {state &&
                        Object.keys(locationData[state]).map((dist) => (
                          <option key={dist} value={dist}>
                            {dist}
                          </option>
                        ))
                      }
                    </select>
                    <FaChevronDown className="select-icon" />
                  </div>
                </div>

              </div>

              {/* CITY */}
              <div className="form-row">
                <div className="form-group">
                  <label>CITY <span>*</span></label>
                  <input 
                    type="text" 
                    placeholder="Enter city name" 
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required 
                  />
                </div>
              </div>

              {/* SUBMIT */}
              <button type="submit" className="btn-submit-app">
                Submit Application
              </button>

            </form>

          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="vendor-features">
        <div className="features-container">

          <div className="feature-card-expand">

  <div className="feature-header">

    <div className="feature-img-box">
      <FaChartLine />
    </div>

    <span className="feature-title">
      Real-time Analytics
    </span>

  </div>

  <div className="feature-content-expand">
    <p>
      Track orders, revenue growth, customer insights,
      vendor performance and business trends instantly
      from your DENDO dashboard.
    </p>

    
  </div>

</div>

         <div className="feature-card-expand">

  <div className="feature-header">
    <div className="feature-img-box">
      <FaTruck />
    </div>

    <span className="feature-title">
      Reliable Delivery
    </span>
  </div>

  <div className="feature-content-expand">
    <p>
      Smart route optimization and professional riders
      ensure faster deliveries and improved customer
      satisfaction.
    </p>

   
  </div>

</div>

          <div className="feature-card-expand">

  <div className="feature-header">
    <div className="feature-img-box">
      <FaHeadset />
    </div>

    <span className="feature-title">
      Premium Support
    </span>
  </div>

  <div className="feature-content-expand">
    <p>
      Dedicated vendor assistance, onboarding help,
      issue resolution and account management whenever
      you need support.
    </p>

    
  </div>

</div>

        </div>
      </section>

    </div>
  );
};

export default VendorPage;