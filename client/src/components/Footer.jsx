import React from 'react'
import image from '../assets/mindharbor-logo-removebg-preview1.png'
import footeritems from "../constants/footeritems.json"
import socials from "../constants/sociallinks.json"

const Footer = () => {

  return (
    <footer class="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
      <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img src={image} class="mr-5 md:h-48 sm:h-9" alt="logo" />
            <h1 class='pt-2'>MindHarbor</h1>
            <p class="max-w-xs mt-4 text-sm text-gray-600">
              The one stop solution for all your mental health.
            </p>
            <div class="flex mt-8 space-x-6 text-gray-600">
              {
                socials.map(x => {
                  return (
                    <a class="hover:opacity-75" href target="_blank" rel="noreferrer">
                      <span class="sr-only"> {x.name} </span>
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d={x.d} clipRule="evenodd" />
                      </svg>
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            {
              footeritems.map((item) => {
                return (
                  <div>
                    <p class="font-medium">
                      {item.head}
                    </p>
                    <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                      {
                        item.info.map((x) => {
                          return (
                            <a class="hover:opacity-75" href="#">{x}</a>
                          )
                        })
                      }
                    </nav>
                  </div>
                )
              })
            }
          </div>
        </div>
        <p class="mt-8 text-xs text-gray-800">
          © MindHarbor
        </p>
      </div>
    </footer>
  )
}

export default Footer