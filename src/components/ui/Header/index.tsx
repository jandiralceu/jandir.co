import * as React from 'react'

import { SocialNetwork } from '..'

export const Header = () => {
  return (
    <header className="px-10 bg-zinc-900 w-full text-white font-ibm">
      <div className="container max-w-5xl grid grid-gap grid-cols-1 md:grid-cols-2 gap-x-20">
        <div className="justify-self-center  md:justify-self-end self-center py-16 md:py-32 text-center md:text-left">
          <h1 className="text-4xl font-normal">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi! I'm Jandir A. Kutabyala. <br />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a Front-end Engineer
          </h1>
          <SocialNetwork />
        </div>
      </div>
    </header>
  )
}
