import React from 'react';
import ServiceCard from './ServiceCard';
import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline';

const Projects = () => {
    return (
      <div className="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-5">
        <h2 className="mb-1 text-3xl font-extrabold leading-tight text-gray-900">Services</h2>
        <p className="mb-12 text-lg text-gray-500">Here is a few of the awesome Services we provide.</p>
        <div className="w-full">
          <div className="flex flex-col w-full mb-10 sm:flex-row sm:space-x-5">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <ServiceCard 
                title="DAPP Development" 
                description="A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface."
                borderColor="border-white-300"
                icon1={<CheckIcon className="w-6 h-6 text-blue-500" />}
                icon2={<PlusIcon className="w-6 h-6 text-blue-500" />}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <ServiceCard 
                title="Web 3.0 Development" 
                description="Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web."
                borderColor="border-white-300"
                icon1={<CheckIcon className="w-6 h-6 text-blue-500" />}
                icon2={<PlusIcon className="w-6 h-6 text-blue-500" />}
              />
            </div>
          </div>
          <div className="flex flex-col w-full mb-5 sm:flex-row sm:space-x-5">
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <ServiceCard 
                title="Project Audit" 
                description="A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld."
                borderColor="border-white-300"
                icon1={<CheckIcon className="w-6 h-6 text-blue-500" />}
                icon2={<PlusIcon className="w-6 h-6 text-blue-500" />}
              />
            </div>
            <div className="w-full mb-10 sm:mb-0 sm:w-1/2">
              <ServiceCard 
                title="Hacking / RE" 
                description="A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network."
                borderColor="border-white-300"
                icon1={<CheckIcon className="w-6 h-6 text-blue-500" />}
                icon2={<PlusIcon className="w-6 h-6 text-blue-500" />}
              />
            </div>
            <div className="w-full sm:w-1/2">
              <ServiceCard 
                title="Bot/Script Development" 
                description="Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process."
                borderColor="border-white-300"
                icon1={<CheckIcon className="w-6 h-6 text-blue-500" />}
                icon2={<PlusIcon className="w-6 h-6 text-blue-500" />}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;