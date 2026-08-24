"use client";
import type { Metadata } from "next";
import LegalLayout, { Section, InfoBox } from "@/components/legal/LegalLayout";
import { useLang } from "@/context/LanguageContext";

const TOC_EN = [
  { id: "officer",    label: "Grievance Officer" },
  { id: "how",        label: "How to File a Complaint" },
  { id: "timeline",   label: "Response Timeline" },
  { id: "escalation", label: "Escalation" },
  { id: "contact",    label: "General Contact" },
  { id: "address",    label: "Registered Address" },
];

const TOC_HI = [
  { id: "officer",    label: "शिकायत अधिकारी" },
  { id: "how",        label: "शिकायत कैसे दर्ज करें" },
  { id: "timeline",   label: "प्रतिक्रिया समय सीमा" },
  { id: "escalation", label: "शिकायत बढ़ाना" },
  { id: "contact",    label: "सामान्य संपर्क" },
  { id: "address",    label: "पंजीकृत पता" },
];

function ContentEN() {
  return (
    <>


      <Section id="officer">
        <h2>Grievance Officer</h2>
        <InfoBox>
          In accordance with the <strong>Information Technology Act, 2000</strong> and the <strong>Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021</strong>, Paramvani has designated a Grievance Officer.
        </InfoBox>
        <p><strong>Name:</strong> Paramvani Support Team</p>
        <p><strong>Email:</strong> <a href="mailto:grievance@paramvani.com">grievance@paramvani.com</a></p>
        <p><strong>Response time:</strong> Within 48 hours of receipt of complaint; resolution within 30 days.</p>
      </Section>

      <Section id="how">
        <h2>How to File a Complaint</h2>
        <p>If you have a complaint about our service, content, privacy practices, or any other matter, please follow these steps:</p>
        <ol>
          <li>Email <a href="mailto:grievance@paramvani.com">grievance@paramvani.com</a> with the subject: <strong>&quot;Grievance — [Brief Description]&quot;</strong></li>
          <li>Include the following:
            <ul>
              <li>Your registered email address</li>
              <li>A clear description of the grievance</li>
              <li>Date(s) of the incident(s)</li>
              <li>Any relevant evidence (screenshots, order IDs, etc.)</li>
            </ul>
          </li>
          <li>We will send an acknowledgement email within <strong>48 hours</strong>.</li>
          <li>We will provide a substantive response within <strong>30 days</strong>.</li>
        </ol>
      </Section>

      <Section id="timeline">
        <h2>Response Timeline</h2>
        <ul>
          <li><strong>Acknowledgement:</strong> Within 48 hours of receiving the complaint.</li>
          <li><strong>Investigation:</strong> 5–15 business days depending on complexity.</li>
          <li><strong>Resolution:</strong> Within 30 days from the date of receipt.</li>
          <li><strong>Payment disputes:</strong> Resolved within 7 business days (see <a href="/refund-policy">Refund Policy</a>).</li>
          <li><strong>Content/abuse reports:</strong> Acknowledged within 24 hours, reviewed within 48–72 hours.</li>
        </ul>
      </Section>

      <Section id="escalation">
        <h2>Escalation</h2>
        <p>If you are not satisfied with our response, you may escalate through the following channels:</p>
        <ul>
          <li><strong>Payment Processors:</strong> For payment-related disputes unresolved by us, contact your payment gateway's support or your bank&apos;s dispute resolution team.</li>
          <li><strong>National Consumer Helpline:</strong> 1800-11-4000 (India)</li>
          <li><strong>Cyber Crime:</strong> <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a> for IT Act violations.</li>
          <li><strong>DPDP Act complaints</strong> (once the Data Protection Board is constituted): Via the official government portal.</li>
        </ul>
      </Section>

      <Section id="contact">
        <h2>General Contact</h2>
        <p>For general enquiries, support, and feedback:</p>
        <ul>
          <li><strong>General:</strong> <a href="mailto:hello@paramvani.com">hello@paramvani.com</a></li>
          <li><strong>Privacy:</strong> <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a></li>
          <li><strong>Billing:</strong> <a href="mailto:billing@paramvani.com">billing@paramvani.com</a></li>
          <li><strong>Abuse/Content:</strong> <a href="mailto:abuse@paramvani.com">abuse@paramvani.com</a></li>
          <li><strong>Grievances:</strong> <a href="mailto:grievance@paramvani.com">grievance@paramvani.com</a></li>
        </ul>
        <p>We aim to respond to all general enquiries within <strong>2 business days</strong>.</p>
      </Section>

      <Section id="address">
        <h2>Registered Address</h2>
        <p>Paramvani is operated by an independent developer. For official correspondence:</p>
        <p>
          <strong>Paramvani</strong><br />
          Email: <a href="mailto:hello@paramvani.com">hello@paramvani.com</a><br />
          India
        </p>
        <p>
          Please note that we are a digital-first platform. Physical correspondence will be responded to
          via email. For legal notices, please email <a href="mailto:legal@paramvani.com">legal@paramvani.com</a>.
        </p>
      </Section>
    </>
  );
}

function ContentHI() {
  return (
    <>
      <Section id="officer">
        <h2>शिकायत अधिकारी</h2>
        <InfoBox>
          <strong>सूचना प्रौद्योगिकी अधिनियम, 2000</strong> और <strong>सूचना प्रौद्योगिकी (मध्यवर्ती दिशानिर्देश और डिजिटल मीडिया आचार संहिता) नियम, 2021</strong> के अनुसार, परमवाणी ने एक शिकायत अधिकारी नियुक्त किया है।
        </InfoBox>
        <p><strong>नाम:</strong> परमवाणी सपोर्ट टीम</p>
        <p><strong>ईमेल:</strong> <a href="mailto:grievance@paramvani.com">grievance@paramvani.com</a></p>
        <p><strong>प्रतिक्रिया समय:</strong> शिकायत प्राप्त होने के 48 घंटों के भीतर; 30 दिनों के भीतर समाधान।</p>
      </Section>

      <Section id="how">
        <h2>शिकायत कैसे दर्ज करें</h2>
        <p>यदि आपको हमारी सेवा, सामग्री, गोपनीयता प्रथाओं या किसी अन्य मामले के बारे में कोई शिकायत है, तो कृपया इन चरणों का पालन करें:</p>
        <ol>
          <li>ईमेल करें <a href="mailto:grievance@paramvani.com">grievance@paramvani.com</a> इस विषय के साथ: <strong>&quot;Grievance — [संक्षिप्त विवरण]&quot;</strong></li>
          <li>निम्नलिखित शामिल करें:
            <ul>
              <li>आपका पंजीकृत ईमेल पता</li>
              <li>शिकायत का स्पष्ट विवरण</li>
              <li>घटना(ओं) की तिथि</li>
              <li>कोई प्रासंगिक साक्ष्य (स्क्रीनशॉट, ऑर्डर आईडी, आदि)</li>
            </ul>
          </li>
          <li>हम <strong>48 घंटों</strong> के भीतर एक पावती ईमेल भेजेंगे।</li>
          <li>हम <strong>30 दिनों</strong> के भीतर एक ठोस प्रतिक्रिया प्रदान करेंगे।</li>
        </ol>
      </Section>

      <Section id="timeline">
        <h2>प्रतिक्रिया समय सीमा</h2>
        <ul>
          <li><strong>पावती (Acknowledgement):</strong> शिकायत प्राप्त होने के 48 घंटों के भीतर।</li>
          <li><strong>जांच:</strong> जटिलता के आधार पर 5–15 कार्यदिवस।</li>
          <li><strong>समाधान:</strong> प्राप्ति की तिथि से 30 दिनों के भीतर।</li>
          <li><strong>भुगतान विवाद:</strong> 7 व्यावसायिक दिनों के भीतर हल किया गया (हमारी <a href="/refund-policy">धनवापसी नीति</a> देखें)।</li>
          <li><strong>सामग्री/दुर्व्यवहार रिपोर्ट:</strong> 24 घंटों के भीतर पावती, 48-72 घंटों के भीतर समीक्षा।</li>
        </ul>
      </Section>

      <Section id="escalation">
        <h2>शिकायत बढ़ाना (Escalation)</h2>
        <p>यदि आप हमारी प्रतिक्रिया से संतुष्ट नहीं हैं, तो आप निम्नलिखित चैनलों के माध्यम से अपनी शिकायत बढ़ा सकते हैं:</p>
        <ul>
          <li><strong>भुगतान प्रोसेसर:</strong> हमारे द्वारा अनसुलझे भुगतान-संबंधित विवादों के लिए, अपने पेमेंट गेटवे की सहायता या अपने बैंक की विवाद समाधान टीम से संपर्क करें।</li>
          <li><strong>राष्ट्रीय उपभोक्ता हेल्पलाइन:</strong> 1800-11-4000 (भारत)</li>
          <li><strong>साइबर क्राइम:</strong> IT अधिनियम के उल्लंघन के लिए <a href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer">cybercrime.gov.in</a></li>
          <li><strong>DPDP अधिनियम की शिकायतें</strong> (डेटा संरक्षण बोर्ड के गठन के बाद): आधिकारिक सरकारी पोर्टल के माध्यम से।</li>
        </ul>
      </Section>

      <Section id="contact">
        <h2>सामान्य संपर्क</h2>
        <p>सामान्य पूछताछ, समर्थन और प्रतिक्रिया के लिए:</p>
        <ul>
          <li><strong>सामान्य:</strong> <a href="mailto:hello@paramvani.com">hello@paramvani.com</a></li>
          <li><strong>गोपनीयता:</strong> <a href="mailto:privacy@paramvani.com">privacy@paramvani.com</a></li>
          <li><strong>बिलिंग:</strong> <a href="mailto:billing@paramvani.com">billing@paramvani.com</a></li>
          <li><strong>दुर्व्यवहार/सामग्री:</strong> <a href="mailto:abuse@paramvani.com">abuse@paramvani.com</a></li>
          <li><strong>शिकायतें:</strong> <a href="mailto:grievance@paramvani.com">grievance@paramvani.com</a></li>
        </ul>
        <p>हम <strong>2 व्यावसायिक दिनों</strong> के भीतर सभी सामान्य पूछताछ का जवाब देने का लक्ष्य रखते हैं।</p>
      </Section>

      <Section id="address">
        <h2>पंजीकृत पता</h2>
        <p>परमवाणी एक स्वतंत्र डेवलपर द्वारा संचालित है। आधिकारिक पत्राचार के लिए:</p>
        <p>
          <strong>Paramvani</strong><br />
          Email: <a href="mailto:hello@paramvani.com">hello@paramvani.com</a><br />
          India
        </p>
        <p>
          कृपया ध्यान दें कि हम एक डिजिटल-प्रथम मंच हैं। भौतिक पत्राचार का उत्तर ईमेल के माध्यम से दिया जाएगा। कानूनी नोटिस के लिए, कृपया <a href="mailto:legal@paramvani.com">legal@paramvani.com</a> पर ईमेल करें।
        </p>
      </Section>
    </>
  );
}

export default function GrievancePage() {
  const { lang } = useLang();
  return (
    <LegalLayout
      eyebrow={lang === 'hi' ? "कानूनी · शिकायतें" : "Legal · Grievances"}
      title={lang === 'hi' ? "शिकायत निवारण और संपर्क" : "Grievance Redressal & Contact"}
      lastUpdated="August 24, 2025"
      toc={lang === 'hi' ? TOC_HI : TOC_EN}
      currentHref="/grievance-redressal"
    >
      {lang === 'hi' ? <ContentHI /> : <ContentEN />}
    </LegalLayout>
  );
}
