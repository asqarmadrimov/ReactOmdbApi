import React from 'react'

export default function Loader() {
  return (
    <div className='text-center mx-auto'>
      <div className="spinner-grow text-primary mt-5" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
