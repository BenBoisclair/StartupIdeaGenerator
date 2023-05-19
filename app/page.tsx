'use client'

export default function Home() {
  return (
    <div className='w-screen h-screen overflow-hidden'>
      <div id="background-wrap">

        <div className="moon"></div>

        <div className="cloud_1">
          <div className="cloud"></div>
        </div>

        <div className="cloud_2">
          <div className="cloud"></div>
        </div>

        <div className="cloud_3">
          <div className="cloud"></div>
        </div>

        <div className="cloud_4">
          <div className="cloud"></div>
        </div>

        <div className="cloud_5">
          <div className="cloud"></div>
        </div>
      </div>
      <div className="main w-screen h-screen flex flex-col justify-center items-center text-white">
        Select an Industry
      </div>
    </div>
  )
}
