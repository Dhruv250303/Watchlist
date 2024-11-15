import React from 'react'

function Banner() {
  return (
    <div className='h-auto md:h-[80vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(https://preview.redd.it/deadpool-and-wolverine-textless-banner-wallpaper-v0-vs0sop0uel1d1.png?width=1080&crop=smart&auto=webp&s=4a91a3c67ea7fd049df61eb525ae81a60c14aec2)`
    }}>
      <div className='text-white text-xl bg-gray-300/30 w-full text-center p-2 font-semibold'> DeadPool & Wolverine</div>
    </div>
  )
}

export default Banner
