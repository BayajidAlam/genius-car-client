import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { ImLocation2 } from 'react-icons/im';

const Details = () => {
  return (
    <div className='bg-black h-64 my-20 flex justify-evenly rounded-lg items-center'>

          <div className='flex w-76 justify-center items-center text-white'>
            <AiOutlineCalendar className='text-6xl mr-2'/>
            <div>
              <p>We are open monday-friday</p>
              <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
            </div>
          </div>
          <div className='flex w-76 justify-center items-center text-white'>
            <FiPhoneCall className='text-6xl mr-2'/>
            <div>
              <p>Have a question?</p>
              <p className='text-2xl font-bold'>+2546 251 2658</p>
            </div>
          </div>
          <div className='flex w-76 justify-center items-center text-white'>
            <ImLocation2 className='text-6xl mr-2'/>
            <div>
              <p>Need a repair? our address</p>
              <p className='text-2xl font-bold'>Liza Street, New York</p>
            </div>
          </div>
    </div>
  );
};

export default Details;