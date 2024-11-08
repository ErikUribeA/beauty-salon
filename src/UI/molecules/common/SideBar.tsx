'use client'

import React from 'react'
import Link from 'next/link'
import { Scissors, Calendar, User, ChevronRight } from 'lucide-react'
import { GrUserWorker } from "react-icons/gr";
import { RiUserReceived2Line } from "react-icons/ri";


import Image from 'next/image'
import { signOut } from 'next-auth/react';

const navItems = [
    { name: 'Services', href: '/dashboard/services', icon: Scissors },
    { name: 'Appointments', href: '/dashboard/appointment', icon: Calendar },
    { name: 'Employees', href: '/dashboard/employee', icon: GrUserWorker },
    { name: 'Client', href: '/dashboard/client', icon: User },

]

export default function Sidebar() {
    const [isNavOpen, setIsNavOpen] = React.useState(false)

    const handleLogout = () => {
        signOut() // Esto cierra la sesión
    }

    return (
        <nav
            className={`fixed lg:static inset-y-0 left-0 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'
                } lg:translate-x-0 transition duration-200 ease-in-out z-30 bg-blue-300 text-gray-800 w-64 p-4 flex flex-col`}
        >
            <div className="mb-8 ">
                <h1 className="flex flex-col items-center  text-3xl font-bold text-center">
                    Barber Shop
                    <Image src="/images/hair-salon (1).png" width={100} height={100} alt='holy cow' />

                </h1>
            </div>
            <ul className="space-y-2 flex-grow">
                {navItems.map((item) => (
                    <li key={item.name}>
                        <Link href={item.href} className="flex items-center p-2 rounded-lg hover:bg-blue-200 transition-colors">
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <button onClick={handleLogout} className='flex '>
                <RiUserReceived2Line  className='w-5 h-5 mr-3'/>
                Logout
            </button>
            <button
                className="lg:hidden fixed top-4 left-4 z-40 bg-pink-500 text-white p-2 rounded-full"
                onClick={() => setIsNavOpen(!isNavOpen)}
            >
                <ChevronRight className={`transform transition-transform ${isNavOpen ? 'rotate-180' : ''}`} />
            </button>
        </nav>
    )
}
