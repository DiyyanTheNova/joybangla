import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 bg-bh-black">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="font-body text-sm text-bh-ivory/50 hover:text-bh-red transition-colors mb-8 inline-flex items-center gap-2">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <h1 className="font-heading text-4xl text-bh-ivory mb-8">Privacy Policy</h1>
        <div className="prose prose-invert">
          <p className="font-body text-bh-ivory/70">Last updated: {new Date().toLocaleDateString()}</p>
          <p className="font-body text-bh-ivory/70 mt-6">
            Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
          </p>
          <p className="font-body text-bh-ivory/60 mt-4 text-sm">
            # PRIVACY POLICY

**Effective Date:** October 11, 2026

**Last Updated:** October 11, 2026

**Website:** Business-Hub ([https://www.business-hub.com](https://www.google.com/search?q=https://www.business-hub.com))

**Operator:** Business-Hub Global Inc. / Business-Hub International Ltd. (collectively referred to as "Business-Hub", "we", "us", or "our")

---

### TABLE OF CONTENTS

1. [Introduction and Scope](https://www.google.com/search?q=%231-introduction-and-scope)
2. [Relationship of the Parties (Data Controller vs. Data Processor)](https://www.google.com/search?q=%232-relationship-of-the-parties)
3. [Categories of Information We Collect](https://www.google.com/search?q=%233-categories-of-information-we-collect)
4. [Methods of Data Collection](https://www.google.com/search?q=%234-methods-of-data-collection)
5. [Legal Bases for Processing (GDPR, UK GDPR, and Applicable Laws)](https://www.google.com/search?q=%235-legal-bases-for-processing)
6. [Purposes for Which We Use Your Information](https://www.google.com/search?q=%236-purposes-for-which-we-use-your-information)
7. [Payments, Escrow, Identity Verification, and Anti-Fraud](https://www.google.com/search?q=%237-payments-escrow-identity-verification-and-anti-fraud)
8. [Work Monitoring, Time Tracking, and Workspace Data](https://www.google.com/search?q=%238-work-monitoring-time-tracking-and-workspace-data)
9. [Disclosure and Sharing of Personal Information](https://www.google.com/search?q=%239-disclosure-and-sharing-of-personal-information)
10. [Cross-Border Data Transfers](https://www.google.com/search?q=%2310-cross-border-data-transfers)
11. [Data Retention and Storage Limitations](https://www.google.com/search?q=%2311-data-retention-and-storage-limitations)
12. [Your Global Privacy Rights and Choices](https://www.google.com/search?q=%2312-your-global-privacy-rights-and-choices)
13. [United States Regional Privacy Disclosures (CCPA/CPRA, VCDPA, CPA, etc.)](https://www.google.com/search?q=%2313-united-states-regional-privacy-disclosures)
14. [Automated Decision-Making and Profiling](https://www.google.com/search?q=%2314-automated-decision-making-and-profiling)
15. [Security of Your Personal Information](https://www.google.com/search?q=%2315-security-of-your-personal-information)
16. [Third-Party Integrations, APIs, and External Links](https://www.google.com/search?q=%2316-third-party-integrations-apis-and-external-links)
17. [Children's Privacy Protection](https://www.google.com/search?q=%2317-childrens-privacy-protection)
18. [Modifications and Amendments to This Policy](https://www.google.com/search?q=%2318-modifications-and-amendments-to-this-policy)
19. [Dispute Resolution, Governing Law, and Arbitration](https://www.google.com/search?q=%2319-dispute-resolution-governing-law-and-arbitration)
20. [Contact Information, Data Protection Officer, and EU/UK Representatives](https://www.google.com/search?q=%2320-contact-information)

---

## 1. INTRODUCTION AND SCOPE

Welcome to **Business-Hub**. Business-Hub is a unified freelance talent platform, online service marketplace, and enterprise workforce management solution combining project-based catalog orders, hourly contract management, talent escrow, and talent matchmaking.

This Privacy Policy ("Privacy Policy") governs the collection, storage, processing, transfer, use, and disclosure of personal data and personally identifiable information ("Personal Information") obtained through your use of the Business-Hub platform, including our websites, mobile applications, application programming interfaces (APIs), software applications, desktop time-tracking tools, client portals, and all related interactive services and communication channels (collectively, the "Platform" or "Services").

This Privacy Policy applies to all individuals who access or use our Platform, including without limitation:

* **Clients:** Individuals, sole proprietors, corporate entities, and enterprise organizations who post jobs, buy catalog services ("Gigs" or "Packages"), solicit proposals, hire talent, and manage contracts.
* **Freelancers / Service Providers / Agencies:** Independent contractors, agencies, creative professionals, technical consultants, and vendor teams who create seller profiles, submit bids/proposals, publish service offerings, track billable hours, submit deliverables, and receive platform disbursements.
* **Visitors:** Unregistered users who browse public listings, catalog pages, community boards, or help documentation.
* **Enterprise Collaborators:** Authorized team members, managers, account administrators, and payroll personnel associated with enterprise accounts.

By visiting, creating an account with, accessing, or utilizing Business-Hub, you acknowledge that you have read, understood, and agree to the data collection and handling practices described in this Privacy Policy. If you do not agree with the terms outlined herein, you must immediately terminate your use of the Platform and close your account.

---

## 2. RELATIONSHIP OF THE PARTIES

### 2.1 Business-Hub as a Data Controller

For the majority of personal data collected via the Platform—such as profile setup, identity verification, account credentials, platform transactions, platform-wide search rankings, compliance monitoring, and direct user support—Business-Hub operates as a independent Data Controller under European Union General Data Protection Regulation (Regulation (EU) 2016/679) ("GDPR"), United Kingdom GDPR ("UK GDPR"), and corresponding global data protection legislation.

### 2.2 Business-Hub as a Data Processor / Service Provider

In specific operational contexts, notably when:

* An Enterprise Client utilizes Business-Hub's proprietary Desktop Time-Tracker to capture desktop screenshots, keystroke activity levels, mouse movements, or application logs of a Freelancer during a dedicated contract;
* A Client uploads private datasets, confidential customer files, or specialized proprietary documents into an active workroom or workspace for processing by a Freelancer;
* Enterprise Vendor Management Tools (VMS) are leveraged by corporate clients to handle internal employee-to-contractor data workflows;

Business-Hub functions primarily as a **Data Processor** (or "Service Provider" as defined under the California Consumer Privacy Act, as amended by the California Privacy Rights Act ("CCPA/CPRA")). Under these circumstances, the Client acts as the Data Controller, dictating the instructions and processing parameters. Our processing of such information is subject to a Data Processing Addendum (DPA) executed between Business-Hub and the respective Client.

### 2.3 Independent Controller Status of Users

Clients and Freelancers are independent data controllers concerning the personal data of one another exchanged during the course of project fulfillment, communication, or direct invoicing. Neither party acts as a joint controller with Business-Hub. Both Clients and Freelancers are independently obligated to comply with all applicable privacy, surveillance, and labor regulations regarding any data obtained through Platform interactions.

---

## 3. CATEGORIES OF INFORMATION WE COLLECT

We gather multiple categories of Personal Information depending upon your role on the Platform, your specific account actions, and legal/regulatory mandates.

### 3.1 Information You Voluntarily Provide Directly to Us

* **Account Registration & Basic Profile Data:** Legal first and last name, preferred username, screen alias, business email address, postal address, physical location, telephone number, account password (stored via cryptographic one-way salted hashing), profile avatar/photo, timezone, language preferences, and professional title.
* **Freelancer Credentials & Professional Portfolio:** Resumes/CVs, employment history, educational credentials, certifications, self-reported skills, video introductions, portfolio samples, external project links, portfolio images, client testimonials, and hourly billable rates.
* **Client & Business Entity Data:** Legal corporate name, DBA ("doing business as"), commercial registration number, VAT/Tax identification number, company description, corporate website URL, corporate office address, billing contacts, and designated enterprise account operators.
* **Identity Verification & KYC Information (Know Your Customer):** Government-issued identity documents (passports, national identification cards, driver's licenses), facial biometric selfie recordings or live video liveness verification data (processed via secure, authorized third-party biometric processors), proof of address (utility bills, lease agreements, bank statements), and date of birth.
* **Financial, Billing, and Tax Information:**
* Payment card data (primary account number, expiration date, CVV—collected and tokenized directly via PCI-DSS Level 1 compliant payment gateways);
* Bank account information (IBAN, routing numbers, account numbers, SWIFT/BIC codes);
* Alternative payout credentials (such as PayPal, Payoneer, or local digital wallet addresses);
* Tax forms and declarations (including US IRS Forms W-9, W-8BEN, W-8BEN-E, VAT documentation, GST registrations, social security or taxpayer identification numbers).


* **Communications, Messages, and File Transfers:** The complete unencrypted content of real-time text chats, instant messages, video/audio calls conducted through the Platform, shared workspace attachments, contract terms, project proposals, revisions, and dispute resolution submissions exchanged between Clients and Freelancers.
* **User Feedback, Reviews, and Ratings:** Public reviews, star ratings, qualitative evaluations, performance metrics, and private customer feedback submitted by Clients and Freelancers following milestone deliveries or contract terminations.
* **Customer Support and Dispute Evidence:** Inquiries, communication tickets, diagnostic logs, identity confirmation submissions, and dispute evidence uploaded to our mediation and legal arbitration departments.

### 3.2 Information Collected Automatically Through Platform Utilization

* **Technical Device and Hardware Data:** Hardware model, operating system version, browser type and version, screen resolution, device configuration profiles, hardware UUIDs, MAC address, language settings, device telemetry, and installed font profiles.
* **Network and Geolocation Information:** IP address, internet service provider (ISP), mobile network operator, autonomous system number (ASN), and general geographical location (country, region, city, zip code). In specific instances where you utilize mobile applications with permission enabled, precise GPS coordinates may be gathered to detect proxy evasion or fraud.
* **Log Data and Platform Telemetry:** Access timestamps, uniform resource identifiers (URIs) accessed, referring/exit pages, clickstream data, search queries entered, session durations, scrolling activity, page loading times, and runtime error logs.
* **Desktop Time-Tracker Monitoring Metrics (Hourly Contracts):** When the Business-Hub Time-Tracking application is deliberately launched and activated by a Freelancer, we automatically record:
* Periodic desktop screenshots (taken at random intervals within 10-minute billing blocks);
* Aggregated mouse click counts and key-press volume metrics (keystroke dynamics; note: we do not record alphanumeric key-logging of text entered);
* Active application window titles and names of programs executed during the tracking interval.


* **Cookies, Local Storage, and Tracking Technologies:** Persistent and session cookies, Web Storage (HTML5), web beacons, clear GIFs, pixels, and software development kits (SDKs) to maintain session continuity, evaluate marketing campaigns, and maintain security boundaries.

### 3.3 Information Obtained From Third-Party Sources

* **Identity Verification and Fraud Detection Vendors:** Identity match scores, watchlist screenings, Politically Exposed Persons (PEP) statuses, and global sanctions list verifications from third-party risk management services.
* **External Single Sign-On (SSO) Providers:** When you register or sign in via Google, Apple, GitHub, or LinkedIn, we receive your verified email, display name, user ID, profile image, and profile token under the permissions you grant to that provider.
* **Credit Reporting and Commercial Bureaus:** Commercial credit metrics and enterprise verification records for corporate clients applying for extended payment terms, credit limits, or enterprise invoicing.
* **Public and Professional Directories:** Publicly available profiles, professional portfolios, open-source repositories, and social registries used to corroborate qualifications, prevent impersonation, and enrich user validation profiles.

---

## 4. METHODS OF DATA COLLECTION

We capture Personal Information through the following technical mechanisms:

```
+-----------------------------------------------------------------------------------+
|                            DATA COLLECTION MECHANISMS                             |
+--------------------------+----------------------------+---------------------------+
| DIRECT SUBMISSION        | AUTOMATED CAPTURE          | THIRD-PARTY INGESTION     |
+--------------------------+----------------------------+---------------------------+
| - Registration forms     | - Desktop Time Tracker     | - SSO Handshakes          |
| - KYC document uploads   | - Server access logs       | - Identity & KYC vendors  |
| - Messaging & workspaces | - Tracking pixels & cookies| - Payment processors      |
| - Proposal submissions   | - Biometric liveness API   | - Sanction & PEP databases|
+--------------------------+----------------------------+---------------------------+

```

1. **Direct Input:** You provide data directly when inputting form entries, uploading verification PDFs, creating gig bundles, and interacting in dispute workspaces.
2. **Platform Activity Event Streams:** Our front-end web systems and client-side scripts ingest telemetry data based on button clicks, proposal submissions, filter usage, and page browsing patterns.
3. **Application Background Agents:** Our desktop and mobile application clients run dedicated background event monitors that sync task logs, session health, hardware fingerprints, and tracking blocks to our core microservice architecture over TLS 1.3 encrypted pipelines.
4. **Third-Party Webhook Endpoints:** Our payment processing networks (e.g., Stripe, Adyen), payout partners, identity scanners (e.g., Jumio, Persona, Onfido), and authentication platforms send real-time asynchronous HTTP webhooks containing transaction status, verification passes/failures, and authentication confirmations.

---

## 5. LEGAL BASES FOR PROCESSING (GDPR, UK GDPR, AND APPLICABLE LAWS)

Under European Union, United Kingdom, and international data protection laws, processing must be justified by an established legal basis. We rely on the following bases:

### 5.1 Performance of a Contract (Article 6(1)(b) GDPR)

Processing is necessary to enter into or execute our Terms of Service and contractual commitments between you and Business-Hub. This includes:

* Facilitating registrations, account creation, and user authentication;
* Publishing gig catalogs, job postings, quotes, and talent bids;
* Managing contracts, processing escrow milestones, and distributing freelancer payouts;
* Providing desktop time-tracking, deliverable verification, and workspace collaboration tools.

### 5.2 Legitimate Interests (Article 6(1)(f) GDPR)

We process data where necessary for our legitimate business interests, provided such interests are not overridden by your fundamental privacy rights. These interests include:

* Safeguarding the integrity, availability, and resilience of our platform infrastructure;
* Mitigating fraud, detecting duplicate accounts, curbing off-platform payment disintermediation, and preventing money laundering;
* Generating product usage analytics to optimize platform UX, search performance, and catalog taxonomy;
* Defending against legal claims, mediating client-freelancer contract disputes, and enforcing intellectual property rights.

### 5.3 Compliance with Legal and Regulatory Obligations (Article 6(1)(c) GDPR)

We process personal data to satisfy statutory, legal, and regulatory requirements:

* Fulfilling Anti-Money Laundering (AML), Counter-Terrorist Financing (CTF), and Know Your Customer (KYC) directives;
* Complying with cross-border tax transparency regulations (e.g., US FATCA, EU DAC7 directive, cross-border VAT reporting);
* Responding to valid, legally binding subpoenas, court orders, warrants, and formal government regulatory investigations.

### 5.4 Consent (Article 6(1)(a) GDPR)

Where required by applicable law, we seek explicit, informed consent for:

* Placing non-essential analytical, targeting, and advertising cookies;
* Direct marketing communications via email or SMS where opt-in consent is legally required;
* The collection and processing of biometric information (e.g., facial geometry scans during identity verification, where mandated by specific local jurisdictions).

*You retain the right to withdraw your consent at any time without affecting the lawfulness of processing carried out prior to withdrawal.*

---

## 6. PURPOSES FOR WHICH WE USE YOUR INFORMATION

We process Personal Information for the specific, defined operational purposes detailed below:

| Purpose Category | Operational Activities | Primary Legal Basis |
| --- | --- | --- |
| **Account Creation & Maintenance** | Establishing user identity, generating profile directories, managing account credentials, assigning administrative permissions. | Performance of Contract |
| **Marketplace Matching & Search** | Indexing freelancer skills, displaying catalog gigs, ranking search queries via relevance algorithms, matching client job posts to qualified talent. | Legitimate Interests / Performance of Contract |
| **Transaction Processing & Escrow** | Invoicing clients, securing milestone escrow funds, processing platform service fees, distributing payouts to freelancers, calculating taxes. | Performance of Contract / Legal Obligation |
| **Identity Verification & Anti-Fraud** | Verifying government IDs, screening against PEP/OFAC sanction lists, validating proof of address, detecting account takeovers. | Legal Obligation / Legitimate Interests |
| **Time Tracking & Quality Verification** | Capturing desktop screenshots, logging keystroke activity metrics, logging application titles to confirm billable work on hourly contracts. | Performance of Contract / Legitimate Interests |
| **Platform Communications** | Delivering direct messages, hosting audio/video calls, routing system alerts, issuing contract notifications and delivery deadlines. | Performance of Contract |
| **Dispute Resolution & Mediation** | Evaluating chat logs, screenshots, time memos, work files, and revision histories to resolve escrow release disputes. | Performance of Contract / Legitimate Interests |
| **Platform Security & Infrastructure** | Mitigating DDoS attacks, enforcing rate-limiting, resolving software bugs, auditing server access, securing API perimeters. | Legitimate Interests |
| **Regulatory & Tax Compliance** | Generating annual tax filings (e.g., Form 1099-K, DAC7 filings), auditing financial ledgers, complying with consumer protection laws. | Legal Obligation |
| **Product Innovation & Analytics** | Evaluating user behavior funnels, testing new catalog feature sets, conducting machine-learning model validation for marketplace discovery. | Legitimate Interests / Consent |

---

## 7. PAYMENTS, ESCROW, IDENTITY VERIFICATION, AND ANTI-FRAUD

### 7.1 Payment and Escrow Architecture

Business-Hub functions as a commercial platform with integrated escrow mechanics. When a Client funds a fixed-price milestone or pays an hourly invoice:

* All financial transactions are processed by PCI-DSS Level 1 certified third-party payment gateways (e.g., Stripe, Adyen, Braintree, PayPal).
* **We do not store full unencrypted payment card primary account numbers (PAN), CVVs, or equivalent sensitive authentication data on Business-Hub production databases.** We retain only tokenized references, card brand, expiration date, and the last four digits of the payment method to facilitate repeat billing and fraud screening.
* Payout routing requires processing bank routing information, IBANs, or payout vendor identifiers. These data points are stored in isolated, access-restricted databases encrypted via AES-256 protocols.

### 7.2 Identity Verification and Biometric Processing

To satisfy global financial transparency and platform safety requirements, users engaging in contract execution or payment distributions may be required to verify their identities:

* **Documentation Review:** Scans of national identity documents are collected and transmitted via TLS 1.3 to our dedicated identity verification partners (e.g., Persona, Jumio, Veriff).
* **Biometric Liveness Verification:** Where required or voluntarily selected, verification may include automated comparison between your uploaded identity card photo and a live video selfie scan. The biometric engine analyzes facial geometry metrics to confirm physical liveness and ensure the face matches the submitted credential.
* **Biometric Data Handling:** Biometric templates and geometric metadata are processed by our specialized identity vendors. Business-Hub does not store raw biometric vectors on its primary operational web servers. Data is retained for the minimal duration necessary to achieve verification or as legally required by local law (such as Illinois BIPA, where retention schedules are limited to three years post-interaction or upon account closure).

### 7.3 Anti-Fraud, Anti-Circumvention, and Trust & Safety

To enforce Platform safety and prevent off-platform disintermediation (circumvention of escrow and service terms designed to evade consumer protections):

* Our systems run automated text parsing algorithms over messaging channels to detect attempts to solicit off-platform financial transactions, wire transfers, or direct exchanges of private contact vectors prior to contract initiation.
* Device fingerprints, canvas hashes, browser signatures, and network hop metrics are analyzed to identify suspended bad actors attempting to establish duplicate or fraudulent shell accounts.

---

## 8. WORK MONITORING, TIME TRACKING, AND WORKSPACE DATA

To protect Clients from overbilling and ensure Freelancers are accurately compensated for hourly agreements, Business-Hub provides a proprietary Desktop Time-Tracker.

```
+-----------------------------------------------------------------------------------+
|                       HOURLY CONTRACT TIME-TRACKER WORKFLOW                       |
+-----------------------------------------------------------------------------------+
| [1. Freelancer Action] - Manual Toggle: "Start Work Session"                     |
|                                     |                                             |
| [2. Telemetry Ingest]  - Captures 1 screenshot randomly per 10-minute block      |
|                           Logs keyboard activity volume (keystrokes / min)        |
|                           Logs mouse click/movement frequency                     |
|                           Logs active foreground window title (e.g., "Figma")     |
|                                     |                                             |
| [3. Freelancer Review] - Freelancer can delete any 10-minute block               |
|                           (Deleting a block permanently removes screenshot & pay) |
|                                     |                                             |
| [4. Client Review]     - Ingested into Work Diary; viewable only by Client       |
+-----------------------------------------------------------------------------------+

```

### 8.1 Data Points Recorded by the Time-Tracker

* **Desktop Screen Capture:** Random screenshots taken within each 10-minute billing interval.
* **Activity Metrics:** Volume of keyboard and mouse interactions per interval. The Tracker records *activity volume*—it does **not** deploy keylogging software to intercept or record the content of typed words, passwords, or communications.
* **Application Metadata:** Process names and active window headings (e.g., "Adobe Photoshop", "Visual Studio Code").

### 8.2 User Autonomy, Review, and Deletion

* The Time-Tracker requires **manual activation** by the Freelancer; it does not run autonomously without user initiation.
* Freelancers maintain the right to review their daily Work Diary and may elect to delete any specific 10-minute tracking block. Deleting a block permanently deletes the associated screenshot and activity logs, and simultaneously forfeits the corresponding billable compensation for that interval.

### 8.3 Privacy Precautions for Freelancers

Freelancers are advised to close all personal tabs, private email interfaces, medical records, financial dashboards, and confidential personal documents prior to starting the Time-Tracker to avoid incidental screenshot capture of private data.

---

## 9. DISCLOSURE AND SHARING OF PERSONAL INFORMATION

Business-Hub does not sell, rent, or trade your Personal Information to third parties for monetary consideration. We share Personal Information only under the defined circumstances below:

### 9.1 Between Users of the Platform (Marketplace Counterparties)

* **Public Freelancer Profiles:** Freelancer profiles, portfolio assets, customer reviews, overall earnings brackets (where opted-in or platform-standard), test scores, and general geographic location are publicly visible to registered users and visitors across the Platform.
* **Contractual Counterparties:** When a Client and Freelancer enter into a proposal, active contract, or catalog order, we share data necessary for contract execution, including legal names, company names, verified billing locations, and timezone data.
* **Workroom Collaboration:** Project documents, milestone delivery files, real-time messages, and Work Diary screenshots are shared directly between the Client and Freelancer assigned to that specific engagement.

### 9.2 Authorized Third-Party Service Providers

We engage vetted third-party vendors, corporate service agents, and cloud service providers who process data strictly under our contractual direction:

* **Cloud Infrastructure & Hosting:** Amazon Web Services (AWS), Google Cloud Platform (GCP), and Cloudflare (for edge delivery, DDoS mitigation, and database clustering).
* **Payment Gateways & Payout Systems:** Stripe, Adyen, PayPal, Payoneer, and local banking clearinghouses.
* **Identity Verification & Anti-Fraud Providers:** Persona, Jumio, Sift, and Socure.
* **Communications & Email Delivery Providers:** Twilio, SendGrid, and Zoom (for embedded video interview links).
* **Analytics & Performance Monitoring:** Datadog, Mixpanel, and Google Analytics.

All service providers are bound by written Data Processing Agreements guaranteeing confidentiality, strict purpose limitation, and technical safeguards equal to or exceeding those of Business-Hub.

### 9.3 Corporate Affiliates and Structural Transactions

We may disclose Personal Information to our parent companies, subsidiaries, and corporate affiliates for operational continuity, cross-platform customer support, and centralized infrastructure operations. In the event of an asset acquisition, corporate merger, balance sheet reorganization, bankruptcy liquidation, or sale of substantial business divisions, user data will transfer as a business asset to the surviving entity, subject to this Privacy Policy.

### 9.4 Legal, Regulatory, and Public Protection Disclosures

We may disclose your Personal Information to law enforcement agencies, tax authorities, data protection commissioners, judicial bodies, or private litigants when we determine that disclosure is:

* Required under a binding subpoena, court order, or warrant issued by a court of competent jurisdiction;
* Essential to satisfy anti-money laundering, counter-terrorist financing, tax transparency (DAC7, FATCA), or statutory financial auditing laws;
* Warranted to investigate, expose, or prevent suspected fraud, cyberattacks, terrorism, physical violence, human trafficking, or severe platform policy violations;
* Necessary to defend the legal property, trademark rights, employees, or users of Business-Hub in active civil or criminal litigation.

---

## 10. CROSS-BORDER DATA TRANSFERS

Business-Hub operates globally. The personal information we collect is routed to, processed in, and stored on servers located primarily in the **United States, Ireland, Germany, and other global regions** where Business-Hub or our cloud infrastructure partners maintain facilities.

Data protection regimes in these host countries may offer different standards of legal protection than those in your home jurisdiction. To ensure your Personal Information remains protected upon transfer, we implement standardized legal safeguards:

### 10.1 Standard Contractual Clauses (SCCs)

For transfers of personal data out of the European Economic Area (EEA), Switzerland, and the United Kingdom to countries that have not received an adequacy decision from the European Commission, Business-Hub utilizes the **European Commission’s Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914)**, including Module 1 (Controller-to-Controller) and Module 2 (Controller-to-Processor), and the **UK International Data Transfer Addendum (IDTA)**.

### 10.2 Supplemental Technical Measures

In accordance with post-*Schrems II* transfer impact assessments, we apply supplementary security controls:

* Cryptographic protection for data in transit using TLS 1.3 encryption;
* Encryption of data at rest across all databases, backups, and file storage volumes using AES-256;
* Pseudonymization, hashing, and tokenization of high-risk fields prior to cross-border transfer;
* Strict protocols governing internal responses to foreign government data demands, requiring formal legal challenge of overbroad or warrantless requests.

---

## 11. DATA RETENTION AND STORAGE LIMITATIONS

We retain your Personal Information only for as long as is strictly necessary to fulfill the operational purposes for which it was collected, satisfy our contractual obligations, defend against legal disputes, and comply with mandatory statutory retention periods.

```
+-----------------------------------------------------------------------------------+
|                         DATA RETENTION SCHEDULE MATRIX                            |
+--------------------------------------+--------------------------------------------+
| DATA RECORD TYPE                     | RETENTION PERIOD                           |
+--------------------------------------+--------------------------------------------+
| Active Account Profiles              | Duration of active account lifecycle       |
| Inactive / Closed Account Profiles   | 30 days grace, then anonymized/erased      |
| Financial, Escrow & Invoicing Records| 7 to 10 years (per statutory tax mandates) |
| Work Diary Hourly Screenshots        | 6 months from milestone confirmation       |
| Dispute & Arbitration Files          | 6 years (statute of limitations)           |
| KYC Identity Verification Documents  | 5 years post-account closure (AML laws)    |
| Biometric Extraction Vectors         | Deleted immediately post-verification or   |
|                                      | max 3 years (jurisdiction dependent)       |
| Server Access & Network Logs         | 90 days to 1 year                          |
+--------------------------------------+--------------------------------------------+

```

Upon the expiration of the relevant retention period, data is either permanently deleted from production and cold backup arrays or irreversibly pseudonymized/anonymized such that it no longer constitutes Personal Information under applicable law.

---

## 12. YOUR GLOBAL PRIVACY RIGHTS AND CHOICES

Depending on your geographical location and the applicable jurisdiction (e.g., GDPR, UK GDPR, Swiss FADP, LGPD, PIPEDA), you hold specific statutory rights concerning your Personal Information:

### 12.1 The Right to Access (Subject Access Request - DSAR)

You have the right to request confirmation as to whether we process your personal data and to obtain a copy of that personal data, alongside information regarding processing purposes, categories of recipients, and retention schedules.

### 12.2 The Right to Rectification

You have the right to correct inaccurate, outdated, or incomplete personal data. You can directly edit many profile details via your account settings dashboard or by contacting user support.

### 12.3 The Right to Erasure ("Right to Be Forgotten")

You may request the deletion of your Personal Information where:

* The data is no longer necessary for the purposes for which it was collected;
* You withdraw your consent, and no other legal basis justifies processing;
* You object to processing based on legitimate interests, and no overriding legitimate grounds exist;
* The data was processed unlawfully.

*Note: The right to erasure is not absolute. We may retain certain personal data where required to satisfy tax requirements (e.g., retaining transaction receipts for 7 years), fulfill anti-money laundering (AML) compliance rules, address active contract disputes, or defend against active legal claims.*

### 12.4 The Right to Restriction of Processing

You have the right to restrict our processing of your personal data where you challenge the accuracy of the data, where the processing is unlawful, or while an objection to processing is under evaluation.

### 12.5 The Right to Data Portability

You are entitled to receive your Personal Information provided to us in a structured, commonly used, and machine-readable format (such as JSON or CSV), and have the right to transmit that data to another controller where processing is based on consent or contract.

### 12.6 The Right to Object

You have the right to object at any time to the processing of your personal data based on legitimate interests, including profiling. We will cease processing unless we demonstrate compelling legitimate grounds that override your interests, or the processing is required for the defense of legal claims. You have an absolute right to object to processing for direct marketing purposes at any time.

### 12.7 Exercising Your Rights

To exercise any of these privacy rights, navigate to your **Account Settings Privacy & Data Controls** or submit a formal Data Subject Request to `privacy@business-hub.com`. We will verify your identity before processing any request. We respond to all verified requests within thirty (30) days (or within forty-five (45) days where permitted by US state legislation), unless an extension is legally warranted due to request complexity.

---

## 13. UNITED STATES REGIONAL PRIVACY DISCLOSURES

This section applies to residents of California, Virginia, Colorado, Connecticut, Utah, and other US states with comprehensive consumer privacy statutes.

### 13.1 California Consumer Privacy Act / California Privacy Rights Act (CCPA/CPRA)

#### A. Notice of Collection and Categories of Personal Information Collected

In the preceding 12 months, Business-Hub has collected the following categories of Personal Information as classified by the CCPA:

* **Identifiers:** Real name, alias, postal address, unique personal identifier, IP address, email address, account name, Social Security number, driver’s license number, passport number.
* **Personal Records (Cal. Civ. Code § 1798.80(e)):** Name, physical characteristics, telephone number, financial account numbers, credit/debit card numbers.
* **Protected Classification Characteristics:** Age, citizenship, national origin.
* **Commercial Information:** Records of services purchased, obtained, or considered; escrow transactions, milestone payments, bid histories.
* **Biometric Information:** Facial geometry characteristics for identity validation (processed via third-party vendors).
* **Internet or Other Electronic Network Activity:** Browsing history, search queries, interaction with Platform interfaces, desktop tracking telemetry.
* **Geolocation Data:** Physical location derived from IP address or GPS coordinates.
* **Sensory Data:** Audio recordings from customer support calls, profile intro videos, workroom media files.
* **Professional or Employment-Related Information:** Job history, portfolio credentials, technical skill sets, client reviews.
* **Inferences Drawn from Personal Information:** Matching scores, search rankings, risk scores, preference profiles.

#### B. Selling and Sharing of Personal Information

Business-Hub **does not sell** your personal information for monetary compensation. Furthermore, we do not "share" your personal information for cross-context behavioral advertising without giving you an explicit right to opt-out. We do not sell or share the personal information of consumers known to be under 16 years of age.

#### C. Use of Sensitive Personal Information

We use and disclose Sensitive Personal Information (e.g., government identifiers, financial details, biometric data) solely for operational purposes authorized under the CPRA, including: performing services requested by you, verifying your identity, safeguarding platform integrity, and processing financial disbursements.

#### D. California Privacy Rights

* **Right to Know:** The right to request the specific pieces and categories of personal information collected about you over the preceding 12 months.
* **Right to Delete:** The right to request deletion of personal information collected from you, subject to statutory exceptions.
* **Right to Correct:** The right to demand correction of inaccurate personal information.
* **Right to Opt-Out of Sale/Sharing:** The right to opt out of the sale or sharing of personal information for cross-context behavioral advertising.
* **Right to Non-Discrimination:** We will not discriminate against you (via price changes, degradation of service, or account termination) for exercising any CCPA/CPRA rights.

#### E. California "Shine the Light" Law

California Civil Code Section 1798.83 permits California residents to request details regarding our disclosure of personal information to third parties for direct marketing purposes. Business-Hub does not share personal data with unaffiliated third parties for their own direct marketing purposes without your prior affirmative consent.

---

## 14. AUTOMATED DECISION-MAKING AND PROFILING

To operate a marketplace serving millions of global users, Business-Hub utilizes automated processing algorithms and machine-learning models:

### 14.1 Search Rankings and Talent Matching

Our search engines and algorithmic recommendation tools review:

* Freelancer profile completion percentages, verified skill credentials, historical client reviews, dispute track records, response rates, and pricing tiers;
* Client job descriptions, requirements, budget profiles, and hiring history.

*Impact:* These algorithms optimize search visibility and provide recommendation matches. They do not produce legal or similarly significant effects under Article 22 of the GDPR; clients remain entirely free to review, browse, interview, and contract with any Freelancer regardless of algorithmic ranking.

### 14.2 Automated Fraud Prevention and Risk Scoring

Our security models assess incoming account sign-ups, payment authorizations, and device fingerprints to assign real-time fraud probability scores.

* *High-Risk Flags:* If a payment method shows high fraud indicators or an account matches a known compromised node, transactions may be paused automatically.
* *Human Intervention:* Where an automated risk decision prevents you from transacting or results in automated account suspension, you have the right to request a **manual human review** of the decision by contacting our Trust & Safety Department at `safety@business-hub.com`.

---

## 15. SECURITY OF YOUR PERSONAL INFORMATION

Business-Hub maintains comprehensive technical, physical, and administrative safeguards designed to protect personal data from accidental loss, unauthorized access, destruction, alteration, and unauthorized disclosure.

```
+-----------------------------------------------------------------------------------+
|                        SECURITY DEFENSE ARCHITECTURE                              |
+--------------------------+----------------------------+---------------------------+
| TRANSPORT LAYER          | DATA AT REST               | IDENTITY & PERIMETER      |
+--------------------------+----------------------------+---------------------------+
| - Mandatory TLS 1.3      | - AES-256 database arrays  | - Zero-Trust Architecture |
| - HSTS enforced          | - Salted bcrypt passwords  | - Mandatory 2FA options   |
| - WAF rate-limiting      | - Tokenized card vaults    | - Granular RBAC controls  |
+--------------------------+----------------------------+---------------------------+

```

* **Data Encryption Protocols:** All web traffic is routed via Transport Layer Security (TLS 1.3). Static databases, storage buckets, and server backups are encrypted using Advanced Encryption Standard (AES-256).
* **Access Control:** Internal employee access to production databases is governed by Zero-Trust network architecture, strict Role-Based Access Controls (RBAC), multi-factor authentication (MFA), and detailed audit logging.
* **Payment Security:** We maintain strict compliance with Payment Card Industry Data Security Standards (PCI-DSS). All payment interfaces are segregated using secure iframes or API tokens provided by Tier-1 payment processors.
* **Vulnerability Audits:** We perform scheduled third-party penetration tests, participate in active vulnerability disclosure (bug bounty) programs, and deploy continuous automated continuous-integration static code security analysis.

*Security Advisory:* While we maintain rigorous data protections, no internet-based transmission or digital storage architecture is completely immune to compromise. You are responsible for safeguarding your login credentials, utilizing a strong, unique password, and enabling two-factor authentication (2FA).

---

## 16. THIRD-PARTY INTEGRATIONS, APIS, AND EXTERNAL LINKS

### 16.1 Platform Integrations

The Platform allows you to link external tools, cloud drives, and collaborative suites (e.g., GitHub, Google Drive, Dropbox, Slack, Zoom, Figma) to share work files, sync calendar deadlines, or initiate video calls:

* When you link a third-party application, you authorize Business-Hub to access specific profile fields and data as defined within that tool’s OAuth permissions framework.
* We advise you to review the independent privacy policies of any third-party software you connect to your Business-Hub workspace.

### 16.2 External Hyperlinks

Our web pages, blog posts, community forums, and portfolio directories may contain links to external websites that are not operated by Business-Hub. We have no control over and assume no liability for the content, privacy policies, or data handling practices of third-party websites or services.

---

## 17. CHILDREN'S PRIVACY PROTECTION

Business-Hub is strictly intended for individuals who are at least **eighteen (18) years of age**, or the legal age of majority in their jurisdiction capable of entering into legally binding commercial contracts.

We do not knowingly solicit, collect, or process Personal Information from children under the age of 16. If we become aware that an individual under the age of 16 has created an account or submitted personal data to our Platform, we will immediately freeze the account, delete the associated personal data from our operational databases, and cancel any pending transactions, unless retention is legally required. If you believe that a minor has provided us with personal data, contact us immediately at `privacy@business-hub.com`.

---

## 18. MODIFICATIONS AND AMENDMENTS TO THIS POLICY

We reserve the right to revise, update, or modify this Privacy Policy at our discretion to reflect evolving platform operations, new feature rollouts, technological advances, or shifting regulatory mandates.

* **Material Modifications:** If we introduce material changes to our data handling practices, we will notify you at least **thirty (30) days prior** to the effective date of the change via:
* A prominent alert banner on the Platform dashboard;
* An email notification delivered to your registered account email address.


* **Routine Updates:** Minor corrections, clarifications, and typographical updates take effect immediately upon the posting of the updated policy, as indicated by the "Last Updated" date at the top of this document.

Your continued use of the Platform after the effective date of an amended Privacy Policy constitutes your acceptance of the updated terms.

---

## 19. DISPUTE RESOLUTION, GOVERNING LAW, AND ARBITRATION

Any disputes, controversies, or claims arising out of or relating to our privacy practices or this Privacy Policy shall be resolved in accordance with the dispute resolution, governing law, and binding arbitration provisions set forth in the **Business-Hub Terms of Service**.

* **For US Residents:** Except where prohibited by law, privacy disputes shall be resolved through individual, binding arbitration administered by the American Arbitration Association (AAA) under its Consumer Arbitration Rules, and you waive any right to participate in class actions or representative proceedings against Business-Hub.
* **For EEA, UK, and Swiss Residents:** You maintain the statutory right to lodge a formal complaint with your local Data Protection Supervisory Authority (such as the Irish Data Protection Commission or the UK Information Commissioner’s Office - ICO) if you believe our data processing activities infringe upon applicable data privacy laws.

---

## 20. CONTACT INFORMATION, DATA PROTECTION OFFICER, AND REPRESENTATIVES

If you have questions, feedback, or concerns regarding this Privacy Policy, wish to exercise your data subject rights, or require assistance from our security and privacy teams, contact us using the information below:

### Business-Hub Global Privacy Office

* **Entity:** Business-Hub Global Inc.
* **Attn:** Data Protection Officer (DPO)
* **Email:** `privacy@business-hub.com`
* **Alternate Inquiries:** `dpo@business-hub.com`
* **Mailing Address:**
Business-Hub Global Inc.
Attn: Legal & Privacy Department
100 Talent Market Boulevard, Suite 500
San Francisco, CA 94105, United States

### European Union (EU) Designated Representative

* **Entity:** Business-Hub Europe Privacy Services Ltd.
* **Attn:** EU Data Representative
* **Address:** 45 Grand Canal Quay, Grand Canal Dock, Dublin 2, D02 H2H4, Ireland
* **Email:** `eu-representative@business-hub.com`

### United Kingdom (UK) Designated Representative

* **Entity:** Business-Hub UK Operations Ltd.
* **Attn:** UK Privacy Lead
* **Address:** 10 Finsbury Square, London, EC2A 1AF, United Kingdom
* **Email:** `uk-representative@business-hub.com`

---

*By accessing or using the Business-Hub platform, you acknowledge that you have reviewed, understood, and agreed to this comprehensive Privacy Policy.*
          </p>
        </div>
      </div>
    </main>
  );
}