import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Python Developer',
          'Software Developer',
          'Freelancer',
          'Open Source ',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  )
}

export default Type
