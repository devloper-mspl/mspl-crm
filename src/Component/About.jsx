import React from 'react';
import "../index.css";
import { Helmet } from "react-helmet-async";
import Footer from './Footer';
import { Import } from 'lucide-react';

const About = () => {
  return (
    <div>
      <Helmet>
        <title> About | My React Website</title>
        <meta name="description" content="Welcome to the home page of my React app. Learn more about React, SEO, and best practices." />
      </Helmet>
      <div className="flex">
       <div className="w-full">
          <img src="/about.webp" alt="Sample" className="w-full h-auto object-contain md:object-cover" />
       </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div><img src="/about0.webp" alt="About" className="w-full h-full object-cover rounded-lg p-5"/></div>
        <div className="flex items-center">
          <p className="text-justify">Mishtel is a technology-driven company providing Communications Platform as a 
            Service (CPaaS) and Contact Centre as a Service (CCaaS) is proudly to announce that we are now 
            officially VNO Approved (Virtual Network Operator) under the guidelines of the Department of 
            Telecommunications, Government of India. solutions that allow organizations to add real-time 
            voice, messaging, and video into existing enterprise applications. We provide solutions as 
            per the client’s requirements through the mixing of our products and services. Our main services 
            include cloud telephony-based communication services like SMS, OBD, WhatsApp API, and IVR solutions. 
            For messaging services, we provide DLT Registration, Promotional SMS, Transactional SMS, OTP SMS, 
            Flash SMS, etc, and for Voice Platforms, we provide outbound Voice Call, OTP Voice Call (predicated 
            as per Project), Playback IVR, Missed Call Services, Toll-Free Services, IVR Solutions, etc. Our 
            approach revolves around delivering bespoke solutions aligned with the specific requirements of our 
            clients. And our promise for the best among best is reflected in its quality, innovative product range, 
            team, service, fulfilment, and inherent drive to do their best for their client.
          </p>
          
        </div>
      </div>
      <div>
        <h2 className='text-2xl text-center text-[#3da5f2] font-bold'>Board Of Directors</h2>
        <h4 className='text-2xl text-center text-[#000000] font-bold font-serif'>Visionary leaders driving strategic growth and organizational excellence forward.</h4>
      </div>
      <div className='grid gap-5 lg:grid-cols-3 p-10'>
        <div className='bg-[#f9f9f9] h-[300px] flex flex-col items-center rounded-lg shadow'>
         <img src="/user.webp" alt="Sample" className="w-28 h-28 object-cover rounded-full border-4 border-[#cd2c6e]" />
         <h3 className="text-lg font-bold text-gray-800">Rajeev Mishra</h3>
         <h5 className="font-bold text-[#cd2c6e]">Managing Director</h5>
         <p className="text-gray-600 text-sm mt-2 text-center">Dynamic Managing Director overseeing Sales and Operations, driving growth, optimizing processes, and ensuring seamless execution. His leadership ensures high-quality service delivery, operational excellence, sustainable growth and ensuring sustainable success and profitability.</p>
        </div>
        <div className='bg-[#f9f9f9] h-[300px] flex flex-col items-center rounded-lg shadow'>
          <img src="/user.webp" alt="Sample" className="w-28 h-28 object-cover rounded-full border-4 border-[#cd2c6e]" />
          <h3 className="text-lg font-bold text-gray-800">Shweta Mishra</h3>
           <h5 className="font-bold text-[#cd2c6e]">Managing Director</h5>
          <p className="text-gray-600 text-sm mt-2 text-center">Dynamic Managing Director overseeing Sales and Operations, driving growth, optimizing processes, and ensuring seamless execution. His leadership ensures high-quality service delivery, operational excellence, sustainable growth and ensuring sustainable success and profitability.</p>
        </div>
        <div className='bg-[#f9f9f9] h-[300px] flex flex-col items-center rounded-lg shadow'>
           <img src="/user.webp" alt="Sample" className="w-28 h-28 object-cover rounded-full border-4 border-[#cd2c6e]" />
           <h3 className="text-lg font-bold text-gray-800">Soumya Mishra</h3>
           <h5 className="font-bold text-[#cd2c6e]">Managing Director</h5>
           <p className="text-gray-600 text-sm mt-2 text-center">Dynamic Managing Director overseeing Sales and Operations, driving growth, optimizing processes, and ensuring seamless execution. His leadership ensures high-quality service delivery, operational excellence, sustainable growth and ensuring sustainable success and profitability.</p>
        </div>
      </div>


      <Footer/>
    </div>
  )
}

export default About
