import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';

const Details = () => {
  return (
    <div className='bg-black h-64 my-20 lg:flex justify-evenly rounded-lg items-center'>

          <div className='flex lg:w-76 justify-center items-center text-white pt-6'>
            <AiOutlineCalendar className='lg:text-6xl text-5xl mr-2'/>
            <div>
              <p>We are open monday-friday</p>
              <p className='lg:text-2xl font-bold'>7:00 am - 9:00 pm</p>
            </div>
          </div>

          <div className='flex lg:w-76 justify-center items-center text-white py-4 lg:py-0'>
            <FiPhoneCall className='lg:text-6xl text-5xl mr-2'/>
            <div>
              <p>Have a question?</p>
              <p className='lg:text-2xl font-bold'>+2546 251 2658</p>
            </div>
          </div>

          <div className='flex lg:w-76 justify-center items-center text-white'>
            <ImLocation2 className='lg:text-6xl text-5xl mr-2'/>
            <div>
              <p>Need a repair? our address</p>
              <p className='lg:text-2xl font-bold'>Liza Street, New York</p>
            </div>
          </div>
    </div>
  );
};

export default Details;