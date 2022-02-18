import * as React from 'react'

import { SocialNetwork } from '..'

export const Header = () => {
  return (
    <header className="bg-zinc-900 w-full text-white font-ibm">
      <div className="container max-w-5xl grid grid-gap grid-cols-2 gap-x-20">
        <div className="justify-self-end self-center py-32">
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
