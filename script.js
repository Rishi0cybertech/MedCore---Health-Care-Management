/* ============================================
   AgriShield+ Marketplace — Application Logic
   ============================================ */

document.addEventListener("DOMContentLoaded", () => {
  // ============================================
  //  1. i18n — DUAL LANGUAGE SYSTEM
  // ============================================
  const TRANSLATIONS = {
    en: {
      // Nav
      nav_home: "Home",
      nav_marketplace: "Marketplace",
      nav_sell: "Sell",
      nav_purchase: "Purchase",
      nav_profiles: "Profiles",
      nav_simulation: "Simulation",
      // Hero
      hero_title_raw: "Shield Your Crop. <span>Scale Your Income.</span>",
      hero_subtitle:
        "Direct marketplace connecting farmers, buyers & industries. No middlemen. Transparent pricing. Trust-based community.",
      hero_sell: "🌾 Start Selling",
      hero_browse: "🏪 Browse Marketplace",
      hero_simulate: "📊 Try Simulation",
      // Stats
      stat_listings: "Active Listings",
      stat_users: "Registered Users",
      stat_trades: "Trades Completed",
      stat_trust: "Avg Trust Score",
      // Home features
      home_features_title: "What You Can Do",
      home_features_sub:
        "Everything you need to sell, buy, and grow — in one place.",
      feat_sell: "Sell Your Crops",
      feat_sell_desc:
        "List your harvest with price, quantity, and reach buyers directly.",
      feat_buy: "Purchase Products",
      feat_buy_desc:
        "Search, compare sellers, and buy crops or processed goods.",
      feat_profile: "Create Profile",
      feat_profile_desc:
        "Register as Farmer, Buyer, or Industry and join the marketplace.",
      feat_market: "Marketplace",
      feat_market_desc:
        "Browse all listings from verified farmers and industries.",
      feat_sim: "Profit Simulation",
      feat_sim_desc:
        "Plan your selling strategy with our step-by-step profit guide.",
      feat_trust: "Trust Rankings",
      feat_trust_desc:
        "Build trust with every trade. Higher rank = more buyers.",
      // Marketplace
      market_title: "🏪 Marketplace",
      market_sub:
        "Browse all crop listings, raw materials & processed products.",
      market_search_ph: "Search crops, products...",
      filter_all: "All",
      filter_farmer: "🌾 Farmer",
      filter_buyer: "🛒 Buyer",
      filter_industry: "🏭 Industry",
      empty_market: "No listings found",
      empty_market_desc: "Try adjusting your search or filters.",
      // Sell
      sell_title: "📦 Sell Your Product",
      sell_sub:
        "List your crop or product for buyers & industries to find easily.",
      sell_role: "Your Role",
      sell_product: "Product / Crop Name",
      sell_product_ph: "e.g. Wheat, Rice, Cotton, Processed Flour",
      sell_qty: "Quantity (Quintals / Kg)",
      sell_price: "Price (₹ per unit)",
      sell_location: "Location",
      sell_location_ph: "e.g. Lucknow, UP",
      sell_availability: "Availability",
      sell_seller: "Seller Name",
      sell_submit: "📋 Create Listing",
      avail_available: "Available Now",
      avail_limited: "Limited Stock",
      role_farmer: "Farmer",
      role_buyer: "Buyer",
      role_industry: "Industry",
      // Purchase
      purchase_title: "🛒 Purchase Products",
      purchase_sub: "Find the best sellers, compare prices and trust ranks.",
      purch_filter_title: "🔍 Filters",
      purch_search: "Search Product",
      purch_search_ph: "e.g. Wheat",
      purch_seller_type: "Seller Type",
      purch_sort: "Sort By",
      purch_apply: "Apply Filters",
      sort_price_low: "Price: Low to High",
      sort_price_high: "Price: High to Low",
      sort_trust: "Trust Score",
      empty_purchase: "No matching products",
      empty_purchase_desc: "Try broadening your search or changing filters.",
      btn_buy: "🛒 Buy Now",
      btn_contact: "📞 Contact",
      // Profiles
      profiles_title: "👤 Profiles & Trust Rankings",
      profiles_sub:
        "All registered farmers, buyers & industries with their trust scores.",
      profiles_new: "+ Create Profile",
      profile_create_title: "Create New Profile",
      profile_name: "Full Name",
      profile_name_ph: "e.g. Ramesh Kumar",
      profile_role: "Role",
      profile_location: "Location",
      profile_location_ph: "e.g. Lucknow, UP",
      profile_spec: "Specialization / Interest",
      profile_spec_ph: "e.g. Wheat, Organic Fertilizer, Flour Mill",
      profile_intent: "Buying or Selling?",
      intent_selling: "Selling",
      intent_buying: "Buying",
      intent_both: "Both",
      profile_save: "✅ Save Profile",
      profile_cancel: "Cancel",
      // Simulation
      sim_title: "🧮 Profit Planning Simulation",
      sim_sub: "Plan your selling strategy in 3 simple steps.",
      sim_step1: "Select Crop",
      sim_step2: "Enter Details",
      sim_step3: "See Results",
      sim_pick_crop: "What are you selling?",
      sim_pick_crop_desc:
        "Pick a crop or product to begin your profit estimation.",
      sim_details_title: "Enter Your Details",
      sim_details_desc: "We just need a few numbers to calculate your profit.",
      sim_harvest_qty: "How much will you harvest? (Quintals)",
      sim_costs: "Total costs so far? (Seeds + Labor + Transport) ₹",
      sim_channel: "Where will you sell?",
      sim_ch_compare: "Compare Both (Mandi vs Direct)",
      sim_ch_mandi: "Traditional Mandi",
      sim_ch_direct: "AgriShield+ Direct",
      sim_back: "← Back",
      sim_calculate: "Calculate Profit →",
      sim_your_profit: "Your Estimated Profit",
      sim_mandi_profit: "Mandi Profit",
      sim_direct_profit: "AgriShield+ Profit",
      sim_note:
        "*Calculated with 15% Mandi fees vs 5% AgriShield+ platform fee.",
      sim_restart: "🔄 Start Over",
      sim_go_sell: "📦 List & Sell Now",
      sim_savings: "You save ₹{amount} extra with AgriShield+ Direct!",
      // Footer
      footer_text: "Digitally empowering the backbone of our nation. © 2026",
      // Toast
      toast_listing_created: "Listing created successfully!",
      toast_profile_saved: "Profile saved successfully!",
      toast_fill_fields: "Please fill in all required fields.",
      // Trust
      trust_rank_1: "New",
      trust_rank_2: "Trusted",
      trust_rank_3: "Verified",
      trust_rank_4: "Premium",
      trust_rank_5: "Elite",
      // Listing card
      per_unit: "/Unit",
      qtl_label: "Qty",
      // === HOMEPAGE RESTORED KEYS ===
      ticker_wheat: "🌾 Wheat (Mandi): ₹2,100 | AgriShield+: ₹2,350",
      ticker_rice: "🍚 Rice (Mandi): ₹1,800 | AgriShield+: ₹2,050",
      ticker_cotton: "☁️ Cotton (Mandi): ₹6,500 | AgriShield+: ₹7,200",
      ticker_potato: "🥔 Potato (Mandi): ₹1,200 | AgriShield+: ₹1,450",
      ticker_wheat2: "🌾 Wheat (Mandi): ₹2,100 | AgriShield+: ₹2,350",
      ticker_rice2: "🍚 Rice (Mandi): ₹1,800 | AgriShield+: ₹2,050",
      hero_title: "Shield Your Crop. <br><span class='highlight'>Scale Your Income.</span>",
      hero_subtitle: "The intelligent layer for rural decision-making. Predict yield loss, bypass middlemen, and optimize your market strategy with data-driven precision.",
      hero_sell: "Start Smart Selling",
      hero_simulate: "Try Simulation",
      stat_extra: "Extra Profit per ₹10k",
      stat_commission: "Flat Commission",
      stat_transparent: "Transparent Sales",
      problem_title: 'The "Middleman Gap" is Costing You',
      problem_sub: "Traditional farming is a gamble. We turn it into a strategy.",
      prob_income: "Income Instability",
      prob_income_desc: "Market prices fluctuate wildly, leaving you guessing your harvest value.",
      prob_taxes: "Hidden Taxes",
      prob_taxes_desc: "Inefficient supply chains drain up to 40% of your potential revenue.",
      prob_info: "Information Gap",
      prob_info_desc: 'No clear tools to decide: "Should I treat this disease or harvest now?"',
      prob_mandi: "Mandi Roulette",
      prob_mandi_desc: "Selling at local markets is often based on luck, not market intelligence.",
      sol_badge: "The Innovation",
      sol_title: "AgriShield+ Intelligence Layer",
      sol_desc: "Not just a calculator, but a brain for your farm. We transform raw data into actionable profit strategies.",
      sol_f1: "<strong>Disease Simulation:</strong> Real-time cost analysis of crop health issues.",
      sol_f2: '<strong>Financial Modeling:</strong> Compare "Treat Now" vs "Delay" profit impacts.',
      sol_f3: "<strong>Yield Calculations:</strong> Predict exactly what you'll harvest.",
      sol_f4: "<strong>Market Routing:</strong> Mandi vs Direct vs Bulk selling comparisons.",
      sim_header: "Real-Time Profit Strategy",
      sim_harvest_label: "Expected Harvest (Quintals)",
      sim_rate_label: "Market Rate (₹ per Qtl)",
      sim_costs_label: "Input Costs (Kharcha)",
      sim_seeds_label: "Seeds & Fertilizer (₹)",
      sim_labor_label: "Labor & Irrigation (₹)",
      sim_gmv: "Gross Market Value",
      sim_kharcha: "Your Costs (Kharcha)",
      sim_mandi_net: "Mandi Net Profit",
      sim_agri_net: "AgriShield+ Net Profit",
      sim_saving_label: "Actual Net Saving: <span id='extra-income'>₹2,000</span>",
      sim_note_home: "*Calculated after 15% Mandi fees vs 5% Platform fee",
      steps_title: "Success in 4 Simple Steps",
      step1_title: "Enter Details",
      step1_desc: "Put in your crop type, acreage, and health status.",
      step2_title: "Analyze Profit",
      step2_desc: "Get instant insights on yield loss and harvest value.",
      step3_title: "Compare Markets",
      step3_desc: "See the difference between Mandi and Bulk buyers.",
      step4_title: "Maximize Income",
      step4_desc: "Choose the best option and start selling smart.",
      cmp_model: "Selling Model",
      cmp_revenue: "Typical Revenue",
      cmp_deductions: "Deductions",
      cmp_profit: "Your Net Profit",
      cmp_mandi: "Traditional Mandi",
      cmp_mandi_ded: "10-15% (Fees/Middlemen)",
      cmp_agri: "AgriShield+ Direct",
      cmp_agri_ded: "5% (Platform Fee)",
      cmp_note: "*Transparent 5% commission on transactions above ₹5000.",
      graph_badge: "📈 Live Market Intelligence",
      graph_title: "Real-Time Profit Tracker",
      graph_sub: "Watch how your profits grow with AgriShield+ vs traditional Mandi selling — updated live every 2 seconds.",
      graph_select: "Select Crop:",
      graph_mandi_avg: "Mandi Avg Profit",
      graph_agri_avg: "AgriShield+ Avg Profit",
      graph_extra: "Extra You Earn",
      graph_rate: "Current Rate",
      match_title: "Smart Buyer Matchmaking",
      match_sub: "Direct-to-Buyer matches based on your harvest profile.",
      match_reliance: "Bulk Procurement: A-Grade",
      match_itc: "Premium Bulk Order",
      match_bb: "Direct Distribution",
      match_connect: "Connect Direct",
      feat_section_title: "Designed for the Rural Reality",
      bento_disease: "Visual Disease Library",
      bento_disease_desc: "Match symptoms with HQ images for instant analysis.",
      bento_bilingual: "Bilingual",
      bento_bilingual_desc: "Toggle between Hindi and English with one tap.",
      bento_mobile: "Mobile Ready",
      bento_mobile_desc: "Low bandwidth optimization for rural connectivity.",
      bento_bulk: "Bulk Order Matching",
      bento_bulk_desc: "Direct connectivity to corporate buyers and cooperatives.",
    },

    hi: {
      nav_home: "होम",
      nav_marketplace: "बाज़ार",
      nav_sell: "बेचें",
      nav_purchase: "खरीदें",
      nav_profiles: "प्रोफ़ाइल",
      nav_simulation: "सिमुलेशन",
      hero_title_raw: "अपनी फसल बचाएं। <span>अपनी आय बढ़ाएं।</span>",
      hero_subtitle:
        "किसानों, खरीदारों और उद्योगों को सीधे जोड़ने वाला बाज़ार। बिचौलिए नहीं। पारदर्शी मूल्य। विश्वास-आधारित समुदाय।",
      hero_sell: "🌾 बेचना शुरू करें",
      hero_browse: "🏪 बाज़ार देखें",
      hero_simulate: "📊 सिमुलेशन आज़माएं",
      stat_listings: "सक्रिय लिस्टिंग",
      stat_users: "पंजीकृत उपयोगकर्ता",
      stat_trades: "पूर्ण व्यापार",
      stat_trust: "औसत विश्वास स्कोर",
      home_features_title: "आप क्या कर सकते हैं",
      home_features_sub: "बेचने, खरीदने और बढ़ने के लिए सब कुछ — एक जगह।",
      feat_sell: "अपनी फसल बेचें",
      feat_sell_desc:
        "मूल्य, मात्रा के साथ अपनी फसल लिस्ट करें और सीधे खरीदारों तक पहुंचें।",
      feat_buy: "उत्पाद खरीदें",
      feat_buy_desc:
        "खोजें, विक्रेताओं की तुलना करें, और फसल या प्रसंस्कृत सामान खरीदें।",
      feat_profile: "प्रोफ़ाइल बनाएं",
      feat_profile_desc: "किसान, खरीदार, या उद्योग के रूप में पंजीकरण करें।",
      feat_market: "बाज़ार",
      feat_market_desc: "सत्यापित किसानों और उद्योगों की सभी लिस्टिंग देखें।",
      feat_sim: "लाभ सिमुलेशन",
      feat_sim_desc: "चरण-दर-चरण लाभ गाइड से अपनी बिक्री रणनीति बनाएं।",
      feat_trust: "विश्वास रैंकिंग",
      feat_trust_desc: "हर व्यापार से विश्वास बनाएं। उच्च रैंक = अधिक खरीदार।",
      market_title: "🏪 बाज़ार",
      market_sub: "सभी फसल लिस्टिंग, कच्चा माल और प्रसंस्कृत उत्पाद देखें।",
      market_search_ph: "फसल, उत्पाद खोजें...",
      filter_all: "सभी",
      filter_farmer: "🌾 किसान",
      filter_buyer: "🛒 खरीदार",
      filter_industry: "🏭 उद्योग",
      empty_market: "कोई लिस्टिंग नहीं मिली",
      empty_market_desc: "अपनी खोज या फ़िल्टर बदलें।",
      sell_title: "📦 अपना उत्पाद बेचें",
      sell_sub: "खरीदारों और उद्योगों के लिए अपनी फसल या उत्पाद लिस्ट करें।",
      sell_role: "आपकी भूमिका",
      sell_product: "उत्पाद / फसल का नाम",
      sell_product_ph: "जैसे गेहूं, चावल, कपास",
      sell_qty: "मात्रा (क्विंटल / किग्रा)",
      sell_price: "मूल्य (₹ प्रति इकाई)",
      sell_location: "स्थान",
      sell_location_ph: "जैसे लखनऊ, उप्र",
      sell_availability: "उपलब्धता",
      sell_seller: "विक्रेता का नाम",
      sell_submit: "📋 लिस्टिंग बनाएं",
      avail_available: "अभी उपलब्ध",
      avail_limited: "सीमित स्टॉक",
      role_farmer: "किसान",
      role_buyer: "खरीदार",
      role_industry: "उद्योग",
      purchase_title: "🛒 उत्पाद खरीदें",
      purchase_sub:
        "सर्वश्रेष्ठ विक्रेता खोजें, मूल्य और विश्वास रैंक तुलना करें।",
      purch_filter_title: "🔍 फ़िल्टर",
      purch_search: "उत्पाद खोजें",
      purch_search_ph: "जैसे गेहूं",
      purch_seller_type: "विक्रेता प्रकार",
      purch_sort: "क्रम",
      purch_apply: "फ़िल्टर लागू करें",
      sort_price_low: "मूल्य: कम से अधिक",
      sort_price_high: "मूल्य: अधिक से कम",
      sort_trust: "विश्वास स्कोर",
      empty_purchase: "कोई मिलान उत्पाद नहीं",
      empty_purchase_desc: "खोज बदलें या फ़िल्टर बदलें।",
      btn_buy: "🛒 अभी खरीदें",
      btn_contact: "📞 संपर्क करें",
      profiles_title: "👤 प्रोफ़ाइल और विश्वास रैंकिंग",
      profiles_sub:
        "सभी पंजीकृत किसान, खरीदार और उद्योग उनके विश्वास स्कोर के साथ।",
      profiles_new: "+ प्रोफ़ाइल बनाएं",
      profile_create_title: "नई प्रोफ़ाइल बनाएं",
      profile_name: "पूरा नाम",
      profile_name_ph: "जैसे रमेश कुमार",
      profile_role: "भूमिका",
      profile_location: "स्थान",
      profile_location_ph: "जैसे लखनऊ, उप्र",
      profile_spec: "विशेषज्ञता / रुचि",
      profile_spec_ph: "जैसे गेहूं, जैविक उर्वरक, आटा मिल",
      profile_intent: "खरीदना या बेचना?",
      intent_selling: "बेचना",
      intent_buying: "खरीदना",
      intent_both: "दोनों",
      profile_save: "✅ प्रोफ़ाइल सहेजें",
      profile_cancel: "रद्द करें",
      sim_title: "🧮 लाभ योजना सिमुलेशन",
      sim_sub: "3 सरल चरणों में अपनी बिक्री रणनीति बनाएं।",
      sim_step1: "फसल चुनें",
      sim_step2: "विवरण दें",
      sim_step3: "परिणाम देखें",
      sim_pick_crop: "आप क्या बेच रहे हैं?",
      sim_pick_crop_desc: "अपने लाभ अनुमान के लिए एक फसल या उत्पाद चुनें।",
      sim_details_title: "अपने विवरण दर्ज करें",
      sim_details_desc: "लाभ की गणना के लिए बस कुछ संख्याएं चाहिए।",
      sim_harvest_qty: "कितनी फसल होगी? (क्विंटल)",
      sim_costs: "अब तक कुल खर्च? (बीज + मजदूरी + परिवहन) ₹",
      sim_channel: "कहाँ बेचेंगे?",
      sim_ch_compare: "दोनों तुलना (मंडी बनाम डायरेक्ट)",
      sim_ch_mandi: "पारंपरिक मंडी",
      sim_ch_direct: "AgriShield+ डायरेक्ट",
      sim_back: "← वापस",
      sim_calculate: "लाभ गणना करें →",
      sim_your_profit: "आपका अनुमानित लाभ",
      sim_mandi_profit: "मंडी लाभ",
      sim_direct_profit: "AgriShield+ लाभ",
      sim_note:
        "*15% मंडी शुल्क बनाम 5% AgriShield+ प्लेटफ़ॉर्म शुल्क से गणना।",
      sim_restart: "🔄 फिर से शुरू करें",
      sim_go_sell: "📦 लिस्ट करें और बेचें",
      sim_savings: "आप AgriShield+ डायरेक्ट से ₹{amount} अतिरिक्त बचाते हैं!",
      footer_text: "हमारे देश की रीढ़ को डिजिटल रूप से सशक्त बनाना। © 2026",
      toast_listing_created: "लिस्टिंग सफलतापूर्वक बनाई गई!",
      toast_profile_saved: "प्रोफ़ाइल सफलतापूर्वक सहेजी गई!",
      toast_fill_fields: "कृपया सभी आवश्यक फ़ील्ड भरें।",
      trust_rank_1: "नया",
      trust_rank_2: "विश्वसनीय",
      trust_rank_3: "सत्यापित",
      trust_rank_4: "प्रीमियम",
      trust_rank_5: "एलीट",
      per_unit: "/इकाई",
      qtl_label: "मात्रा",
      // === HOMEPAGE RESTORED KEYS ===
      ticker_wheat: "🌾 गेहूं (मंडी): ₹2,100 | AgriShield+: ₹2,350",
      ticker_rice: "🍚 चावल (मंडी): ₹1,800 | AgriShield+: ₹2,050",
      ticker_cotton: "☁️ कपास (मंडी): ₹6,500 | AgriShield+: ₹7,200",
      ticker_potato: "🥔 आलू (मंडी): ₹1,200 | AgriShield+: ₹1,450",
      ticker_wheat2: "🌾 गेहूं (मंडी): ₹2,100 | AgriShield+: ₹2,350",
      ticker_rice2: "🍚 चावल (मंडी): ₹1,800 | AgriShield+: ₹2,050",
      hero_title: "अपनी फसल बचाएं। <br><span class='highlight'>अपनी आय बढ़ाएं।</span>",
      hero_subtitle: "ग्रामीण निर्णय लेने के लिए बुद्धिमान परत। उपज के नुकसान का अनुमान लगाएं, बिचौलियों को बायपास करें, और डेटा-संचालित सटीकता से अपनी बाजार रणनीति अनुकूलित करें।",
      hero_sell: "स्मार्ट बिक्री शुरू करें",
      hero_simulate: "सिमुलेशन आज़माएं",
      stat_extra: "₹10k पर अतिरिक्त लाभ",
      stat_commission: "समतल कमीशन",
      stat_transparent: "पारदर्शी बिक्री",
      problem_title: '"बिचौलिया अंतर" आपको नुकसान पहुंचा रहा है',
      problem_sub: "पारंपरिक खेती एक जुआ है। हम इसे रणनीति में बदलते हैं।",
      prob_income: "आय अस्थिरता",
      prob_income_desc: "बाजार मूल्य तेजी से बदलते हैं, आपको अपनी फसल का मूल्य अनुमान लगाना पड़ता है।",
      prob_taxes: "छिपे कर",
      prob_taxes_desc: "अक्षम आपूर्ति श्रृंखलाएं आपकी संभावित आय का 40% तक निकाल लेती हैं।",
      prob_info: "जानकारी का अंतर",
      prob_info_desc: '"क्या मुझे इस बीमारी का इलाज करना चाहिए या अभी फसल काटनी चाहिए?" यह तय करने के लिए कोई स्पष्ट उपकरण नहीं।',
      prob_mandi: "मंडी रूलेट",
      prob_mandi_desc: "स्थानीय बाजारों में बेचना अक्सर किस्मत पर निर्भर करता है, बाजार बुद्धि पर नहीं।",
      sol_badge: "नवाचार",
      sol_title: "AgriShield+ इंटेलिजेंस लेयर",
      sol_desc: "सिर्फ एक कैलकुलेटर नहीं, बल्कि आपके खेत के लिए एक दिमाग। हम कच्चे डेटा को कार्यकारी लाभ रणनीतियों में बदलते हैं।",
      sol_f1: "<strong>बीमारी सिमुलेशन:</strong> फसल स्वास्थ्य समस्याओं का रियल-टाइम लागत विश्लेषण।",
      sol_f2: '<strong>वित्तीय मॉडलिंग:</strong> "अभी इलाज करो" बनाम "देरी करो" लाभ प्रभावों की तुलना।',
      sol_f3: "<strong>उपज गणना:</strong> सटीक अनुमान लगाएं कि आप कितनी फसल काटेंगे।",
      sol_f4: "<strong>बाजार रूटिंग:</strong> मंडी बनाम डायरेक्ट बनाम थोक बिक्री तुलना।",
      sim_header: "रियल-टाइम लाभ रणनीति",
      sim_harvest_label: "अपेक्षित फसल (क्विंटल)",
      sim_rate_label: "बाजार दर (₹ प्रति क्विंटल)",
      sim_costs_label: "इनपुट लागत (खर्चा)",
      sim_seeds_label: "बीज और खाद (₹)",
      sim_labor_label: "मजदूरी और सिंचाई (₹)",
      sim_gmv: "कुल बाजार मूल्य",
      sim_kharcha: "आपका खर्चा",
      sim_mandi_net: "मंडी शुद्ध लाभ",
      sim_agri_net: "AgriShield+ शुद्ध लाभ",
      sim_saving_label: "वास्तविक शुद्ध बचत: <span id='extra-income'>₹2,000</span>",
      sim_note_home: "*15% मंडी शुल्क बनाम 5% प्लेटफॉर्म शुल्क से गणना",
      steps_title: "4 सरल चरणों में सफलता",
      step1_title: "विवरण दर्ज करें",
      step1_desc: "अपनी फसल का प्रकार, रकबा और स्वास्थ्य स्थिति दर्ज करें।",
      step2_title: "लाभ विश्लेषण",
      step2_desc: "उपज हानि और फसल मूल्य पर तुरंत जानकारी प्राप्त करें।",
      step3_title: "बाजार तुलना",
      step3_desc: "मंडी और थोक खरीदारों के बीच का अंतर देखें।",
      step4_title: "आय अधिकतम करें",
      step4_desc: "सबसे अच्छा विकल्प चुनें और स्मार्ट बिक्री शुरू करें।",
      cmp_model: "बिक्री मॉडल",
      cmp_revenue: "सामान्य राजस्व",
      cmp_deductions: "कटौती",
      cmp_profit: "आपका शुद्ध लाभ",
      cmp_mandi: "पारंपरिक मंडी",
      cmp_mandi_ded: "10-15% (शुल्क/बिचौलिये)",
      cmp_agri: "AgriShield+ डायरेक्ट",
      cmp_agri_ded: "5% (प्लेटफॉर्म शुल्क)",
      cmp_note: "*₹5000 से अधिक लेनदेन पर पारदर्शी 5% कमीशन।",
      graph_badge: "📈 लाइव बाजार बुद्धिमत्ता",
      graph_title: "रियल-टाइम लाभ ट्रैकर",
      graph_sub: "देखें कैसे AgriShield+ से आपका लाभ पारंपरिक मंडी से बढ़ता है — हर 2 सेकंड में अपडेट।",
      graph_select: "फसल चुनें:",
      graph_mandi_avg: "मंडी औसत लाभ",
      graph_agri_avg: "AgriShield+ औसत लाभ",
      graph_extra: "अतिरिक्त कमाई",
      graph_rate: "वर्तमान दर",
      match_title: "स्मार्ट खरीदार मैचमेकिंग",
      match_sub: "आपकी फसल प्रोफाइल के आधार पर सीधे खरीदार से मैच।",
      match_reliance: "थोक खरीद: A-ग्रेड",
      match_itc: "प्रीमियम थोक ऑर्डर",
      match_bb: "सीधा वितरण",
      match_connect: "सीधे जुड़ें",
      feat_section_title: "ग्रामीण वास्तविकता के लिए डिज़ाइन",
      bento_disease: "दृश्य बीमारी पुस्तकालय",
      bento_disease_desc: "तुरंत विश्लेषण के लिए HQ छवियों से लक्षणों का मिलान करें।",
      bento_bilingual: "द्विभाषी",
      bento_bilingual_desc: "एक टैप से हिंदी और अंग्रेजी में टॉगल करें।",
      bento_mobile: "मोबाइल तैयार",
      bento_mobile_desc: "ग्रामीण कनेक्टिविटी के लिए कम बैंडविड्थ अनुकूलन।",
      bento_bulk: "थोक ऑर्डर मैचिंग",
      bento_bulk_desc: "कॉर्पोरेट खरीदारों और सहकारी समितियों से सीधा संपर्क।",
    },
  };

  let currentLang = localStorage.getItem("agri_lang") || "en";

  function t(key, replacements) {
    let text =
      (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) ||
      TRANSLATIONS.en[key] ||
      key;
    if (replacements) {
      for (const [k, v] of Object.entries(replacements)) {
        text = text.replace(`{${k}}`, v);
      }
    }
    return text;
  }

  // Keys that contain HTML markup and need innerHTML
  const HTML_KEYS = new Set([
    'hero_title', 'sol_f1', 'sol_f2', 'sol_f3', 'sol_f4', 'sim_saving_label'
  ]);

  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const translated = t(key);
      if (HTML_KEYS.has(key)) {
        el.innerHTML = translated;
      } else {
        el.textContent = translated;
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.placeholder = t(el.getAttribute("data-i18n-placeholder"));
    });
    // Update select options
    document.querySelectorAll("option[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
  }

  // Language toggle buttons
  document.getElementById("langToggle").addEventListener("click", (e) => {
    if (e.target.tagName !== "BUTTON") return;
    const lang = e.target.dataset.lang;
    if (lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem("agri_lang", lang);
    document
      .querySelectorAll("#langToggle button")
      .forEach((b) => b.classList.remove("active"));
    e.target.classList.add("active");
    applyI18n();
    renderMarketplace();
    renderProfiles();
    renderPurchase();
  });

  // Set initial active button
  document.querySelectorAll("#langToggle button").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === currentLang);
  });

  // ============================================
  //  2. ROUTER — Hash-based SPA
  // ============================================
  const router = {
    go(view) {
      window.location.hash = "#" + view;
    },
    init() {
      window.addEventListener("hashchange", () => this.handleRoute());
      this.handleRoute();
    },
    handleRoute() {
      const hash = window.location.hash.replace("#", "") || "home";
      document
        .querySelectorAll(".view")
        .forEach((v) => v.classList.remove("active"));
      const target = document.getElementById("view-" + hash);
      if (target) {
        target.classList.add("active");
      } else {
        document.getElementById("view-home").classList.add("active");
      }
      // Update nav active state
      document.querySelectorAll(".nav-links a").forEach((a) => {
        a.classList.toggle("active", a.getAttribute("data-view") === hash);
      });
      // Close mobile nav
      document.getElementById("navLinks").classList.remove("open");
      window.scrollTo({ top: 0, behavior: "smooth" });

      // Refresh data on view change
      if (hash === "marketplace") renderMarketplace();
      if (hash === "purchase") renderPurchase();
      if (hash === "profiles") renderProfiles();
      if (hash === "sell") populateSellerDropdown();
      updateHomeStats();
    },
  };

  // Nav link clicks
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      router.go(a.getAttribute("data-view"));
    });
  });

  // Burger menu
  document.getElementById("burger").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("open");
  });

  // ============================================
  //  3. DATA STORE (LocalStorage)
  // ============================================
  function loadData(key, fallback) {
    try {
      return JSON.parse(localStorage.getItem(key)) || fallback;
    } catch {
      return fallback;
    }
  }
  function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  let profiles = loadData("agri_profiles", []);
  let listings = loadData("agri_listings", []);

  // ============================================
  //  4. TRUST RANKING ENGINE
  // ============================================
  function getTrustStars(score) {
    const s = Math.max(1, Math.min(5, Math.round(score)));
    return "⭐".repeat(s);
  }
  function getTrustLabel(score) {
    const s = Math.max(1, Math.min(5, Math.round(score)));
    return t("trust_rank_" + s);
  }
  function getTrustBadgeHTML(score) {
    return `<span class="trust-badge">${getTrustStars(score)}</span> <span class="trust-score">${score.toFixed(1)} — ${getTrustLabel(score)}</span>`;
  }

  // ============================================
  //  5. DEMO PROFILE SEEDING
  // ============================================
  function seedDemoData() {
    if (loadData("agri_seeded", false)) return;

    const demoProfiles = [
      {
        id: "d1",
        name: "Ramesh Kumar",
        role: "farmer",
        location: "Lucknow, UP",
        spec: "Wheat, Mustard",
        intent: "selling",
        trustScore: 4.5,
        transactions: 32,
      },
      {
        id: "d2",
        name: "Sita Devi",
        role: "farmer",
        location: "Patna, Bihar",
        spec: "Rice, Paddy",
        intent: "selling",
        trustScore: 4.8,
        transactions: 45,
      },
      {
        id: "d3",
        name: "Mohan Singh",
        role: "farmer",
        location: "Jaipur, Rajasthan",
        spec: "Cotton, Bajra",
        intent: "selling",
        trustScore: 3.9,
        transactions: 18,
      },
      {
        id: "d4",
        name: "Laxmi Bai",
        role: "farmer",
        location: "Nagpur, Maharashtra",
        spec: "Soybean, Pulses",
        intent: "selling",
        trustScore: 4.2,
        transactions: 24,
      },
      {
        id: "d5",
        name: "Vikram Patel",
        role: "farmer",
        location: "Ahmedabad, Gujarat",
        spec: "Potato, Tomato, Vegetables",
        intent: "selling",
        trustScore: 4.6,
        transactions: 38,
      },
      {
        id: "d6",
        name: "Priya Sharma",
        role: "buyer",
        location: "Delhi NCR",
        spec: "Organic Vegetables, Wheat",
        intent: "buying",
        trustScore: 4.1,
        transactions: 15,
      },
      {
        id: "d7",
        name: "Amit Verma",
        role: "buyer",
        location: "Mumbai, Maharashtra",
        spec: "Rice, Pulses",
        intent: "buying",
        trustScore: 3.7,
        transactions: 12,
      },
      {
        id: "d8",
        name: "Sunrise Flour Mills",
        role: "industry",
        location: "Kanpur, UP",
        spec: "Wheat Flour, Atta",
        intent: "both",
        trustScore: 4.9,
        transactions: 120,
      },
      {
        id: "d9",
        name: "GreenLeaf Oils Pvt Ltd",
        role: "industry",
        location: "Indore, MP",
        spec: "Soybean Oil, Mustard Oil",
        intent: "both",
        trustScore: 4.4,
        transactions: 85,
      },
      {
        id: "d10",
        name: "FreshPack Agri Foods",
        role: "industry",
        location: "Pune, Maharashtra",
        spec: "Tomato Paste, Ketchup",
        intent: "buying",
        trustScore: 4.3,
        transactions: 62,
      },
      {
        id: "d11",
        name: "CottonKing Textiles",
        role: "industry",
        location: "Surat, Gujarat",
        spec: "Raw Cotton Procurement",
        intent: "buying",
        trustScore: 4.7,
        transactions: 95,
      },
      {
        id: "d12",
        name: "Raj Organic Co-op",
        role: "farmer",
        location: "Bhopal, MP",
        spec: "Corn, Maize",
        intent: "selling",
        trustScore: 4.0,
        transactions: 20,
      },
    ];

    const demoListings = [
      {
        id: "l1",
        sellerId: "d1",
        product: "Wheat (Sharbati)",
        role: "farmer",
        qty: 50,
        unit: "Qtl",
        price: 2350,
        location: "Lucknow, UP",
        availability: "available",
      },
      {
        id: "l2",
        sellerId: "d2",
        product: "Basmati Rice",
        role: "farmer",
        qty: 30,
        unit: "Qtl",
        price: 2100,
        location: "Patna, Bihar",
        availability: "available",
      },
      {
        id: "l3",
        sellerId: "d3",
        product: "Raw Cotton",
        role: "farmer",
        qty: 20,
        unit: "Qtl",
        price: 7200,
        location: "Jaipur, Rajasthan",
        availability: "limited",
      },
      {
        id: "l4",
        sellerId: "d4",
        product: "Soybean (Grade A)",
        role: "farmer",
        qty: 40,
        unit: "Qtl",
        price: 4800,
        location: "Nagpur, Maharashtra",
        availability: "available",
      },
      {
        id: "l5",
        sellerId: "d5",
        product: "Fresh Tomato",
        role: "farmer",
        qty: 100,
        unit: "Kg",
        price: 22,
        location: "Ahmedabad, Gujarat",
        availability: "available",
      },
      {
        id: "l6",
        sellerId: "d5",
        product: "Potato (Chipsona)",
        role: "farmer",
        qty: 80,
        unit: "Qtl",
        price: 1450,
        location: "Ahmedabad, Gujarat",
        availability: "limited",
      },
      {
        id: "l7",
        sellerId: "d8",
        product: "Premium Wheat Flour (Atta)",
        role: "industry",
        qty: 500,
        unit: "Kg",
        price: 38,
        location: "Kanpur, UP",
        availability: "available",
      },
      {
        id: "l8",
        sellerId: "d9",
        product: "Cold Pressed Mustard Oil",
        role: "industry",
        qty: 200,
        unit: "Ltr",
        price: 180,
        location: "Indore, MP",
        availability: "available",
      },
      {
        id: "l9",
        sellerId: "d12",
        product: "Sweet Corn",
        role: "farmer",
        qty: 25,
        unit: "Qtl",
        price: 2150,
        location: "Bhopal, MP",
        availability: "available",
      },
    ];

    profiles = demoProfiles;
    listings = demoListings;
    saveData("agri_profiles", profiles);
    saveData("agri_listings", listings);
    saveData("agri_seeded", true);
  }

  // ============================================
  //  6. PROFILE MANAGER
  // ============================================
  const profileFormCard = document.getElementById("profileFormCard");
  const btnNewProfile = document.getElementById("btnNewProfile");
  const btnSaveProfile = document.getElementById("btnSaveProfile");
  const btnCancelProfile = document.getElementById("btnCancelProfile");

  btnNewProfile.addEventListener("click", () => {
    profileFormCard.style.display =
      profileFormCard.style.display === "none" ? "block" : "none";
  });
  btnCancelProfile.addEventListener("click", () => {
    profileFormCard.style.display = "none";
  });

  btnSaveProfile.addEventListener("click", () => {
    const name = document.getElementById("profileName").value.trim();
    const role = document.getElementById("profileRole").value;
    const location = document.getElementById("profileLocation").value.trim();
    const spec = document.getElementById("profileSpec").value.trim();
    const intent = document.getElementById("profileIntent").value;

    if (!name || !location || !spec) {
      showToast(t("toast_fill_fields"), "error");
      return;
    }

    const newProfile = {
      id: "u" + Date.now(),
      name,
      role,
      location,
      spec,
      intent,
      trustScore: 1.0 + Math.random() * 1.5, // New user starts 1.0–2.5
      transactions: 0,
    };
    profiles.push(newProfile);
    saveData("agri_profiles", profiles);
    profileFormCard.style.display = "none";
    document.getElementById("profileName").value = "";
    document.getElementById("profileLocation").value = "";
    document.getElementById("profileSpec").value = "";
    renderProfiles();
    updateHomeStats();
    showToast(t("toast_profile_saved"), "success");
  });

  function renderProfiles(filterRole = "all") {
    const grid = document.getElementById("profileGrid");
    let filtered =
      filterRole === "all"
        ? profiles
        : profiles.filter((p) => p.role === filterRole);

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state" style="grid-column:1/-1"><div class="empty-icon">👤</div><h3>No profiles found</h3></div>`;
      return;
    }

    grid.innerHTML = filtered
      .map((p) => {
        const initials = p.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .substring(0, 2)
          .toUpperCase();
        const roleLabel = t("role_" + p.role);
        return `
      <div class="card profile-card">
        <div class="profile-avatar ${p.role}">${initials}</div>
        <div class="profile-info">
          <h3>${p.name}</h3>
          <span class="role-badge ${p.role}">${roleLabel}</span>
          <div class="profile-spec">📍 ${p.location} · ${p.spec}</div>
          <div style="margin-top:6px">${getTrustBadgeHTML(p.trustScore)}</div>
          <div style="font-size:0.8rem;color:var(--c-text-secondary);margin-top:4px">🤝 ${p.transactions} ${currentLang === "hi" ? "व्यापार" : "trades"} · ${t("intent_" + p.intent)}</div>
        </div>
      </div>`;
      })
      .join("");
  }

  // Profile filter pills
  document.getElementById("profileFilters").addEventListener("click", (e) => {
    if (!e.target.classList.contains("filter-pill")) return;
    document
      .querySelectorAll("#profileFilters .filter-pill")
      .forEach((p) => p.classList.remove("active"));
    e.target.classList.add("active");
    renderProfiles(e.target.dataset.filter);
  });

  // ============================================
  //  7. MARKETPLACE ENGINE
  // ============================================
  function getSellerProfile(sellerId) {
    return (
      profiles.find((p) => p.id === sellerId) || {
        name: "Unknown",
        role: "farmer",
        trustScore: 1.0,
      }
    );
  }

  function renderListingCard(l) {
    const seller = getSellerProfile(l.sellerId);
    const roleLabel = t("role_" + l.role);
    const availLabel =
      l.availability === "available"
        ? currentLang === "hi"
          ? "उपलब्ध"
          : "Available"
        : currentLang === "hi"
          ? "सीमित"
          : "Limited";
    const availClass = l.availability === "available" ? "available" : "limited";

    return `
    <div class="listing-card" data-role="${l.role}">
      <div class="lc-header">
        <div>
          <span class="role-badge ${l.role}">${roleLabel}</span>
          <span class="availability-tag ${availClass}">${availLabel}</span>
        </div>
      </div>
      <div class="lc-crop">${l.product}</div>
      <div class="lc-price">₹${l.price.toLocaleString("en-IN")} <small style="font-size:0.7rem;font-weight:400;color:var(--c-text-secondary)">/${l.unit}</small></div>
      <div class="lc-meta">
        <span>📦 ${l.qty} ${l.unit}</span>
        <span>📍 ${l.location}</span>
      </div>
      <div class="lc-seller">
        <div class="profile-avatar ${seller.role}" style="width:36px;height:36px;font-size:0.85rem">${seller.name
          .split(" ")
          .map((w) => w[0])
          .join("")
          .substring(0, 2)}</div>
        <div>
          <div class="seller-name">${seller.name}</div>
          <div>${getTrustBadgeHTML(seller.trustScore)}</div>
        </div>
      </div>
      <div class="lc-actions">
        <button class="btn btn-primary btn-sm btn-block" onclick="showToast('${currentLang === "hi" ? "संपर्क अनुरोध भेजा गया!" : "Contact request sent!"}','success')">${t("btn_contact")}</button>
      </div>
    </div>`;
  }

  function renderMarketplace(filter = "all", search = "") {
    const grid = document.getElementById("listingGrid");
    const empty = document.getElementById("marketEmpty");
    let filtered = listings;
    if (filter !== "all") filtered = filtered.filter((l) => l.role === filter);
    if (search)
      filtered = filtered.filter((l) =>
        l.product.toLowerCase().includes(search.toLowerCase()),
      );

    if (filtered.length === 0) {
      grid.innerHTML = "";
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
      grid.innerHTML = filtered.map(renderListingCard).join("");
    }
  }

  // Marketplace filter pills
  document
    .querySelector(".market-toolbar .filter-pills")
    ?.addEventListener("click", (e) => {
      if (!e.target.classList.contains("filter-pill")) return;
      document
        .querySelectorAll(".market-toolbar .filter-pill")
        .forEach((p) => p.classList.remove("active"));
      e.target.classList.add("active");
      const search = document.getElementById("marketSearch").value;
      renderMarketplace(e.target.dataset.filter, search);
    });

  // Marketplace search
  document.getElementById("marketSearch")?.addEventListener("input", (e) => {
    const activeFilter =
      document.querySelector(".market-toolbar .filter-pill.active")?.dataset
        .filter || "all";
    renderMarketplace(activeFilter, e.target.value);
  });

  // ============================================
  //  8. SELL PAGE
  // ============================================
  function populateSellerDropdown() {
    const sel = document.getElementById("sellSeller");
    if (!sel) return;
    const sellers = profiles.filter(
      (p) => p.role === "farmer" || p.role === "industry",
    );
    sel.innerHTML = sellers
      .map(
        (s) =>
          `<option value="${s.id}">${s.name} (${t("role_" + s.role)})</option>`,
      )
      .join("");
  }

  document.getElementById("btnCreateListing")?.addEventListener("click", () => {
    const product = document.getElementById("sellProduct").value.trim();
    const qty = parseInt(document.getElementById("sellQty").value) || 0;
    const price = parseInt(document.getElementById("sellPrice").value) || 0;
    const location = document.getElementById("sellLocation").value.trim();
    const availability = document.getElementById("sellAvailability").value;
    const sellerId = document.getElementById("sellSeller").value;
    const role = document.getElementById("sellRole").value;

    if (!product || !qty || !price || !location || !sellerId) {
      showToast(t("toast_fill_fields"), "error");
      return;
    }

    const newListing = {
      id: "l" + Date.now(),
      sellerId,
      product,
      role,
      qty,
      unit: qty > 100 ? "Kg" : "Qtl",
      price,
      location,
      availability,
    };
    listings.push(newListing);
    saveData("agri_listings", listings);
    showToast(t("toast_listing_created"), "success");
    document.getElementById("sellProduct").value = "";
    updateHomeStats();
  });

  // ============================================
  //  9. PURCHASE PAGE
  // ============================================
  function renderPurchase() {
    const search = document.getElementById("purchSearch")?.value || "";
    const filter = document.getElementById("purchFilter")?.value || "all";
    const sort = document.getElementById("purchSort")?.value || "price-asc";
    const grid = document.getElementById("purchaseGrid");
    const empty = document.getElementById("purchaseEmpty");

    let filtered = [...listings];
    if (filter !== "all") filtered = filtered.filter((l) => l.role === filter);
    if (search)
      filtered = filtered.filter((l) =>
        l.product.toLowerCase().includes(search.toLowerCase()),
      );

    // Sort
    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
    else if (sort === "trust") {
      filtered.sort((a, b) => {
        const sa = getSellerProfile(a.sellerId).trustScore;
        const sb = getSellerProfile(b.sellerId).trustScore;
        return sb - sa;
      });
    }

    if (filtered.length === 0) {
      grid.innerHTML = "";
      empty.style.display = "block";
    } else {
      empty.style.display = "none";
      grid.innerHTML = filtered.map(renderListingCard).join("");
    }
  }

  document
    .getElementById("btnPurchApply")
    ?.addEventListener("click", renderPurchase);
  document
    .getElementById("purchSearch")
    ?.addEventListener("input", renderPurchase);

  // ============================================
  //  10. SIMULATION WIZARD
  // ============================================
  const cropRates = {
    wheat: 2200,
    rice: 1900,
    cotton: 6800,
    potato: 1200,
    tomato: 2000,
    soybean: 4600,
  };
  let simState = { crop: null, step: 1 };

  function setSimStep(step) {
    simState.step = step;
    [1, 2, 3].forEach((i) => {
      document.getElementById("simStep" + i).classList.remove("active", "done");
      document.getElementById("simPanel" + i).classList.remove("active");
    });
    for (let i = 1; i < step; i++)
      document.getElementById("simStep" + i).classList.add("done");
    document.getElementById("simStep" + step).classList.add("active");
    document.getElementById("simPanel" + step).classList.add("active");
  }

  // Step 1: Crop selection
  document.getElementById("simCropGrid")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".sim-crop-btn");
    if (!btn) return;
    simState.crop = btn.dataset.crop;
    setSimStep(2);
  });

  // Step 2 → 3: Calculate
  document.getElementById("simNext2")?.addEventListener("click", () => {
    const qty = parseFloat(document.getElementById("simQty").value) || 0;
    const costs = parseFloat(document.getElementById("simCosts").value) || 0;
    const channel = document.getElementById("simChannel").value;
    const rate = cropRates[simState.crop] || 2000;

    const gmv = qty * rate;
    const mandiProfit = Math.round(gmv * 0.85 - costs);
    const directProfit = Math.round(gmv * 0.95 - costs);
    const savings = directProfit - mandiProfit;

    const resultProfit = channel === "mandi" ? mandiProfit : directProfit;
    const channelLabel =
      channel === "mandi"
        ? currentLang === "hi"
          ? "मंडी से"
          : "via Traditional Mandi"
        : currentLang === "hi"
          ? "AgriShield+ डायरेक्ट से"
          : "via AgriShield+ Direct";

    document.getElementById("simResultProfit").textContent =
      "₹" + Math.max(resultProfit, 0).toLocaleString("en-IN");
    document.getElementById("simResultChannel").textContent = channelLabel;
    document.getElementById("simMandiProfit").textContent =
      "₹" + Math.max(mandiProfit, 0).toLocaleString("en-IN");
    document.getElementById("simDirectProfit").textContent =
      "₹" + Math.max(directProfit, 0).toLocaleString("en-IN");
    document.getElementById("simSavingsMsg").textContent = t("sim_savings", {
      amount: Math.max(savings, 0).toLocaleString("en-IN"),
    });

    // Show/hide comparison
    document.getElementById("simCompare").style.display =
      channel === "compare" ? "grid" : channel === "mandi" ? "none" : "grid";
    if (channel === "compare") {
      document.getElementById("simResultProfit").textContent =
        "₹" + Math.max(directProfit, 0).toLocaleString("en-IN");
      document.getElementById("simResultChannel").textContent =
        currentLang === "hi"
          ? "AgriShield+ डायरेक्ट (सर्वश्रेष्ठ)"
          : "via AgriShield+ Direct (Best)";
    }

    setSimStep(3);
  });

  document
    .getElementById("simBack1")
    ?.addEventListener("click", () => setSimStep(1));
  document
    .getElementById("simBack2")
    ?.addEventListener("click", () => setSimStep(2));
  document.getElementById("simRestart")?.addEventListener("click", () => {
    simState = { crop: null, step: 1 };
    setSimStep(1);
  });

  // ============================================
  //  11. HOME STATS
  // ============================================
  function updateHomeStats() {
    const listingsEl = document.getElementById("stat-listings");
    const usersEl = document.getElementById("stat-users");
    if (listingsEl) listingsEl.textContent = listings.length;
    if (usersEl) usersEl.textContent = profiles.length;
  }

  // ============================================
  //  12. TOAST NOTIFICATION
  // ============================================
  function showToast(msg, type = "") {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.className = "toast show " + type;
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  }
  // Expose globally for inline onclick handlers
  window.showToast = showToast;

  // ============================================
  //  13. HOMEPAGE PROFIT CALCULATOR
  // ============================================
  function initHomeSimulator() {
    const harvestEl = document.getElementById('harvest-input');
    const rateEl = document.getElementById('rate-input');
    const seedEl = document.getElementById('seed-cost');
    const laborEl = document.getElementById('labor-cost');
    if (!harvestEl) return;

    function calcProfit() {
      const harvest = parseFloat(harvestEl.value) || 0;
      const rate = parseFloat(rateEl.value) || 0;
      const seed = parseFloat(seedEl.value) || 0;
      const labor = parseFloat(laborEl.value) || 0;
      const gmv = harvest * rate;
      const kharcha = seed + labor;
      const mandiProfit = Math.round(gmv * 0.85 - kharcha);
      const agriProfit = Math.round(gmv * 0.95 - kharcha);
      const saving = agriProfit - mandiProfit;

      const fmt = (n) => '\u20b9' + Math.max(n, 0).toLocaleString('en-IN');
      document.getElementById('gross-total').textContent = fmt(gmv);
      document.getElementById('total-kharcha').textContent = fmt(kharcha);
      document.getElementById('mandi-total').textContent = fmt(mandiProfit);
      document.getElementById('agri-total').textContent = fmt(agriProfit);

      const extraEl = document.getElementById('extra-income');
      if (extraEl) extraEl.textContent = fmt(saving);

      const mBar = document.getElementById('bar-mandi');
      const aBar = document.getElementById('bar-agri');
      const maxP = Math.max(agriProfit, 1);
      if (mBar) mBar.style.height = Math.max((mandiProfit / maxP) * 95, 5) + '%';
      if (aBar) aBar.style.height = '95%';
    }

    [harvestEl, rateEl, seedEl, laborEl].forEach(el => el.addEventListener('input', calcProfit));
    calcProfit();
  }


  // ============================================
  //  14. LIVE PROFIT CHART (Chart.js)
  // ============================================
  let profitChart = null;
  let chartInterval = null;

  const CROP_RATES_CHART = {
    wheat: { base: 2200, label: 'Wheat' },
    rice: { base: 1900, label: 'Rice' },
    cotton: { base: 6800, label: 'Cotton' },
    potato: { base: 1200, label: 'Potato' },
    tomato: { base: 2000, label: 'Tomato' },
  };

  function initLiveChart(crop) {
    if (typeof Chart === 'undefined') return;
    const canvas = document.getElementById('profitChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const info = CROP_RATES_CHART[crop] || CROP_RATES_CHART.wheat;

    if (profitChart) profitChart.destroy();
    if (chartInterval) clearInterval(chartInterval);

    const labels = [];
    const mandiData = [];
    const agriData = [];
    let tick = 0;

    function addDataPoint() {
      tick++;
      const fluct = 1 + (Math.random() - 0.5) * 0.12;
      const rate = Math.round(info.base * fluct);
      const qty = 10;
      const gmv = rate * qty;
      const mp = Math.round(gmv * 0.85);
      const ap = Math.round(gmv * 0.95);

      labels.push(tick + 's');
      mandiData.push(mp);
      agriData.push(ap);

      if (labels.length > 20) { labels.shift(); mandiData.shift(); agriData.shift(); }

      profitChart.update('none');

      // Update stat values
      const avgM = Math.round(mandiData.reduce((a, b) => a + b, 0) / mandiData.length);
      const avgA = Math.round(agriData.reduce((a, b) => a + b, 0) / agriData.length);
      const mAvg = document.getElementById('graph-mandi-avg');
      const aAvg = document.getElementById('graph-agri-avg');
      const gain = document.getElementById('graph-gain');
      const rateEl = document.getElementById('graph-rate');
      if (mAvg) mAvg.textContent = '\u20b9' + avgM.toLocaleString('en-IN');
      if (aAvg) aAvg.textContent = '\u20b9' + avgA.toLocaleString('en-IN');
      if (gain) gain.textContent = '\u20b9' + (avgA - avgM).toLocaleString('en-IN');
      if (rateEl) rateEl.textContent = '\u20b9' + rate.toLocaleString('en-IN') + ' /Qtl';
    }

    profitChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          { label: 'Mandi Profit', data: mandiData, borderColor: '#f87171', backgroundColor: 'rgba(248,113,113,0.1)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 },
          { label: 'AgriShield+ Profit', data: agriData, borderColor: '#4ade80', backgroundColor: 'rgba(74,222,128,0.1)', fill: true, tension: 0.4, borderWidth: 2, pointRadius: 0 }
        ]
      },
      options: {
        responsive: true, maintainAspectRatio: false,
        animation: { duration: 300 },
        plugins: { legend: { labels: { color: '#fff', font: { family: 'Inter' } } } },
        scales: {
          x: { ticks: { color: '#888' }, grid: { color: 'rgba(255,255,255,0.05)' } },
          y: { ticks: { color: '#888', callback: v => '\u20b9' + v.toLocaleString('en-IN') }, grid: { color: 'rgba(255,255,255,0.05)' } }
        }
      }
    });

    for (let i = 0; i < 8; i++) addDataPoint();
    chartInterval = setInterval(addDataPoint, 2000);
  }

  // Crop selector buttons for graph
  document.querySelectorAll('.crop-btns .crop-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.crop-btns .crop-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      initLiveChart(btn.dataset.crop);
    });
  });


  // ============================================
  //  INIT
  // ============================================
  seedDemoData();
  applyI18n();
  updateHomeStats();
  router.init();
  initHomeSimulator();
  initLiveChart('wheat');

  // Make router global for onclick usage
  window.router = router;
});

