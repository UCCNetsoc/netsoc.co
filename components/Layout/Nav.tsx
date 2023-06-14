'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useState } from 'react'
export default function Nav() {

  const navItems = [
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Events",
      path: "/events"
    },
    {
      name: "Services",
      path: "/services"
    },
  ]


  const pathname = usePathname()

  const [width, setWidth] = useState(0)
  // get current width
  useLayoutEffect(() => {
    function updateSize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => window.removeEventListener('resize', updateSize)
  }, [])

  useEffect(() => {
    console.log("Width updated to: ", width)
  }, [width])

  return (
    <nav>
      <ul className="flex space-x-5">
        {navItems.map((item, index) => (
          <li key={index}>
            <a href={item.path} className={`text-1xl ${pathname === item.path ? "a-hovered" : "a-hover"}`}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}