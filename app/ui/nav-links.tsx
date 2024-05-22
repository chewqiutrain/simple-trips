'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';


import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    { name: 'Home', href: '/'},
    {
      name: 'Butt Form',
      href: '/buttform'
    },
];

export function NavButtform() {
    return (
        <div className="bg-blue-500 place-content-center rounded-md">
            <Link href="/buttform" className="bg-blue-800 h-1/2">
                <span>To Buttform</span>
            </Link>
        </div>
    )
}


export function NavHome() {
    return (
        <div className="bg-blue-500 place-content-center rounded-md">
            <Link href="/" className="bg-blue-800 h-1/2">
                <span>To Home</span>
            </Link>
        </div>
    )
}