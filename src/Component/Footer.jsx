import React from "react";

const Footer = () => {
    return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div>
                    <img src="/logo.webp" alt="Mishtel Logo" className="h-12 mb-4" />
                    <p className="text-sm"> Ground Floor, Plot No – 154 A, <br /> Block – A, Sector – 63, Noida, <br />
                        Uttar Pradesh – 201301 </p>
                    <p className="mt-3 text-sm">📞 +91-9066667575</p>
                    <p className="text-sm">✉️ contact@mishtel.com</p>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Mishtel Offers</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Data Center</li>
                        <li>Platforms</li>
                        <li>SMS</li>
                        <li>Voice</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Sitemap</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                        <li>Certificate</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                    <p className="text-sm">Our support Hotline <br /><span className="font-semibold">+91-9066667575</span> is available 24*7
                    </p>
                    <p className="text-sm mt-2">Monday to Saturday : 10am to 6:30pm <br />Sunday : Closed</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Our Location</h3>
                    <ul className="space-y-1 text-sm">
                        <li>Noida</li>
                        <li>Indore</li>
                        <li>Raipur</li>
                        <li>Bengaluru</li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} Mishtel Pvt. Ltd. | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
