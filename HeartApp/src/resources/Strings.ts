// Intro Module
const APP_NAME = 'APP';
const SIGNUP_TEXT = 'Create Your Account';
const LOGIN_TEXT = 'Continue Your Journey';
const HAVE_ACCOUNT_TEXT = 'Already have an account';

const Eng_Strings = {
  // Login Page
  app_name: 'The Heart App',
  login_text: 'Login to continue ...',
  name_placeholder: 'Name',
  password_placeholder: 'Password',
  forgot_password: 'Forgot password?',
  no_account: "Don't have an account?",
  sign_up: 'Sign Up',
  login: 'Login',
  welcome: 'Welcome User',
  keep_heart_healthy: 'Keep your heart healthy',
  next: 'Next',
  change_password: 'Change Password',

  //   SignUp Page
  create_account: 'Create Your Account ...',
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  number: 'Number',
  already_account: 'Already have an account?',

  //   DashBoard Screen
  comming_soon: 'Comming Soon',
  comming_soon_text: 'feature is comming soon',
  connect: 'Connect',
  my_health: 'My Health',
  be_healthy: 'Be Healthy',

  know_your_heart: 'know Your Heart',
  take_the_test: 'Take the Test',
  connect_with_cardiologist: 'Connect with Cardiologist',

  medical_records: 'Medical Records',
  inr_clinic: 'INR Clinic',
  health_blogs: 'Health Blogs',

  diet_exercise: 'Diet & Exercise',
  health_updates: 'Health Updates',
  join_health_hearts: 'Join @ Health Hearts',

  search: 'Search ...',
  profile: 'Profile',
  help_center: 'Help Center',

  //   Know your heart
  what_is_an_heart_attack: 'What is an Heart Attack',
  warning_signs: 'Warning Signs',
  presentation_in_women: 'Presentation in Women',
  what_is_an_emergency: 'What is an Emergency',
  test_procedures: 'Test/Procedures',
  treatement_of_acute_heart_attack: 'Treatement of Acute Heart Attack',
  preventation_strategy: 'Preventation Strategy',

  //   Menu
  about: 'About',
  contact_us: 'Contact US',
  logout: 'Logout',
  menu: 'Menu',
  select_language: 'Select Languagae',
  new_password: 'New password',
  current_password: 'Current password',
  re_new_password: 'Re enter new password',
  password_updated: 'Password Updated',
  pass_updated_message: 'Your password has been updated.',
  profile_updated: 'Profile Updated',
  profile_updated_message: 'Your profile have been updated.',
  ok: 'OK',
  error: 'Error',
  something_went_wrong: 'Something went wrong please try again',
  gender: ' Select gender',
  dob: 'Select date of Birth',
  male: 'Male',
  female: 'Female',
  other: 'Others',

  // know your heart Details
  // 1. Heart Attack
  what_is_an_heart_attack_data: [
    'Heart attack is the death of a part of heart muscles, leading to permanent loss of heart capability to perform its work, pumping blood.',
    'To understand why heart attacks occur, you first need to know how the heart works. The job of the heart is to pump blood to all parts of the body. It does so through a system of tubes called arteries. Arteries supplying blood to the heart are called coronary arteries.',
    'Over time, fat gets deposited in the coronary arteries, leading to blockage in the flow of blood. Due to the blockage, the heart muscles receive less and less oxygen. This lack of oxygen puts strain on the muscles, which may cause pain during heavy work or exercise. This is known as angina.',
    'When the blockage becomes so severe that complete blood flow is stopped, the muscles of the heart begin to die. This condition is referred to as a heart attack.',
  ],
  warning_signs_data: [
    'The most common symptom is chest pain. Patients describe it as a sensation of tightness, heaviness, burning, or squeezing of the chest. It is often mistaken as indigestion, leading to patients ignoring it! But pain may occur in areas other than the chest as well. Read through the following symptoms carefully, so you are better-prepared:',
    'Pain or discomfort in other areas of the upper body including the arms, left shoulder, back, neck, jaw, or stomach',
    'Difficulty in breathing or shortness of breath',
    'Sweating or "cold sweat"',
    'Fullness, indigestion, or choking feeling (may feel like "heartburn")',
    'Nausea or vomiting',
    'Light-headedness, dizziness, extreme weakness, or anxiety',
    'Rapid or irregular heartbeats',
    'Different people can experience different kinds of pain. It is usually of following types:',
    'Crushing',
    'Constricting',
    'Heaviness',
    'Squeezing',
    'Suffocating',
    'Burning like Indigestion',
    'There are also times when patients do not develop any such symptoms during or after a heart attack. This is called a silent heart attack.',
    'Think you might be at risk? Use our detection tool',
  ],
  presentation_in_women_data: [
    'Symptoms of coronary artery disease in women:',
    '	Studies show that women symptoms are less likely identified as heart disease related. The symptoms of coronary artery disease and heart attack can be different for women than they are in men. Women are also less likely to recognize the symptoms of a heart attack and seek treatment. By learning and recognizing the symptoms, women can become assertive in their treatment. The most common symptoms of heart disease in women are:',
    'Pain or pressure over the chest that travels to the arm or jaw',
    'A burning sensation in the chest or upper abdomen',
    'Shortness of breath, irregular heartbeat, dizziness, sweating, fatigue, and nausea',
  ],
  what_is_an_emergency_data: [
    'Why is time so crucial ? ',
    'During a heart attack, there is a sudden 100% blockage in one of the arteries supplying the heart muscles, resulting in necrosis (death) of muscle fibers.',
    'This process takes some time and if we want to avoid or minimise the damage to the muscles then we have to open this blocked artery within that time. ',
    'Failure to do so results in permanent damage to the muscles. Large amount of muscle damage decreases the pumping capacity of heart which eventually leads to heart failure.',
    'To get early treatment and save their heart, patients must first recognize their symptoms.',
    'So, awareness of these symptoms is the key to early treatment of this disease.',
  ],
  test_procedures_data: [
    'Tests for diagnosis:',
    'Electrocardiogram (ECG) :- It is a recording of activity of heart muscles on a paper taken via leads applied to the chest of the patient. It helps in diagnosing heart attack, tells which area of heart is being affected and the type of heart attack (STEMI or NSTEMI). It also gives information regarding rhythm of heart beat.',
    'Troponin (Cardiac biomarker) :- This test is performed on a blood sample taken from the patient. It is highly sensitive and provides the earliest confirmation of a heart attack.',
    'Echocardiogram:-This non-invasive test is done using an ultrasound probe. It helps the doctor assess the damage caused to the heart and determine its remaining functioning.',
    "Stress Test (TMT Stress Thallium, Stress Echo):-If the diagnosis of coronary artery disease is indeterminate based on the patient's history and ECG findings, stress tests such as a Treadmill Test (TMT), stress thallium, or stress echocardiography should be done.",
    'Coronary Angiography:-This test allows direct visualization of the arteries supplying the heart, helping identify the site and size of any blockages present. A special dye is used to view blood flow. A catheter is inserted into an artery in the wrist or thigh, which is then guided to the heart arteries to release the dye. This procedure is known as an angiogram.',
    'Primary Angioplasty:-In cases of emergency, such as a heart attack, after the blocked region is identified during coronary angiography, it is opened using a balloon and a stent (a small mesh) is placed there to keep the artery open. This procedure is known as primary angioplasty.',
    'Elective Angiography:-If a patient has symptoms of coronary artery disease but is not suspected to have a heart attack, an angiography may be scheduled as an elective procedure. If the coronary angiogram is done through the wrist (Trans-radial), the patient can be discharged from the hospital within two hours and may resume normal activities immediately if everything is normal. If the angiogram is done via the thigh, the patient is required to stay at the hospital for at least 6-8 hours.',
    'After the coronary angiography, the further treatment needed by the patient can be decided - Medical management, Coronary Angioplasty, or Bypass surgery.',
  ],
  treatement_of_acute_heart_attack_data: [
    ' Treatment of acute heart attack (ST elevation type)\nPatient is given Tab Disprin, Clopidogrel/ Ticagrelor and statin (Atorvastatin/ Rosuvastatin)\n\nIf facilities and expertise are available then immediate angioplasty (Primary angioplasty) is the treatment of choice.',
    'If facilities are not available and two hours or more will be required to offer primary angioplasty, then patient should be given the benefit of clot dissolving drugs (provided there are no contraindications).',
    'Strict guidelines are made for hospitals to save the dying muscles during heart attack.',
    'According to these:',
    'Once the patient reaches the hospital, their ECG and diagnosis of a heart attack should be made within 10 minutes.',
    'If the patient is to be taken for primary angioplasty, it should be done within 60 minutes of hospital arrival (Door to balloon time).',
    'If the patient is to be given thrombolysis (clot-dissolving medication), it should be started within 30 minutes of hospital arrival (Door to needle time).',
    'If the expected delay of angioplasty is more than two hours, it is better to offer thrombolytic therapy (if there are no contraindications).',
  ],
  preventation_strategy_data: [
    'Coronary artery disease may be prevented or its severity reduced by observing some preventive strategies',
    'Lifestyle changes:',
    'Dietary changes: It is the most important prevention strategy. You can find out the recommended weight for your height and the total amount of calories you should consume in a day. Try not to exceed the required amount. Avoid fried foods. Limit foods and beverages high in calories but low in nutrients. Choose fat-free or low-fat dairy products. Decrease salt intake to less than 5g per day.',
    'Weight reduction: Find out the ideal body weight for your height and try to attain it.',
    'Discontinue smoking and tobacco',
    'Avoid alcohol',
    'Regular physical activity: Aerobic exercises benefit your heart, and include walking, jogging, swimming, or biking. According to AHA recommendations: For overall cardiovascular health - At least 30 minutes of moderate-intensity aerobic activity should be done for 5 days a week. For lowering blood pressure and cholesterol - 40 minutes of moderate to vigorous intensity aerobic activity should be done 3-4 times a week. Even if you have been sedentary for years, you can start today. Set smaller goals and gradually work your way up.',
    'Control of diabetes: Maintain blood sugar levels in the optimal range. Never discontinue treatment without consulting your doctor.',
    'Control of high blood pressure: If high BP has been diagnosed, follow the prescribed treatment.',
    'Lowering cholesterol: If high cholesterol levels are found in blood they should be brought under control.',
  ],
};
const Hin_Strings = {
  // Login Page
  app_name: 'द हार्ट ऐप',
  login_text: 'जारी रखने के लिए लॉगिन करें ...',
  name_placeholder: 'नाम',
  password_placeholder: 'पासवर्ड',
  forgot_password: 'पासवर्ड भूल गए?',
  no_account: 'खाता नहीं है?',
  sign_up: 'साइन अप',
  login: 'लॉगिन',
  change_password: 'पासवर्ड बदलें',

  // SignUp Page
  create_account: 'अपना खाता बनाएं ...',
  first_name: 'पहला नाम',
  last_name: 'अंतिम नाम',
  email: 'ईमेल',
  number: 'नंबर',
  already_account: 'पहले से ही खाता है?',
  welcome: 'स्वागत है उपयोगकर्ता',
  keep_heart_healthy: 'अपने दिल को स्वस्थ रखें',
  next: 'आगे बढ़ें',
  // DashBoard Screen
  comming_soon: 'जल्द आ रहा है',
  comming_soon_text: 'सुविधा जल्द ही आ रही है',
  connect: 'कनेक्ट करें',
  my_health: 'मेरे स्वास्थ्य',
  be_healthy: 'स्वस्थ रहें',

  know_your_heart: 'अपने हृदय को जानें',
  take_the_test: 'परीक्षा लें',
  connect_with_cardiologist: 'कार्डियोलॉजिस्ट से संपर्क करें',

  medical_records: 'मेडिकल रिकॉर्ड्स',
  inr_clinic: 'INR क्लिनिक',
  health_blogs: 'स्वास्थ्य ब्लॉग्स',

  diet_exercise: 'आहार और व्यायाम',
  health_updates: 'स्वास्थ्य अपडेट',
  join_health_hearts: 'स्वास्थ्य हार्ट्स में शामिल हों',

  search: 'खोजें ...',
  profile: 'प्रोफ़ाइल',
  help_center: 'सहायता केंद्र',

  // Know your heart
  what_is_an_heart_attack: 'हृदय अटैक क्या होता है',
  warning_signs: 'चेतावनी संकेत',
  presentation_in_women: 'महिलाओं में प्रस्तुति',
  what_is_an_emergency: 'आपातकालीन स्थिति क्या होती है',
  test_procedures: 'टेस्ट/प्रक्रिया',
  treatement_of_acute_heart_attack: 'तीव्र हृदय अटैक का उपचार',
  preventation_strategy: 'रोकथाम रणनीति',

  // Menu
  about: 'हमारे बारे में',
  contact_us: 'संपर्क करें',
  logout: 'लॉगआउट',
  menu: 'मेन्यू',
  select_language: 'भाषा चुनें',
  new_password: 'नया पासवर्ड',

  current_password: 'वर्तमान पासवर्ड',
  re_new_password: 'नया पासवर्ड फिर से दर्ज करें',
  password_updated: 'पासवर्ड अपडेट किया गया',
  pass_updated_message: 'आपका पासवर्ड अपडेट किया गया है।',
  profile_updated: 'प्रोफ़ाइल अपडेट',
  profile_updated_message: 'आपकी प्रोफ़ाइल अपडेट की गई है।',
  ok: 'ठीक है',
  error: 'त्रुटि',
  something_went_wrong: 'कुछ गड़बड़ हो गई है, कृपया पुनः प्रयास करें',
  gender: 'लिंग चुनें',
  dob: 'जन्म तिथि चुनें',
  male: 'पुरुष',
  female: 'महिला',
  other: 'अन्य',

  what_is_an_heart_attack_data: [
    'हार्ट अटैक हृदय के हिस्से की मृत्यु होती है, जिससे हृदय की क्षमता में स्थायी हानि होती है, जिसके कारण रक्त को पम्प करने की क्षमता में कमी हो जाती है।',
    'हार्ट अटैक का कारण जानने के लिए, सबसे पहले आपको यह जानना चाहिए कि हृदय कैसे काम करता है। हृदय का काम शरीर के सभी भागों में रक्त पंप करना होता है। यह एक पाइपलाइन के प्रणाली के माध्यम से करता है, जिसे धमनियों के रूप में जाना जाता है। हृदय को रक्त पंप करने वाली धमनियों को कोरोनरी धमनियाँ कहा जाता है।',
    'समय के साथ, धमनियों में चर्बी जमा हो जाती है, जिससे रक्त की प्रवाह में ब्लॉकेज हो जाती है। ब्लॉकेज के कारण, हृदय के हिस्से को कम से कम ऑक्सीजन प्राप्त होती है। इस ऑक्सीजन की कमी से हृदय के मांसपेशियों पर दबाव पड़ता है, जिसके कारण भारी काम या व्यायाम के दौरान दर्द हो सकता है। इसे एंजाइना के रूप में जाना जाता है।',
    'जब ब्लॉकेज इतनी गंभीर हो जाती है कि पूरी रक्त प्रवाह बंद हो जाती है, तो हृदय की मांसपेशियों का मरना शुरू हो जाता है। इस स्थिति को हार्ट अटैक कहा जाता है।',
  ],
  warning_signs_data: [
    'सबसे सामान्य लक्षण हृदय दर्द होता है। मरीज़ इसे सीने में दबाव, भारीपन, जलन या सीने को दबाने की एहसास के रूप में वर्णित करते हैं। यह अक्सर पाचन संबंधी समस्या के रूप में भ्रामित किया जाता है, जिसके कारण मरीज़ इसे नजरअंदाज़ कर देते हैं! लेकिन दर्द हृदय के अलावा अन्य क्षेत्रों में भी हो सकता है। नीचे दिए गए लक्षणों को ध्यान से पढ़ें, ताकि आप बेहतर तैयार हो सकें:',
    'हाथों, बाएं कंधे, पीठ, गर्दन, जबड़े या पेट के अन्य हिस्सों में दर्द या तकलीफ',
    'सांस लेने में कठिनाई या श्वास की कमी',
    'पसीना या "ठंडा पसीना"',
    'भरीपन, पाचन संबंधी समस्या, या चोकिंग की भावना (जैसे "हार्टबर्न" लग सकता है)',
    'मतली या उल्टी',
    'चक्कर, चक्कर आना, बेहद कमजोरी या चिंता',
    'तेज़ या अनियमित हृदय की धड़कन',
    'विभिन्न लोग विभिन्न प्रकार का दर्द महसूस कर सकते हैं। आमतौर पर ये निम्नलिखित प्रकार के होते ह ैं:',
    'पीसने जैसा',
    'सिंचाई जैसा',
    'भारीपन',
    'दबाव',
    'सांस लेने में असहायता',
    'इंडिजेस्टन की तरह जलन',
    'कभी-कभी मरीज़ द्वारा दर्द होने या हृदय अटैक के बाद किसी भी ऐसे लक्षण का विकास नहीं होता है। इसे चुप्पी रहित हृदय अटैक कहा जाता है।',
    'क्या आपको लगता है कि आप जोखिम में हो सकते हैं? हमारा पता लगाने का उपकरण उपयोग करें',
  ],

  presentation_in_women_data: [
    'महिलाओं में कोरोनरी धमनी रोग के लक्षण:',
    'अध्ययनों से पता चलता है कि महिलाओं के लक्षणों को हृदय रोग से संबंधित माना जाना कम है। कोरोनरी धमनी रोग और हृदय अटैक के लक्षण पुरुषों की तुलना में महिलाओं के लिए अलग हो सकते हैं। महिलाएं हृदय अटैक के लक्षणों को पहचानने और उपचार की तलाश करने की तुलना में कम संभावना रखती हैं। लक्षणों को समझकर और पहचानकर, महिलाएं अपने उपचार में सकारात्मक बन सकती हैं। महिलाओं में हृदय रोग के सबसे सामान्य लक्षण हैं:',
    'सीने में दर्द या दबाव, जो हाथ या जबड़े तक जाता है',
    'सीने या ऊपरी पेट में जलन की अनुभूति',
    'सांस लेने में कठिनाई, अनियमित हृदय की धड़कन, चक्कर, पसीना, थकान और मतली',
  ],
  what_is_an_emergency_data: [
    'क्यों समय इतना महत्वपूर्ण है? ',
    'हृदय अटैक के दौरान, हृदय मांसपेशियों को आपूर्ति करने वाली धमनी में एकाएक 100% ब्लॉकेज हो जाती है, जिससे मांसपेशियों के मरने (नेक्रोसिस) का कारण बनता है।',
    'यह प्रक्रिया कुछ समय लेती है और अगर हम मांसपेशियों में होने वाले क्षति को बचाना या कम करना चाहते हैं, तो हमें उस समय के भीतर इस ब्लॉकेज वाली धमनी को खोलना होगा।',
    'ऐसा न करने से मांसपेशियों में स्थायी क्षति होती है। बड़ी मात्रा में मांसपेशी क्षति हृदय की पंपिंग क्षमता को कम करती है, जो अंततः हृदय प्रदाह की ओर ले जाता है।',
    'जल्दी उपचार प्राप्त करने और अपने हृदय को बचाने के लिए, मरीजों को पहले अपने लक्षणों को पहचानना चाहिए।',
    'इसलिए, इस बीमारी के समय के उपचार की शुरुआत की चीज है इन लक्षणों की जागरूकता।',
  ],
  test_procedures_data: [
    'निदान के लिए परीक्षण:',
    'इलेक्ट्रोकार्डियोग्राम (ईसीजी): - यह मरीज की छाती पर लगाए गए लीड के माध्यम से हृदय मांसपेशियों की गतिविधि का रेकॉर्डिंग है। इसकी मदद से हृदय प्रदाह का निदान किया जा सकता है, यह बताता है कि किस हिस्से को हृदय प्रभावित किया जा रहा है और हृदय प्रदाह के प्रकार (STEMI या NSTEMI)। यह हृदय के धड़कने की तालिका के बारे में जानकारी भी देता है।',
    'ट्रोपोनिन (हृदय बायोमार्कर): - यह परीक्षण मरीज से लिए गए रक्त से होता है। यह अत्यंत संवेदनशील होता है और हृदय प्रदाह की सबसे पहले पुष्टि प्रदान करता है।',
    'इकोकार्डियोग्राफी: - यह गैर-आक्रामक परीक्षण उल्ट्रासाउंड प्रोब का उपयोग करके किया जाता है। यह डॉक्टर को हृदय को हुए क्षति का मूल्यांकन करने और उसके शेष कार्य का निर्धारण करने में मदद करता है।',
    'स्ट्रेस टेस्ट (टीएमटी स्ट्रेस थैलियम, स्ट्रेस इको): - मरीज के इतिहास और ईसीजी फिंडिंग्स के आधार पर यदि कोरोनरी धमनी रोग का निदान अनिश्चित हो, तो ट्रेडमिल टेस्ट (टीएमटी), स्ट्रेस थैलियम या स्ट्रेस इकोकार्डियोग्राफी जैसे स्ट्रेस टेस्ट किये जाने चाहिए।',
    'कोरोनरी एंजियोग्राफी: - यह परीक्षण हृदय को आपूर्ति प्रदान करने वाली धमनियों की सीधी दृश्यीकरण की अनुमति देता है, जिससे मौजूदा किसी भी ब्लॉकेज की स्थान और आकार की पहचान हो सके। खून की बहाव को देखने के लिए एक विशेष रंग का उपयोग किया जाता है। एक कैथेटर को हाथ की कलाई या जांघ में स्थानित किया जाता है, जो फिर हृदय धमनियों के लिए डाइ को रिलीज़ करने के लिए निर्देशित किया जाता है। इस प्रक्रिया को एंजियोग्राम के रूप में जाना जाता है।',
    'प्राथमिक एंजियोप्लास्टी: - आपातकालीन स्थितियों में, जैसे हृदय प्रदाह, कोरोनरी एंजियोग्राफी के दौरान ब्लॉक क्षेत्र की पहचान होने के बाद, उसे एक बैलून का उपयोग करके खोला जाता है और वहां एक स्टेंट (छोटी सी जाल) रखा जाता है ताकि धमनी खुली रहे। इस प्रक्रिया को प्राथमिक एंजियोप्लास्टी के नाम से जाना जाता है।',
    'इलेक्टिव एंजियोग्राफी: - यदि किसी मरीज को कोरोनरी धमनी रोग के लक्षण होते हैं लेकिन उसे हृदय प्रदाह का संदेह नहीं होता है, तो एक एंजियोग्राफी को इलेक्टिव प्रक्रिया के रूप में निर्धारित किया जा सकता है। यदि कोरोनरी एंजियोग्राम हाथ के माध्यम से किया जाता है (ट्रांस-रेडियल), तो मरीज को अस्पताल से दो घंटे के भीतर छोड़ दिया जा सकता है और यदि सब कुछ सामान्य हो, तो वह तत्परता कार्यों को तत्काल पुनः प्रारंभ कर सकता है। यदि एंजियोग्राम जांघ के माध्यम से किया जाता है, तो मरीज को कम से कम 6-8 घंटे तक अस्पताल में रहने की आवश्यकता होती है।',
    'कोरोनरी एंजियोग्राफी के बाद, मरीज को आगे की आवश्यक उपचार की जांच की जा सकती है - मेडिकल मैनेजमेंट, कोरोनरी एंजियोप्लास्टी या बाइपास सर्जरी।',
  ],
  treatement_of_acute_heart_attack_data: [
    'एक्यूट हृदय अटैक का उपचार (एसटी उच्चतमता प्रकार)',
    'रोगी को टैब डिस्प्रिन, क्लोपिडोग्रेल/टिकाग्रेलोर और स्टैटिन (एटोरवास्टेटिन/रोसुवास्टेटिन) दिए जाते हैं',
    'यदि सुविधाएं और विशेषज्ञता उपलब्ध हों, तो तत्काल एंजियोप्लास्टी (प्राथमिक एंजियोप्लास्टी) उपचार की प्राथमिकता होती है।',
    'यदि सुविधाएं उपलब्ध नहीं हैं और प्राथमिक एंजियोप्लास्टी प्रदान करने के लिए दो घंटे या अधिक का समय आवश्यक होगा, तो रोगी को थ्रॉम्बोलाइटिक दवाओं का लाभ दिया जाना चाहिए (यदि कोई विरोधात्मक संकेत न हों)।',
    'अस्पतालों के लिए कठोर मार्गनिर्देश बनाए गए हैं हृदय अटैक के दौरान मरते हुए मांसपेशियों को बचाने के लिए।',
    'इनके अनुसार:',
    'रोगी अस्पताल पहुंचते ही, उनका ईसीजी और हृदय अटैक का निदान 10 मिनट के भीतर होना चाहिए।',
    'यदि रोगी को प्राथमिक एंजियोप्लास्टी के लिए ले जाना होता है, तो इसे अस्पताल पहुंचने के 60 मिनट के भीतर किया जाना चाहिए (द्वार से बैलून का समय)।',
    'यदि रोगी को थ्रॉम्बोलाइसिस (क्लॉट-विघटन दवा) दी जानी है, तो इसे अस्पताल पहुंचने के 30 मिनट के भीतर शुरू किया जाना चाहिए (द्वार से सुई का समय)।',
    'यदि एंजियोप्लास्टी की प्रत्याशित विलंब दो घंटे से अधिक है, तो यदि कोई विरोधात्मक संकेत न हों, थ्रॉम्बोलाइटिक चिकित्सा का प्रदान करना बेहतर होता है।',
  ],
  preventation_strategy_data: [
    'हृदयामार्ग रोग को निरोधित किया जा सकता है या इसकी गंभीरता को कम किया जा सकता है कुछ निरोधक रणनीतियों का पालन करके।',
    'जीवनशैली में परिवर्तन:',
    'आहार में परिवर्तन: यह सबसे महत्वपूर्ण निरोधक रणनीति है। आप अपनी लंबाई के लिए अनुशंसित वजन और एक दिन में आपको कितने कैलोरी सेवन करने चाहिए, इसे जान सकते हैं। आवश्यक मात्रा से अधिक न जाएं। तले हुए खाद्य पदार्थों से बचें। कैलोरी ऊँची होने के साथ ही पोषणात्मकता कम होने वाले खाद्य और पेय पदार्थों की मात्रा सीमित करें। शुद्ध या कम वसा वाले दूध उत्पादों को चुनें। रोजाना 5 ग्राम से कम नमक सेवन करें।',
    'वजन कम करना: अपनी लंबाई के लिए आदर्श शरीर का वजन जानें और उसे प्राप्त करने का प्रयास करें।',
    'सिगरेट पीना और तंबाकू छोड़ें',
    'शराब से बचें',
    'नियमित शारीरिक गतिविधि: एयरोबिक व्यायाम आपके हृदय के लिए फायदेमंद होते हैं और इसमें चलना, जॉगिंग, तैराकी, या बाइकिंग शामिल होती है। AHA की सिफारिशों के अनुसार: संपूर्ण कार्डियोवैस्कुलर स्वास्थ्य के लिए - 5 दिनों के लिए कम से कम 30 मिनट की माध्यम आवेगीय गतिविधि की जानी चाहिए। रक्तचाप और कोलेस्ट्रोल को कम करने के लिए - 3-4 बार हफ्ते में 40 मिनट की माध्यम से तीव्र आवेगीय गतिविधि की जानी चाहिए। यदि आप सालों से बेतरतीब रहे हैं, तो आप आज से ही शुरू कर सकते हैं। छोटे लक्ष्यों को स्थापित करें और धीरे-धीरे उन्हें पूरा करें।',
    'मधुमेह का नियंत्रण: रक्त शर्करा स्तर को आदर्श सीमा में रखें। अपने डॉक्टर से सलाह लिए बिना कभी भी उपचार को बंद न करें।',
    'उच्च रक्तचाप का नियंत्रण: यदि उच्च रक्तचाप का निदान हो गया है, तो निर्धारित उपचार का पालन करें।',
    'कोलेस्ट्रोल को कम करना: यदि रक्त में उच्च कोलेस्ट्रॉल स्तर मिलता है, तो उसे नियंत्रण में लाया जाना चाहिए।',
  ],
};

export {
  APP_NAME,
  LOGIN_TEXT,
  SIGNUP_TEXT,
  HAVE_ACCOUNT_TEXT,
  Eng_Strings,
  Hin_Strings,
};
