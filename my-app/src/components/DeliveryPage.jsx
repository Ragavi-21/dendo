import React, { useState } from "react";

import "./DeliveryPage.css";
import {
  FaBiking,
  FaChevronDown,
} from "react-icons/fa";
import { BiTargetLock } from "react-icons/bi";
import { Link } from "react-router-dom";

const locationData = {
  "Tamil Nadu": {

  "Ariyalur District": [
    "Ariyalur",
    "Andimadam",
    "Sendurai",
    "Udayarpalayam",
    "Jayankondam",
    "T.Palur"
  ],

  "Chengalpattu District": [
    "Chengalpattu",
    "Madurantakam",
    "Cheyyur",
    "Thirukazhukundram",
    "Tirupporur"
  ],

  "Coimbatore District": [
    "Pollachi",
    "Mettupalayam",
    "Anaimalai",
    "Kinathukadavu",
    "Valparai",
    "Sulur",
    "Perur"
  ],

  "Cuddalore District": [
    "Cuddalore",
    "Chidambaram",
    "Neyveli",
    "Panruti",
    "Vridhachalam",
    "Tittakudi",
    "Veppur"
  ],

  "Dharmapuri District": [
    "Dharmapuri",
    "Harur",
    "Palacode",
    "Pennagaram",
    "Pappireddipatti",
    "Marandahalli",
    "Karimangalam",
    "Nallampalli"
  ],

  "Dindigul District": [
    "Dindigul",
    "Palani",
    "Oddanchatram",
    "Nilakottai",
    "Vedasandur",
    "Natham",
    "Kodaikanal",
    "Gujiliamparai"
  ],

  "Erode District": [
    "Erode",
    "Gobichettipalayam",
    "Sathyamangalam",
    "Perundurai",
    "Bhavani",
    "Kodumudi",
    "Anthiyur",
    "Ammapettai",
    "Thalavadi"
  ],

  "Kallakurichi District": [
    "Kallakurichi",
    "Ulundurpet",
    "Sankarapuram",
    "Thirukovilur",
    "Chinnasalem"
  ],

  "Kanchipuram District": [
    "Kanchipuram",
    "Sriperumbudur",
    "Uthiramerur",
    "Walajabad",
    "Kunrathur"
  ],

  "Kanyakumari District": [
    "Nagercoil",
    "Padmanabhapuram",
    "Kuzhithurai"
  ],

  "Karur District": [
    "Karur",
    "Kulithalai",
    "Aravakurichi",
    "Krishnarayapuram",
    "Pugalur",
    "Kadavur"
  ],

  "Krishnagiri District": [
    "Krishnagiri",
    "Denkanikottai",
    "Bargur",
    "Kaveripattinam",
    "Uthangarai",
    "Hosur",
    "Mathigiri",
    "Zuzuvadi"
  ],

  "Madurai District": [
    "Madurai",
    "Melur",
    "Usilampatti",
    "Thirumangalam",
    "Vadipatti",
    "Alanganallur",
    "T.Kallupatti"
  ],

  "Mayiladuthurai District": [
    "Mayiladuthurai",
    "Sirkazhi",
    "Tharangambadi",
    "Kuthalam"
  ],

  "Nagapattinam District": [
    "Nagapattinam",
    "Velankanni",
    "Kilvelur",
    "Vedaranyam",
    "Thalainayar"
  ],

  "Namakkal District": [
    "Namakkal",
    "Rasipuram",
    "Tiruchengode",
    "Paramathi Velur",
    "Sendamangalam",
    "Kolli Hills",
    "Komarapalayam",
    "Mohanur"
  ],

  "Nilgiris District": [
    "Ooty",
    "Coonoor",
    "Kotagiri",
    "Gudalur",
    "Ketti",
    "Muthorai Palada"
  ],

  "Perambalur District": [
    "Perambalur",
    "Kunnam",
    "Veppanthattai",
    "Alathur"
  ],

  "Pudukkottai District": [
    "Pudukkottai",
    "Aranthangi",
    "Alangudi",
    "Keeranur",
    "Avudaiyarkoil",
    "Thirumayam"
  ],

  "Ramanathapuram District": [
    "Ramanathapuram",
    "Paramakudi",
    "Rameswaram",
    "Keelakarai"
  ],

  "Ranipet District": [
    "Ranipet",
    "Arcot",
    "Walajapet",
    "Arakkonam",
    "Kalavai"
  ],

  "Salem District": [
    "Salem",
    "Mettur",
    "Attur",
    "Omalur",
    "Edappadi",
    "Sankagiri",
    "Thammampatti",
    "Gangavalli",
    "Kadayampatti"
  ],

  "Sivaganga District": [
    "Karaikudi",
    "Devakottai",
    "Manamadurai",
    "Ilayangudi",
    "Tirupathur",
    "Kalayarkoil"
  ],

  "Tenkasi District": [
    "Tenkasi",
    "Sankarankovil",
    "Alangulam",
    "Kadayanallur",
    "Puliyangudi",
    "Surandai"
  ],

  "Thanjavur District": [
    "Thanjavur",
    "Kumbakonam",
    "Papanasam",
    "Orathanadu",
    "Thiruvaiyaru",
    "Pattukkottai",
    "Peravurani"
  ],

  "Theni District": [
    "Theni",
    "Kambam",
    "Chinnamanur",
    "Uthamapalayam",
    "Bodinayakanur",
    "Cumbum Valley"
  ],

  "Thoothukudi District": [
    "Thoothukudi",
    "Kovilpatti",
    "Tiruchendur",
    "Sathankulam",
    "Kayathar",
    "Ettayapuram"
  ],

  "Tiruchirappalli District": [
    "Tiruchirappalli",
    "Manapparai",
    "Lalgudi",
    "Musiri",
    "Thuraiyur",
    "Thottiyam",
    "Manachanallur"
  ],

  "Tirunelveli District": [
    "Tirunelveli",
    "Ambasamudram",
    "Nanguneri",
    "Palayamkottai",
    "Alwarkurichi"
  ],

  "Tirupathur District": [
    "Tirupathur",
    "Jolarpet",
    "Alangayam",
    "Vaniyambadi",
    "Natrampalli"
  ],

  "Tiruppur District": [
    "Tiruppur",
    "Dharapuram",
    "Udumalpet",
    "Avinashi",
    "Kangeyam",
    "Palladam",
    "Madathukulam"
  ],

  "Tiruvallur District": [
    "Tiruvallur",
    "Ponneri",
    "Poonamallee",
    "Gummidipoondi",
    "Uthukottai",
    "Minjur"
  ],

  "Tiruvannamalai District": [
    "Tiruvannamalai",
    "Arani",
    "Polur",
    "Chengam",
    "Vandavasi",
    "Cheyyar"
  ],

  "Tiruvarur District": [
    "Tiruvarur",
    "Thiruthuraipoondi",
    "Mannargudi",
    "Needamangalam",
    "Kodavasal"
  ],

  "Vellore District": [
    "Vellore",
    "Gudiyatham",
    "Ambur",
    "Katpadi",
    "Pernambut",
    "Odugathur"
  ],

  "Viluppuram District": [
    "Viluppuram",
    "Tindivanam",
    "Gingee",
    "Thiruvennainallur",
    "Kandachipuram"
  ],

  "Virudhunagar District": [
    "Virudhunagar",
    "Rajapalayam",
    "Sivakasi",
    "Srivilliputhur",
    "Aruppukottai",
    "Sattur"
  ]
},

  "Telangana": {

  "Adilabad District": [
    "Adilabad",
    "Kagaznagar",
    "Bellampalli",
    "Luxettipet",
    "Mancherial",
    "Bheemaram"
  ],

  "Bhadradri-Kothagudem District": [
    "Kothagudem",
    "Bhadrachalam",
    "Manuguru",
    "Pinapaka",
    "Palvancha",
    "Karakagudem"
  ],

  "Hanamkonda District": [
    "Hanamkonda",
    "Kazipet",
    "Hasanparthy",
    "Dharmasagar"
  ],

  "Hyderabad District": [
    "Ghatkesar",
    "Shamirpet",
    "Medchal",
    "Malkajgiri",
    "Keesara"
  ],

  "Jagtial District": [
    "Jagtial",
    "Metpalli",
    "Mallapur",
    "Velagatur",
    "Dharmapuri"
  ],

  "Jangaon District": [
    "Jangaon",
    "Raghunathpalle",
    "Station Ghanpur"
  ],

  "Jayashankar-Bhupalpally District": [
    "Bhupalpally",
    "Mulugu",
    "Chityal"
  ],

  "Jogulamba-Gadwal District": [
    "Gadwal",
    "Alampur",
    "Itikyal"
  ],

  "Kamareddy District": [
    "Kamareddy",
    "Yellareddy",
    "Banswada",
    "Domakonda"
  ],

  "Karimnagar District": [
    "Karimnagar",
    "Choppadandi",
    "Gangadhara",
    "Jammikunta",
    "Manakondur"
  ],

  "Khammam District": [
    "Khammam",
    "Madhira",
    "Yellandu",
    "Sathupalli"
  ],

  "Komaram-Bheem-Asifabad District": [
    "Asifabad",
    "Kagaznagar",
    "Kerameri"
  ],

  "Mahabubabad District": [
    "Mahabubabad",
    "Dornakal",
    "Kuravi",
    "Kesamudram"
  ],

  "Mahabubnagar District": [
    "Mahabubnagar",
    "Jadcherla",
    "Devarakadra",
    "Narayanpet"
  ],

  "Mancherial District": [
    "Mancherial",
    "Bellampalli",
    "Chennur",
    "Luxettipet"
  ],

  "Medak District": [
    "Medak",
    "Siddipet",
    "Narsapur",
    "Zaheerabad",
    "Sadasivpet"
  ],

  "Medchal-Malkajgiri District": [
    "Medchal",
    "Malkajgiri",
    "Shamirpet",
    "Ghatkesar"
  ],

  "Nagarkurnool District": [
    "Nagarkurnool",
    "Kollapur",
    "Wanaparthy",
    "Achampet"
  ],

  "Nalgonda District": [
    "Nalgonda",
    "Miryalaguda",
    "Suryapet",
    "Kodad",
    "Bhongir"
  ],

  "Nirmal District": [
    "Nirmal",
    "Khanapur",
    "Bhainsa"
  ],

  "Nizamabad District": [
    "Nizamabad",
    "Armoor",
    "Bodhan",
    "Yellareddy"
  ],

  "Peddapalli District": [
    "Peddapalli",
    "Ramagundam",
    "Godavarikhani"
  ],

  "Rajanna-Sircilla District": [
    "Sirsilla",
    "Vemulawada",
    "Chandurthi"
  ],

  "Ranga Reddy District": [
    "Shadnagar",
    "Ibrahimpatnam",
    "Yacharam",
    "Maheswaram"
  ],

  "Sangareddy District": [
    "Sangareddy",
    "Zaheerabad",
    "Patancheru",
    "Narsapur",
    "Jogipet"
  ],

  "Siddipet District": [
    "Siddipet",
    "Gajwel",
    "Cheriyal",
    "Husnabad"
  ],

  "Suryapet District": [
    "Suryapet",
    "Kodad",
    "Huzurnagar"
  ],

  "Vikarabad District": [
    "Vikarabad",
    "Tandur",
    "Parigi"
  ],

  "Wanaparthy District": [
    "Wanaparthy",
    "Pebbair",
    "Kothakota"
  ],

  "Warangal District": [
    "Warangal",
    "Narsampet",
    "Wardhannapet",
    "Geesugonda"
  ]
},
  "Karnataka": {

  "Bagalkot District": [
    "Bagalkot",
    "Badami",
    "Bilagi",
    "Guledgudda",
    "Hungund",
    "Ilkal",
    "Jamkhandi",
    "Mudhol",
    "Rabkavi Banhatti",
    "Terdal"
  ],

  "Ballari District": [
    "Ballari",
    "Hampi",
    "Kampli",
    "Sandur",
    "Siruguppa",
    "Hospet",
    "Kudligi"
  ],

  "Belagavi District": [
    "Belagavi",
    "Athani",
    "Chikkodi",
    "Gokak",
    "Mudalgi",
    "Nippani",
    "Khanapur",
    "Raybag"
  ],

  "Bengaluru District": [
    "Devanahalli",
    "Hoskote",
    "Anekal",
    "Nelamangala",
    "Kanakapura",
    "Magadi"
  ],

  "Bidar District": [
    "Bidar",
    "Bhalki",
    "Basavakalyan",
    "Aurad"
  ],

  "Chikkaballapura District": [
    "Chikkaballapur",
    "Gauribidanur",
    "Gudibanda"
  ],

  "Chikkamagaluru District": [
    "Chikkamagaluru",
    "Kadur",
    "Tarikere",
    "Sringeri",
    "Mudigere",
    "Kalasa"
  ],

  "Chitradurga District": [
    "Chitradurga",
    "Challakere",
    "Hiriyur",
    "Holalkere",
    "Hosadurga",
    "Molakalmuru"
  ],

  "Dakshina Kannada District": [
    "Belthangady",
    "Kadaba",
    "Puttur",
    "Sullia"
  ],

  "Davangere District": [
    "Davanagere",
    "Channagiri",
    "Harihara",
    "Honnali",
    "Jagalur"
  ],

  "Dharwad District": [
    "Dharwad",
    "Hubli",
    "Kalghatgi",
    "Alnavar",
    "Annigeri",
    "Navalgund"
  ],

  "Gadag District": [
    "Gadag",
    "Ron",
    "Mundargi",
    "Shirahatti",
    "Nargund",
    "Laxmeshwar"
  ],

  "Hassan District": [
    "Hassan",
    "Arasikere",
    "Belur",
    "Channarayapatna",
    "Sakleshpura",
    "Hole-Narsipura"
  ],

  "Haveri District": [
    "Haveri",
    "Ranebennur",
    "Byadgi",
    "Hangal",
    "Hirekerur",
    "Savanur"
  ],

  "Kodagu District": [
    "Madikeri",
    "Virajpet",
    "Somwarpet",
    "Kushalnagar",
    "Ponnampet"
  ],

  "Kolar District": [
    "Kolar",
    "Malur",
    "Mulbagal",
    "Bangarpet",
    "K.G.F.",
    "Srinivaspur"
  ],

  "Koppal District": [
    "Koppal",
    "Gangavathi",
    "Kushtagi",
    "Yelburga",
    "Kanakagiri"
  ],

  "Mandya District": [
    "Mandya",
    "Nagamangala",
    "Pandavapura",
    "Srirangapatna",
    "Maddur"
  ],

  "Mysuru District": [
    "Nanjangud",
    "Heggadadevanakote",
    "K.R. Nagar",
    "Hunsur",
    "Periyapatna"
  ],

  "Raichur District": [
    "Raichur",
    "Manvi",
    "Lingsugur",
    "Sindhanur",
    "Devadurga"
  ],

  "Ramanagara District": [
    "Ramanagara",
    "Kanakapura",
    "Magadi",
    "Channapatna",
    "Harohalli"
  ],

  "Shivamogga District": [
    "Shivamogga",
    "Bhadravati",
    "Sagar",
    "Hosanagara",
    "Sorab",
    "Thirthahalli",
    "Shikaripura"
  ],

  "Tumakuru District": [
    "Tumakuru",
    "Sira",
    "Madhugiri",
    "Gubbi",
    "Kunigal",
    "Tiptur"
  ],

  "Udupi District": [
    "Udupi",
    "Kundapura",
    "Karkala",
    "Byndoor",
    "Hebri"
  ],

  "Uttara Kannada District": [
    "Karwar",
    "Kumta",
    "Sirsi",
    "Honavar",
    "Ankola",
    "Haliyal",
    "Mundgod"
  ],

  "Vijayapura District": [
    "Vijayapura",
    "Sindgi",
    "Basavana Bagewadi",
    "Indi"
  ],

  "Yadgir District": [
    "Yadgir",
    "Shahapur",
    "Shorapur",
    "Gurumitkal"
  ]
},
"Andhra Pradesh": {

  "Alluri Sitharama Raju District": [
    "Rampachodavaram",
    "Paderu",
    "Narsipatnam",
    "Araku Valley"
  ],

  "Anakapalli District": [
    "Anakapalli",
    "Narsipatnam",
    "Payakaraopeta",
    "Chodavaram"
  ],

  "Anantapur District": [
    "Anantapur",
    "Guntakal",
    "Dharmavaram",
    "Penukonda",
    "Hindupur"
  ],

  "Annamayya District": [
    "Rayachoti",
    "Madanapalle",
    "Pileru",
    "Gurramkonda"
  ],

  "Bapatla District": [
    "Bapatla",
    "Addanki",
    "Chirala",
    "Ponnur"
  ],

  "Chittoor District": [
    "Chittoor",
    "Kuppam",
    "Srikalahasti",
    "Nagari",
    "Palamaner"
  ],

  "Dr. B.R. Ambedkar Konaseema District": [
    "Amalapuram",
    "Razole",
    "Mummidivaram",
    "Alamuru"
  ],

  "East Godavari District": [
    "Rajahmundry",
    "Kakinada",
    "Peddapuram",
    "Tuni"
  ],

  "Eluru District": [
    "Eluru",
    "Jangareddygudem",
    "Chintalapudi",
    "Kaikaluru"
  ],

  "Guntur District": [
    "Guntur",
    "Tenali",
    "Piduguralla",
    "Sattenapalle",
    "Macherla"
  ],

  "Kakinada District": [
    "Kakinada",
    "Samalkota",
    "Pithapuram",
    "Yeleswaram"
  ],

  "Krishna District": [
    "Machilipatnam",
    "Gudivada",
    "Nuzvid",
    "Jaggaiahpet",
    "Avanigadda"
  ],

  "Kurnool District": [
    "Kurnool",
    "Nandyal",
    "Adoni",
    "Yemmiganur",
    "Dhone"
  ],

  "Nandyal District": [
    "Nandyal",
    "Atmakur",
    "Allagadda",
    "Srisailam"
  ],

  "NTR District": [
    "Vijayawada",
    "Nandigama",
    "Tiruvuru",
    "A. Konduru"
  ],

  "Palnadu District": [
    "Narasaraopet",
    "Chilakaluripet",
    "Gurazala",
    "Vinukonda"
  ],

  "Parvathipuram-Manyam District": [
    "Parvathipuram",
    "Salur",
    "Seethanagaram"
  ],

  "Prakasam District": [
    "Ongole",
    "Markapuram",
    "Kanigiri",
    "Darsi",
    "Kandukur"
  ],

  "Srikakulam District": [
    "Srikakulam",
    "Ichchapuram",
    "Palasa",
    "Sompeta",
    "Tekkali"
  ],

  "Sri Potti Sri Ramulu Nellore District": [
    "Nellore",
    "Gudur",
    "Kavali",
    "Venkatagiri",
    "Kovvur"
  ],

  "Sri Sathya Sai District": [
    "Dharmavaram",
    "Penukonda",
    "Kadiri",
    "Madakasira"
  ],

  "Tirupati District": [
    "Tirupati",
    "Srikalahasti",
    "Puttur",
    "Venkatagiri"
  ],

  "Visakhapatnam District": [
    "Visakhapatnam",
    "Anakapalli",
    "Bheemunipatnam",
    "Payakaraopeta",
    "Chodavaram"
  ],

  "Vizianagaram District": [
    "Vizianagaram",
    "Bobbili",
    "Salur",
    "Parvathipuram"
  ],

  "West Godavari District": [
    "Bhimavaram",
    "Tadepalligudem",
    "Tanuku",
    "Palakollu"
  ],

  "YSR Kadapa District": [
    "Kadapa",
    "Proddatur",
    "Pulivendula",
    "Jammalamadugu"
  ]
},
"Kerala": {

  "Alappuzha District": [
    "Chengannur",
    "Mavelikkara",
    "Kayamkulam",
    "Ambalappuzha"
  ],

  "Ernakulam District": [
    "Perumbavoor",
    "Aluva",
    "Muvattupuzha",
    "Paravur"
  ],

  "Idukki District": [
    "Thodupuzha",
    "Kattappana",
    "Painavu",
    "Kumily",
    "Peermade",
    "Nedumkandam"
  ],

  "Kannur District": [
    "Thalassery",
    "Payyannur",
    "Taliparamba",
    "Iritty",
    "Mattannur"
  ],

  "Kasaragod District": [
    "Kasaragod",
    "Kanhangad",
    "Nileshwar",
    "Manjeshwar"
  ],

  "Kollam District": [
    "Kottarakkara",
    "Karunagappally",
    "Punalur",
    "Paravur"
  ],

  "Kottayam District": [
    "Changanassery",
    "Palai",
    "Ettumanoor",
    "Vaikom"
  ],

  "Kozhikode District": [
    "Vatakara",
    "Koyilandy",
    "Ramanattukara",
    "Perinthalmanna"
  ],

  "Malappuram District": [
    "Tirur",
    "Ponnani",
    "Kondotty",
    "Valanchery"
  ],

  "Palakkad District": [
    "Ottappalam",
    "Mannarkkad",
    "Chittur-Thathamangalam",
    "Alathur"
  ],

  "Pathanamthitta District": [
    "Pathanamthitta",
    "Adoor",
    "Thiruvalla",
    "Ranni"
  ],

  "Thiruvananthapuram District": [
    "Varkala",
    "Neyyattinkara",
    "Attingal",
    "Nedumangad"
  ],

  "Thrissur District": [
    "Irinjalakuda",
    "Chalakudy",
    "Kodungallur",
    "Kunnamkulam"
  ],

  "Wayanad District": [
    "Kalpetta",
    "Mananthavady",
    "Sulthan Batheri"
  ]
},
"Puducherry": {

  "Karaikal District": [
    "Karaikal",
    "Nedungadu",
    "Kottucherry",
    "Neravy",
    "Tirunallar"
  ],

  "Mahe District": [
    "Mahe",
    "Palloor"
  ],

  "Puducherry District": [
    "Ariyankuppam",
    "Villianur",
    "Bahour",
    "Mannadipet",
    "Nettapakkam",
    "Karayambuthur"
  ],

  "Yanam District": [
    "Yanam"
  ]
}
};

const DeliveryPage = () => {
  const [selectedState, setSelectedState] =
    useState("Tamil Nadu");

  const [selectedDistrict, setSelectedDistrict] =
    useState("");

  const [selectedArea, setSelectedArea] =
    useState("");

  const states = Object.keys(locationData);

  const districts = selectedState
    ? Object.keys(locationData[selectedState])
    : [];

  const areas =
    selectedState && selectedDistrict
      ? locationData[selectedState][selectedDistrict]
      : [];

  return (
    <div className="delivery-page">

      {/* HERO SECTION */}
      <section className="delivery-hero">
        <div className="delivery-container">

          {/* LEFT CONTENT */}
          <div className="delivery-hero-content">
            <span className="hero-badge">
              DENDO NETWORK
            </span>

            <h1 className="delivery-title">
              Delivering Across South India
            </h1>

            <p className="delivery-subtitle">
              Experience the next generation of hyperlocal
              logistics. We bridge the gap between urban
              merchants and elite customers with unmatched
              speed and precision.
            </p>

            <div className="hero-features">
              <div className="feature-pill">
                <BiTargetLock className="pill-icon" />
                REAL-TIME TRACKING
              </div>

              <div className="feature-pill">
                <FaBiking className="pill-icon" />
                HYPERLOCAL ACCESS
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="availability-card-container">
            <div className="availability-card">

              <h3 className="card-title">
                Check Availability
              </h3>

              <div className="availability-form">

                {/* STATE */}
                <div className="form-group">
                  <label>SELECT STATE</label>

                  <div className="select-wrapper">
                    <select
                      value={selectedState}
                      onChange={(e) => {
                        setSelectedState(e.target.value);
                        setSelectedDistrict("");
                        setSelectedArea("");
                      }}
                    >
                      {states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>

                    <FaChevronDown className="select-icon" />
                  </div>
                </div>

                {/* DISTRICT */}
                <div className="form-group">
                  <label>SELECT DISTRICT</label>

                  <div className="select-wrapper">
                    <select
                      value={selectedDistrict}
                      onChange={(e) => {
                        setSelectedDistrict(
                          e.target.value
                        );
                        setSelectedArea("");
                      }}
                    >
                      <option value="">
                        Choose District
                      </option>

                      {districts.map((district) => (
                        <option
                          key={district}
                          value={district}
                        >
                          {district}
                        </option>
                      ))}
                    </select>

                    <FaChevronDown className="select-icon" />
                  </div>
                </div>

                {/* AREA */}
                <div className="form-group">
                  <label>SELECT AREA</label>

                  <div className="select-wrapper">
                    <select
                      value={selectedArea}
                      onChange={(e) =>
                        setSelectedArea(e.target.value)
                      }
                    >
                      <option value="">
                        Choose Area
                      </option>

                      {areas.map((area) => (
                        <option
                          key={area}
                          value={area}
                        >
                          {area}
                        </option>
                      ))}
                    </select>

                    <FaChevronDown className="select-icon" />
                  </div>
                </div>

                <button className="btn-check-availability">
                  CHECK AVAILABILITY
                </button>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* REQUEST SECTION */}
      <section className="request-section">
        <div className="request-container">

          <div className="request-card">

            <h2 className="request-title">
              Bring DENDO to Your Neighborhood
            </h2>

            <p className="request-desc">
              Can't find your area in our active zones?
              Request an expansion and we'll notify you
              once we launch there.
            </p>

        
            <Link to="/request-zone">
  <button className="btn-request-area">
    REQUEST YOUR AREA
  </button>
</Link>

          </div>

        </div>
      </section>
    </div>
  );
};

export default DeliveryPage;