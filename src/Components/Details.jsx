import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'


function Details() {
  const params = useParams();
  const EventData = useLoaderData();

  const [currentDetails, setCurrentDetails] = useState([]);


  useEffect(() => {

    const actualdata = EventData.find(event => event.id == params.id);

    setCurrentDetails(actualdata);

  }, [])

  const { id, eventName, eventDetails, eventImage } = currentDetails || {};

  return (
    <>
      <div className='min-h-screen px-[5%]'>
        <div className=" py-2 w-full  space-y-5 ">
          <div className="block">
            <img
              src={eventImage}
              alt="..."
              className=" w-full h-[80vh] rounded-md bg-cover"
            />
          </div>
          <div>
            <button style={{ transition: 'background 1s' }} className='bg-black px-4 hover:bg-white hover:shadow-xl hover:text-black py-2 rounded-md text-white font-medium cursor-pointer'>Purchase</button>
          </div>

          <div className="space-y-2 pb-4 ">
            <h1 className="md:text-4xl text-3xl font-bold text-[#0B0B0B]">{eventName}</h1>
            <p className="text-[#0b0b0bb3] text-base font-normal">
              {eventDetails}
            </p>
          </div>
        </div>

      </div>
      <br />
      <br />



    </>
  )
}

export default Details