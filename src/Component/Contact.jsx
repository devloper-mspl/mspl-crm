import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Mishtel Services</title>
        <meta
          name="description"
          content="Connect with Mishtel Services Pvt Ltd. Find our phone, email, addresses, WhatsApp notification, and send us a message."
        />
      </Helmet>

      <div className="flex">
       <div className="w-full">
          <img src="/Connect.webp" alt="Sample" className="w-full h-auto object-contain md:object-cover" />
       </div>
      </div>

      {/* Contact Info & Form */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-xl font-semibold">
            Mishtel Services Private Limited <br />
            (Corporate Office - Noida)
          </h2>
          <p className="text-gray-600 mt-2">
            Share your requirements & challenges and you will get to know why we
            are the leading experts.
          </p>

          <ul className="mt-6 space-y-3">
            <li>📞 +91-9066667575</li>
            <li>☎️ Toll Free - 1800-123-2325</li>
            <li>📧 contact@mishtel.com</li>
            <li>
              📍 Ground Floor, Plot No – 154 A, Block – A, Sector – 63, Noida,
              Uttar Pradesh – 201301
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 text-blue-600">
            <a href="#"></a>
            <a href="#">🔗</a>
            <a href="#">📷</a>
            <a href="#">▶️</a>
          </div>

          {/* WhatsApp QR */}
          <div className="border border-red-500 p-4 mt-6 flex items-center gap-4">
            <div>
              <h3 className="font-semibold text-green-600">
                Connect with us for Whatsapp Notification
              </h3>
              <p className="text-sm text-gray-600">
                Scan the QR Code or Save{" "}
                <span className="text-red-500">+91-9066667575</span> to your
                Contacts and Say “Hi” over Whatsapp
              </p>
            </div>
            <img src="/QRScan.webp" alt="WhatsApp QR" className="w-24" />
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Have Some Questions?</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border p-2 rounded"
            />
            <input
              type="tel"
              placeholder="Phone No"
              className="w-full border p-2 rounded"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="w-full border p-2 rounded"
            ></textarea>
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> I agree to the Terms & Conditions,
              Privacy Policy
            </label>
            <button className="bg-blue-600 text-white px-6 py-2 rounded">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Branches */}
      <section className="bg-gray-100 py-10">
        <h2 className="text-center text-xl font-semibold mb-8">
          Share your requirements & challenges and you will get to know why we
          are the leading experts.
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-bold">Indore</h3>
            <p>📞 +91-9066667575</p>
            <p>📧 contact@mishtel.com</p>
            <p>
              3rd Floor, OFFICE NO-305, Satguru Parinay, PU3, Scheme No 54, AB
              Road, Indore, MP – 452010
            </p>
          </div>
          <div>
            <h3 className="font-bold">Raipur</h3>
            <p>📞 +91-9066667575</p>
            <p>📧 contact@mishtel.com</p>
            <p>
              MIG 29, Indrawati Colony, Off Canal Linking Road, Raipur,
              Chhattisgarh – 492001
            </p>
          </div>
          <div>
            <h3 className="font-bold">Bengaluru</h3>
            <p>📞 +91-9066667575</p>
            <p>📧 contact@mishtel.com</p>
            <p>
              Gopala Krishna Complex, No. 45/3 Residency Road, MG Road,
              Bengaluru – 560025
            </p>
          </div>
        </div>
      </section>

    <Footer/>
    </>
  );
};

export default Contact;
