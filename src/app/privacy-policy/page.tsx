"use client";
import type { Metadata } from "next";
import LegalLayout, { Section, InfoBox } from "@/components/legal/LegalLayout";
import { useLang } from "@/context/LanguageContext";

const TOC_EN = [
  { id: "intro",       label: "Introduction" },
  { id: "collect",     label: "Data We Collect" },
  { id: "use",         label: "How We Use Data" },
  { id: "firebase",    label: "Third-Party Services" },
  { id: "payments",    label: "Payment Data" },
  { id: "cookies",     label: "Cookies & Analytics" },
  { id: "retention",   label: "Data Retention" },
  { id: "rights",      label: "Your Rights" },
  { id: "children",    label: "Children's Privacy" },
  { id: "contact",     label: "Contact for Privacy" },
];

const TOC_HI = [
  { id: "intro",       label: "परिचय" },
  { id: "collect",     label: "हम जो डेटा एकत्र करते हैं" },
  { id: "use",         label: "हम डेटा का उपयोग कैसे करते हैं" },
  { id: "firebase",    label: "तृतीय-पक्ष सेवाएँ" },
  { id: "payments",    label: "भुगतान डेटा" },
  { id: "cookies",     label: "कुकीज़ और एनालिटिक्स" },
  { id: "retention",   label: "डेटा प्रतिधारण (Retention)" },
  { id: "rights",      label: "आपके अधिकार" },
  { id: "children",    label: "बच्चों की गोपनीयता" },
  { id: "contact",     label: "गोपनीयता के लिए संपर्क" },
];

function ContentEN() {
  return (
    <>



      <Section id="intro">
        <h2>Introduction</h2>
        <InfoBox>
          <strong>Paramvani ("we", "us", "our")</strong> is committed to protecting your privacy. This
          Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
          use our platform at <strong>paramvani.vercel.app</strong> and any associated services.
        </InfoBox>
        <p>
          By accessing or using Paramvani, you agree to the collection and use of information in
          accordance with this policy. If you do not agree, please do not use our service.
        </p>
        <p>
          This policy also covers our Cookie Policy and your Data Privacy Rights (including the right to
          access, correct, and delete your personal data).
        </p>
      </Section>

      <Section id="collect">
        <h2>Data We Collect</h2>
        <h3>Information You Provide</h3>
        <ul>
          <li><strong>Account Information:</strong> Name, email address, and profile photo collected via third-party authentication.</li>
          <li><strong>Payment Information:</strong> Payment details are processed by our payment gateway and never stored on our servers. We only store the order ID and payment ID for reference.</li>
          <li><strong>Voice Inputs:</strong> If you use voice input, your audio is transcribed by a third-party service and immediately discarded. We do <strong>not</strong> store your voice recordings or transcripts.</li>
        </ul>
        <h3>Information Collected Automatically</h3>
        <ul>
          <li><strong>Usage Data:</strong> Pages visited, features used, time spent, and interaction logs.</li>
          <li><strong>Device Data:</strong> Browser type, OS, screen size, and IP address.</li>
          <li><strong>Cookies:</strong> Authentication tokens and preference cookies (see Cookies section).</li>
        </ul>
        <h3>Information from Third Parties</h3>
        <ul>
          <li><strong>Authentication Providers:</strong> Basic profile information when you sign in.</li>
          <li><strong>Payment Processors:</strong> Payment status notifications via our server-side webhook.</li>
        </ul>
      </Section>

      <Section id="use">
        <h2>How We Use Data</h2>
        <p>We use your data for the following purposes:</p>
        <ul>
          <li>To authenticate you and maintain your account session.</li>
          <li>To provide AI-generated spiritual conversations through our service.</li>
          <li>To process and track payments and subscription status.</li>
          <li>To track free credit usage and enforce subscription limits.</li>
          <li>To improve our AI models, services, and user experience.</li>
          <li>To send transactional emails (payment receipts, account notifications). We do <strong>not</strong> send marketing emails without your explicit consent.</li>
          <li>To detect and prevent fraud, abuse, or violations of our Terms.</li>
          <li>To comply with applicable laws and legal obligations.</li>
        </ul>
        <p>
          We do <strong>not</strong> sell, rent, or trade your personal information to third parties for
          their marketing purposes.
        </p>
      </Section>

      <Section id="firebase">
        <h2>Third-Party Services</h2>
        <p>
          Paramvani uses third-party services for authentication, database
          storage, and file storage. Your data is stored securely under
          industry-standard security protocols.
        </p>
        <p>
          When you sign in using a third-party provider, we receive your basic profile information.
          Their privacy practices are governed by their respective privacy policies.
        </p>
        <p>
          Our secure database stores your user profile, subscription status, credit balance, and payment
          references. This data is secured by strict security rules and accessible only to your
          authenticated account.
        </p>
      </Section>

      <Section id="payments">
        <h2>Payment Data</h2>
        <p>
          All payment processing is handled by a PCI-DSS compliant payment
          gateway. We never receive, store, or process your card details, UPI credentials, or bank
          information.
        </p>
        <p>What we store after a successful payment:</p>
        <ul>
          <li>Order ID</li>
          <li>Payment ID</li>
          <li>Subscription plan type and expiry date</li>
          <li>Payment status (pending / success / failed)</li>
        </ul>
        <p>
          The payment processor's data practices are governed by their respective Privacy Policy.
        </p>
      </Section>

      <Section id="cookies">
        <h2>Cookies &amp; Analytics</h2>
        <h3>What Cookies We Use</h3>
        <ul>
          <li>
            <strong>Authentication Cookies:</strong> Our authentication service sets a session cookie (<code>__session</code>) to
            keep you logged in. These are strictly necessary and cannot be disabled.
          </li>
          <li>
            <strong>Preference Cookies:</strong> We may store UI preferences (e.g., selected avatar) in
            localStorage.
          </li>
        </ul>
        <h3>Analytics</h3>
        <p>
          We currently do not use third-party analytics tools (e.g., Google Analytics) that track you
          across websites. We may collect basic server-side usage statistics (API call counts, error
          rates) which do not identify you personally.
        </p>
        <h3>Managing Cookies</h3>
        <p>
          You can control cookies through your browser settings. Disabling authentication cookies will
          prevent you from logging in. Clearing browser data will log you out of Paramvani.
        </p>
      </Section>

      <Section id="retention">
        <h2>Data Retention</h2>
        <p>We retain your data as follows:</p>
        <ul>
          <li><strong>Account Data:</strong> Until you delete your account.</li>
          <li><strong>Conversation Content:</strong> We do <strong>not</strong> store your conversation messages or history. All conversations are processed in-memory only and are not persisted to any database.</li>
          <li><strong>Payment Records:</strong> Retained for 7 years for tax and legal compliance, even after account deletion.</li>
          <li><strong>Audit Logs:</strong> Retained for 90 days for fraud detection and security.</li>
        </ul>
      </Section>

      <Section id="rights">
        <h2>Your Privacy Rights</h2>
        <p>
          Depending on your jurisdiction (including India under the DPDP Act 2023, and the EU under
          GDPR), you have the following rights:
        </p>
        <ul>
          <li><strong>Right to Access:</strong> Request information about the personal data we hold about you (account info, subscription status, payment references).</li>
          <li><strong>Right to Correction:</strong> Request correction of inaccurate data.</li>
          <li><strong>Right to Deletion:</strong> Delete your account and associated personal data directly via your <a href="/profile">Profile page</a>.</li>
          <li><strong>Right to Object:</strong> Object to processing of your data for specific purposes by contacting us.</li>
        </ul>
        <p>
          To exercise these rights, delete your account directly from your{" "}
          <a href="/profile">Profile page</a>, or contact us at{" "}
          <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a>.
        </p>
        <p>
          We will respond to verified requests within <strong>30 days</strong>. Some data (e.g., payment
          records) may be retained longer as required by law.
        </p>
      </Section>

      <Section id="children">
        <h2>Children's Privacy</h2>
        <p>
          Paramvani is intended for users who are <strong>18 years of age or older</strong>. We do not
          knowingly collect personal information from children under 18. If you believe a child has
          provided us with personal information, please contact us immediately at{" "}
          <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a> and we will delete the
          information promptly.
        </p>
      </Section>

      <Section id="contact">
        <h2>Contact for Privacy</h2>
        <p>
          For any privacy-related concerns, requests, or questions, please contact our Data Protection
          Officer:
        </p>
        <ul>
          <li><strong>Email:</strong> <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a></li>
          <li><strong>Grievance Officer:</strong> See our <a href="/grievance-redressal">Grievance Redressal Policy</a></li>
        </ul>
        <p>
          We reserve the right to update this Privacy Policy at any time. Material changes will be
          communicated via email or a notice on the platform. Continued use of Paramvani after changes
          constitutes acceptance of the updated policy.
        </p>
      </Section>
    </>
  );
}

function ContentHI() {
  return (
    <>
      <Section id="intro">
        <h2>परिचय</h2>
        <InfoBox>
          <strong>परमवाणी ("हम", "हमें", "हमारा")</strong> आपकी गोपनीयता की रक्षा करने के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि जब आप <strong>paramvani.vercel.app</strong> और किसी भी संबद्ध सेवाओं पर हमारे मंच का उपयोग करते हैं तो हम आपकी जानकारी कैसे एकत्र करते हैं, उपयोग करते हैं, प्रकट करते हैं और सुरक्षित करते हैं।
        </InfoBox>
        <p>परमवाणी तक पहुँचने या उसका उपयोग करने से, आप इस नीति के अनुसार जानकारी के संग्रह और उपयोग के लिए सहमत होते हैं। यदि आप सहमत नहीं हैं, तो कृपया हमारी सेवा का उपयोग न करें।</p>
        <p>यह नीति हमारी कुकी नीति और आपके डेटा गोपनीयता अधिकारों (आपके व्यक्तिगत डेटा तक पहुंचने, सही करने और हटाने के अधिकार सहित) को भी शामिल करती है।</p>
      </Section>

      <Section id="collect">
        <h2>हम जो डेटा एकत्र करते हैं</h2>
        <h3>आपके द्वारा प्रदान की जाने वाली जानकारी</h3>
        <ul>
          <li><strong>खाता जानकारी:</strong> तृतीय-पक्ष प्रमाणीकरण के माध्यम से एकत्र किया गया नाम, ईमेल पता और प्रोफ़ाइल फ़ोटो।</li>
          <li><strong>भुगतान जानकारी:</strong> भुगतान विवरण हमारे पेमेंट गेटवे द्वारा संसाधित किए जाते हैं और हमारे सर्वर पर कभी संग्रहीत नहीं होते हैं। हम केवल संदर्भ के लिए ऑर्डर ID और भुगतान ID संग्रहीत करते हैं।</li>
          <li><strong>वॉयस इनपुट:</strong> यदि आप वॉयस इनपुट का उपयोग करते हैं, तो आपके ऑडियो को तृतीय-पक्ष सेवा द्वारा ट्रांसक्राइब किया जाता है और तुरंत हटा दिया जाता है। हम आपकी वॉयस रिकॉर्डिंग या ट्रांसक्रिप्ट को <strong>संग्रहीत नहीं</strong> करते हैं।</li>
        </ul>
        <h3>स्वचालित रूप से एकत्र की गई जानकारी</h3>
        <ul>
          <li><strong>उपयोग डेटा:</strong> देखे गए पृष्ठ, उपयोग की गई सुविधाएं, बिताया गया समय और इंटरैक्शन लॉग।</li>
          <li><strong>डिवाइस डेटा:</strong> ब्राउज़र प्रकार, OS, स्क्रीन आकार और IP पता।</li>
          <li><strong>कुकीज़:</strong> प्रमाणीकरण टोकन और प्राथमिकता कुकीज़ (कुकीज़ अनुभाग देखें)।</li>
        </ul>
        <h3>तृतीय पक्षों से जानकारी</h3>
        <ul>
          <li><strong>प्रमाणीकरण प्रदाता:</strong> जब आप साइन इन करते हैं तो मूल प्रोफ़ाइल जानकारी।</li>
          <li><strong>भुगतान प्रोसेसर:</strong> हमारे सर्वर-साइड वेबहुक के माध्यम से भुगतान स्थिति सूचनाएं।</li>
        </ul>
      </Section>

      <Section id="use">
        <h2>हम डेटा का उपयोग कैसे करते हैं</h2>
        <p>हम आपके डेटा का उपयोग निम्नलिखित उद्देश्यों के लिए करते हैं:</p>
        <ul>
          <li>आपको प्रमाणित करने और आपके खाता सत्र को बनाए रखने के लिए।</li>
          <li>हमारी सेवा के माध्यम से AI-जनित आध्यात्मिक बातचीत प्रदान करने के लिए।</li>
          <li>भुगतान और सदस्यता स्थिति को संसाधित करने और ट्रैक करने के लिए।</li>
          <li>मुफ्त क्रेडिट उपयोग को ट्रैक करने और सदस्यता सीमाओं को लागू करने के लिए।</li>
          <li>हमारे AI मॉडल, सेवाओं और उपयोगकर्ता अनुभव को बेहतर बनाने के लिए।</li>
          <li>लेनदेन संबंधी ईमेल (भुगतान रसीदें, खाता सूचनाएं) भेजने के लिए। हम आपकी स्पष्ट सहमति के बिना मार्केटिंग ईमेल <strong>नहीं</strong> भेजते हैं।</li>
          <li>धोखाधड़ी, दुर्व्यवहार या हमारी शर्तों के उल्लंघन का पता लगाने और रोकने के लिए।</li>
          <li>लागू कानूनों और कानूनी दायित्वों का पालन करने के लिए।</li>
        </ul>
        <p>हम <strong>कभी भी</strong> आपकी व्यक्तिगत जानकारी को उनके विपणन उद्देश्यों के लिए तीसरे पक्ष को नहीं बेचते, किराए पर नहीं देते या व्यापार नहीं करते हैं।</p>
      </Section>

      <Section id="firebase">
        <h2>तृतीय-पक्ष सेवाएँ</h2>
        <p>परमवाणी प्रमाणीकरण, डेटाबेस स्टोरेज और फ़ाइल स्टोरेज के लिए तृतीय-पक्ष सेवाओं का उपयोग करता है। आपका डेटा उद्योग-मानक सुरक्षा प्रोटोकॉल के तहत सुरक्षित रूप से संग्रहीत किया जाता है।</p>
        <p>जब आप किसी तृतीय-पक्ष प्रदाता का उपयोग करके साइन इन करते हैं, तो हमें आपकी मूल प्रोफ़ाइल जानकारी प्राप्त होती है। उनकी गोपनीयता प्रथाएं उनकी संबंधित गोपनीयता नीतियों द्वारा नियंत्रित होती हैं।</p>
        <p>हमारा सुरक्षित डेटाबेस आपके उपयोगकर्ता प्रोफ़ाइल, सदस्यता स्थिति, क्रेडिट शेष और भुगतान संदर्भों को संग्रहीत करता है। यह डेटा सख्त सुरक्षा नियमों द्वारा सुरक्षित है और केवल आपके प्रमाणित खाते के लिए सुलभ है।</p>
      </Section>

      <Section id="payments">
        <h2>भुगतान डेटा</h2>
        <p>सभी भुगतान प्रसंस्करण को एक PCI-DSS अनुरूप भुगतान गेटवे द्वारा नियंत्रित किया जाता है। हम कभी भी आपके कार्ड विवरण, UPI क्रेडेंशियल या बैंक जानकारी प्राप्त, संग्रहीत या संसाधित नहीं करते हैं।</p>
        <p>सफल भुगतान के बाद हम क्या संग्रहीत करते हैं:</p>
        <ul>
          <li>ऑर्डर आईडी</li>
          <li>भुगतान आईडी</li>
          <li>सदस्यता योजना प्रकार और समाप्ति तिथि</li>
          <li>भुगतान स्थिति (लंबित / सफलता / विफल)</li>
        </ul>
        <p>भुगतान प्रोसेसर की डेटा प्रथाओं को उनकी संबंधित गोपनीयता नीति द्वारा नियंत्रित किया जाता है।</p>
      </Section>

      <Section id="cookies">
        <h2>कुकीज़ और एनालिटिक्स</h2>
        <h3>हम किन कुकीज़ का उपयोग करते हैं</h3>
        <ul>
          <li><strong>प्रमाणीकरण कुकीज़:</strong> हमारी प्रमाणीकरण सेवा आपको लॉग इन रखने के लिए एक सत्र कुकी (<code>__session</code>) सेट करती है। ये सख्ती से आवश्यक हैं और इन्हें अक्षम नहीं किया जा सकता है।</li>
          <li><strong>प्राथमिकता कुकीज़:</strong> हम localStorage में UI प्राथमिकताएं (उदा. चयनित अवतार) संग्रहीत कर सकते हैं।</li>
        </ul>
        <h3>एनालिटिक्स</h3>
        <p>हम वर्तमान में तृतीय-पक्ष एनालिटिक्स टूल (जैसे, Google Analytics) का उपयोग नहीं करते हैं जो आपको वेबसाइटों पर ट्रैक करते हैं। हम मूल सर्वर-साइड उपयोग आंकड़े (API कॉल गणना, त्रुटि दर) एकत्र कर सकते हैं जो आपको व्यक्तिगत रूप से नहीं पहचानते हैं।</p>
        <h3>कुकीज़ का प्रबंधन</h3>
        <p>आप अपनी ब्राउज़र सेटिंग्स के माध्यम से कुकीज़ को नियंत्रित कर सकते हैं। प्रमाणीकरण कुकीज़ को अक्षम करने से आप लॉग इन नहीं कर पाएंगे। ब्राउज़र डेटा साफ़ करने से आप परमवाणी से लॉग आउट हो जाएंगे।</p>
      </Section>

      <Section id="retention">
        <h2>डेटा प्रतिधारण (Retention)</h2>
        <p>हम आपका डेटा निम्नानुसार बनाए रखते हैं:</p>
        <ul>
          <li><strong>खाता डेटा:</strong> जब तक आप अपना खाता नहीं हटाते।</li>
          <li><strong>बातचीत की सामग्री:</strong> हम आपके वार्तालाप संदेशों या इतिहास को <strong>संग्रहीत नहीं</strong> करते हैं। सभी वार्तालापों को केवल मेमोरी में संसाधित किया जाता है और किसी भी डेटाबेस में नहीं रखा जाता है।</li>
          <li><strong>भुगतान रिकॉर्ड:</strong> कर और कानूनी अनुपालन के लिए 7 साल तक बनाए रखा गया, यहां तक कि खाता हटाने के बाद भी।</li>
          <li><strong>ऑडिट लॉग:</strong> धोखाधड़ी का पता लगाने और सुरक्षा के लिए 90 दिनों तक बनाए रखा गया।</li>
        </ul>
      </Section>

      <Section id="rights">
        <h2>आपके गोपनीयता अधिकार</h2>
        <p>आपके अधिकार क्षेत्र (DPDP अधिनियम 2023 के तहत भारत और GDPR के तहत यूरोपीय संघ सहित) के आधार पर, आपके निम्नलिखित अधिकार हैं:</p>
        <ul>
          <li><strong>पहुंच का अधिकार:</strong> आपके बारे में हमारे पास मौजूद व्यक्तिगत डेटा (खाता जानकारी, सदस्यता स्थिति, भुगतान संदर्भ) के बारे में जानकारी का अनुरोध करें।</li>
          <li><strong>सुधार का अधिकार:</strong> गलत डेटा के सुधार का अनुरोध करें।</li>
          <li><strong>हटाने का अधिकार:</strong> सीधे अपने <a href="/profile">प्रोफ़ाइल पृष्ठ</a> के माध्यम से अपना खाता और संबंधित व्यक्तिगत डेटा हटाएं।</li>
          <li><strong>आपत्ति का अधिकार:</strong> हमसे संपर्क करके विशिष्ट उद्देश्यों के लिए अपने डेटा के प्रसंस्करण पर आपत्ति जताएं।</li>
        </ul>
        <p>इन अधिकारों का प्रयोग करने के लिए, सीधे अपने <a href="/profile">प्रोफ़ाइल पृष्ठ</a> से अपना खाता हटाएं, या हमसे <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a> पर संपर्क करें।</p>
        <p>हम सत्यापित अनुरोधों का <strong>30 दिनों</strong> के भीतर जवाब देंगे। कुछ डेटा (जैसे, भुगतान रिकॉर्ड) कानून द्वारा आवश्यक होने पर लंबे समय तक बनाए रखा जा सकता है।</p>
      </Section>

      <Section id="children">
        <h2>बच्चों की गोपनीयता</h2>
        <p>परमवाणी उन उपयोगकर्ताओं के लिए है जो <strong>18 वर्ष या उससे अधिक आयु</strong> के हैं। हम जानबूझकर 18 वर्ष से कम उम्र के बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं। यदि आपको लगता है कि किसी बच्चे ने हमें व्यक्तिगत जानकारी प्रदान की है, तो कृपया हमसे तुरंत <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a> पर संपर्क करें और हम तुरंत जानकारी हटा देंगे।</p>
      </Section>

      <Section id="contact">
        <h2>गोपनीयता के लिए संपर्क</h2>
        <p>किसी भी गोपनीयता-संबंधी चिंताओं, अनुरोधों या प्रश्नों के लिए, कृपया हमारे डेटा संरक्षण अधिकारी से संपर्क करें:</p>
        <ul>
          <li><strong>ईमेल:</strong> <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a></li>
          <li><strong>शिकायत अधिकारी:</strong> हमारी <a href="/grievance-redressal">शिकायत निवारण नीति</a> देखें</li>
        </ul>
        <p>हम किसी भी समय इस गोपनीयता नीति को अपडेट करने का अधिकार सुरक्षित रखते हैं। भौतिक परिवर्तनों को ईमेल या मंच पर नोटिस के माध्यम से संप्रेषित किया जाएगा। परिवर्तनों के बाद परमवाणी का निरंतर उपयोग अद्यतन नीति की स्वीकृति माना जाता है।</p>
      </Section>
    </>
  );
}

export default function PrivacyPolicyPage() {
  const { lang } = useLang();
  return (
    <LegalLayout
      eyebrow={lang === 'hi' ? "कानूनी · गोपनीयता" : "Legal · Privacy"}
      title={lang === 'hi' ? "गोपनीयता नीति" : "Privacy Policy"}
      lastUpdated="August 24, 2025"
      toc={lang === 'hi' ? TOC_HI : TOC_EN}
      currentHref="/privacy-policy"
    >
      {lang === 'hi' ? <ContentHI /> : <ContentEN />}
    </LegalLayout>
  );
}
