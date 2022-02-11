import * as React from "react"
import {SocialNetwork} from "../components/ui";

const IndexPage = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-stone-800 text-white text-center">
        <h1 className="text-5xl font-bold">Jandir A. Kutabyala</h1>
        <p className="mt-6 text-base">My website is under construction. <br/>Follow me for updates!</p>
        <SocialNetwork />
    </main>
  )
}

export default IndexPage
