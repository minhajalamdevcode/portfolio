import React from 'react'
import Heading from "../Heading/Heading"
import Skills from "../Skills/Skills"
import { certificates } from "./Certificate"
function InternshipCertificate() {
  return (
    <div id="InternshipCertificate" className="my-container flex flex-col gap-8 lg:flex-row lg:justify-between pb-8 sm:pb-16">
      <Heading title="Internship Certificate" tagline="From Code to Career Path" />
      {/* <div className="flex flex-col gap-8 justify-center"> */}
        <div className="flex flex-col gap-6 w-full">
        {certificates.map((item) => (
          <div
            key={item.id}
            className="p-4 border rounded-md shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white"
          >
            <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
            <a
              href={item.file}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 text-blue-600 hover:underline font-medium"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>

    
  )
}

export default InternshipCertificate