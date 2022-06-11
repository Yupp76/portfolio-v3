import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'
import { menuItems } from '../constants'

const Navbar = () => {
  return (
    <nav className="flex flex-col">
      <div className="container mx-auto py-3 text-gray-900">
        <div className="w-full flex align-center justify-between">
          <div>
            <img src="/images/Jim-Ree-logo.svg" alt="Jim Ree Logo" />
          </div>
          <ul className="flex align-center">
            {menuItems.map((item) => {
              return (
                <li
                  key={uuidv4()}
                  className="text-base hover:text-gray-500 mr-1-75 last:mr-0 font-semibold cursor-pointer"
                >
                  <Link href={item.href}>
                    <a>{item.text}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
