# Privacy Policy — DeltaSchool

**Last updated:** July 09, 2026

This Privacy Policy explains how DeltaSchool ("the App", "we", "us") collects, uses, stores, and protects information when schools, administrators, teachers, students, and parents/guardians use the App.

DeltaSchool is a school management application used by educational institutions ("Schools") to manage admissions, attendance, fees, communication, and academic records. Each School that uses DeltaSchool is the **primary controller** of the data of its own students, parents, and staff. Kartikey Tripathi, as the developer and operator of DeltaSchool, acts as a **data processor** on behalf of each School, and additionally as a controller for account-level and technical data described below.

**Data Controller (developer/operator):** Kartikey Tripathi
**Contact:** deltacorelabs@outlook.com
**Location of processing:** India (Mumbai region infrastructure)

---

## 1. Who Uses This App

DeltaSchool has three access points:
- **Admin** — school administrative staff
- **Teachers/Faculty** — teaching and academic staff
- **Students/Parents** — used either directly by a student, or by a parent/guardian on the student's behalf, depending on the student's age and the School's own policy

Because students may be minors, we describe below exactly what data relating to minors is collected and why, and the safeguards in place.

---

## 2. Information We Collect

### 2.1 Account & Authentication Data
- Name, phone number, and/or admission number / employee code used to log in
- Encrypted password (bcrypt-hashed — never stored or visible in plain text)
- Role (admin / faculty / student / parent)
- JWT session tokens and refresh tokens (used to keep you securely logged in)

### 2.2 Student Profile Data
- Full name, gender, date of birth
- Admission number, UDISE ID, PEN (Permanent Education Number) — government-issued education identifiers used for statutory reporting
- Mother tongue, religion, caste category — **collected solely because Indian School Education Departments require these fields for UDISE+ statutory reporting and Right to Education (RTE) quota compliance.** We do not use this data for any commercial, advertising, or profiling purpose.
- Father's name, mother's name, guardian phone number, address
- Profile photograph

**On Aadhaar specifically:** DeltaSchool does not collect, store, or process Aadhaar numbers, in any form, anywhere in the App or its database — not even a partial or masked version. Where a School needs to record a student's or staff member's Aadhaar number for its own statutory purposes, that is maintained entirely in the School's own offline physical register, outside DeltaSchool. This is a deliberate design decision, not an oversight.

### 2.3 Staff Profile Data
- Full name, gender, date of birth, designation, department
- Phone number, email address, home address
- Employee code
- Profile photograph
- Salary-related documents (slips), visible only to the staff member concerned and authorized admin users

### 2.4 Payment & Financial Records
- Fee payment records: amount, payment method (UPI/cash/bank/cheque), payment status
- Payment screenshots or PDF receipts shared from UPI apps (e.g. GPay, PhonePe, Paytm) when a parent chooses to confirm a payment this way
- Salary payment records for staff (visible only to the staff member and admin)
- **We do not collect, store, or have access to card numbers, bank account numbers, UPI PINs, or any banking credentials.** All actual money transfers happen directly between the parent and the School through their own UPI/banking apps; DeltaSchool only records that a payment was made and lets the School admin verify and approve it.

### 2.5 Files & Media
Every file uploaded to DeltaSchool (photos, payment screenshots, assignment submissions, salary slips, course materials, notice attachments) is stored via Cloudinary using access-controlled, pre-signed URLs — never made public. Files are categorized, linked to the relevant record, and subject to a 30-day recycle-bin policy before permanent deletion when removed. Consistent with Section 2.2, the App does not provide any upload category for Aadhaar card scans or copies.

### 2.6 Attendance, Academic & Communication Records
- Attendance records
- Assignment submissions and grades
- Quiz/exam results and report cards
- Leave requests and complaint records
- In-app messages within school-created chat "rooms" (official/unofficial groups). **Direct student-to-student messaging is not permitted anywhere in the App.** All room-based messages are stored on our servers and are subject to admin oversight for safety purposes.
- Notices and read-receipts

### 2.7 Device & Technical Data
- Push notification token (via Firebase Cloud Messaging), used only to deliver in-app notifications relevant to your role (fees, attendance, homework, live classes, notices)
- IP address, recorded in our audit log for security and accountability purposes when administrative or financial actions are taken
- Basic device/app diagnostic information if the App encounters an error (see Section 6)

We do **not** collect location data, contacts, microphone, or camera-roll access beyond what is needed to pick or capture a single photo/document you choose to upload.

---

## 3. How We Use This Information

- To operate core school-management functions: admissions, attendance, timetables, fees, communication, and academic records
- To verify identity and enforce role-based access (a student can never access faculty or admin functions; this is enforced on our servers, not just in the app)
- To send push notifications relevant to your role
- To maintain an immutable audit trail of financial and administrative actions, for accountability and dispute resolution
- To comply with statutory Indian education-department reporting requirements (UDISE+, RTE)
- We do **not** sell personal data. We do **not** use student or staff data for advertising, and we do **not** run behavioral advertising or ad-tracking SDKs in this App.

---

## 4. Children's Data & Parental/Guardian Consent

Some Schools configure DeltaSchool so that students under 18 log in directly, either with School-issued or parent-issued credentials; other Schools restrict this so a parent/guardian always logs in on the student's behalf.

- Student accounts are created and managed by the School (via the Admin role), which obtains admission and enrollment consent from parents/guardians as part of its normal admission process.
- Where a student under 13 has been given login access by their School, that access has been provisioned and is overseen by the School and/or parent/guardian, not by the student independently choosing to sign up.
- We do not knowingly allow open self-registration by children; all accounts are created by an authorized adult (School Admin).
- Parents/guardians may request access to, correction of, or deletion of their child's data by contacting their School directly, or by writing to deltacorelabs@outlook.com — see Section 8.
- We do not serve behavioral/interest-based advertising to any user, and no analytics SDK in the App builds an advertising profile of any user, including children.

---

## 5. How We Share Information

- **With the School itself** — a School's Admin and authorized Faculty can access data of students/staff enrolled at that School only. Our multi-tenant architecture technically isolates each School's data from every other School.
- **With service providers who process data on our behalf**, strictly to operate the App:
  - **Cloudinary** — file/image storage and delivery
  - **Firebase Cloud Messaging (Google)** — push notification delivery only (no analytics)
  - **Neon (Postgres database hosting)** and **Fly.io** — application data and hosting infrastructure (Mumbai region)
  - **Google Calendar/Meet API** — only when a School schedules a live class, to generate a meeting link
- We do not share data with data brokers or advertisers.
- We may disclose information if required by Indian law, a valid legal/regulatory request, or to protect the safety of a student or staff member.

---

## 6. Error Monitoring

Our backend uses Sentry for error monitoring to help us fix bugs quickly. This captures technical error information (e.g. which API call failed, stack traces) and is not used for tracking individual user behavior. [If/when Sentry is added on the Flutter app itself, this section will be updated to describe device diagnostic data captured — currently backend-only.]

---

## 7. Data Retention & Deletion

- Financial records (`transactions`) and the audit log are retained permanently and are never edited or deleted, by design, for financial integrity and accountability.
- Attendance records are retained permanently in their original submitted form (corrections are recorded as new entries, never overwrites).
- Uploaded files that are removed by a user first enter a 30-day recycle bin, after which they are permanently deleted from our storage provider.
- Student and staff profile records are retained for as long as the School maintains an active relationship with DeltaSchool, plus any period required by Indian statutory record-keeping requirements for schools.
- You may request deletion of your personal account data at any time — see our [Account & Data Deletion page](./data-deletion.html) for how.

---

## 8. Your Rights

Under India's Digital Personal Data Protection Act (DPDP Act, 2023) and general privacy principles, you (or, for a minor, their parent/guardian) have the right to:
- Access the personal data we hold about you
- Request correction of inaccurate data
- Request erasure of your data, subject to statutory retention requirements described above
- Withdraw consent for optional data processing
- Raise a grievance regarding how your data is handled

To exercise any of these rights, contact **deltacorelabs@outlook.com**. We will respond within a reasonable time, and no later than the timeframe required under applicable Indian law.

---

## 9. Security

- Passwords are hashed with bcrypt and never stored in plain text.
- Admin financial actions require a separate 6-digit PIN (also bcrypt-hashed), with lockout after repeated failed attempts.
- All data is scoped per-School at the database level; a security bug in one School's data can never expose another School's data.
- Files are served only via pre-signed, access-controlled URLs — never publicly listed.
- All communication between the App and our servers is encrypted in transit (HTTPS/TLS).

No system is perfectly secure, and we cannot guarantee absolute security, but we follow the practices above as standard for every School on the platform.

---

## 10. Changes to This Policy

We may update this Privacy Policy from time to time. Material changes will be reflected with an updated "Last updated" date at the top of this page. Continued use of the App after changes constitutes acceptance of the updated policy.

---

## 11. Contact Us

For any privacy questions, requests, or concerns:
**Email:** deltacorelabs@outlook.com
