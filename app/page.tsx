import SimpleLogo from '@/app/ui/simple-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-black p-4 text-white lg:h-52">
        <SimpleLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 lg:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 lg:w-2/5 lg:px-20">
          <p
            className={`${lusitana.className} text-lg text-gray-800 lg:text-3xl lg:leading-normal`}
          >
            <strong>Welcome to Simple Invoice.</strong> The world's simplest way
            to invoice customers,{' '}
            <a href="/pages/aboutus" className="text-blue-500">
              from your phone or laptop. Save time, stay organized.{' '}
            </a>
            For contractors, freelancers, owner-operators, creatives, and other
            small business owners.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg border-[1px] bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white lg:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 lg:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 lg:w-3/5 lg:px-28 lg:py-12">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden lg:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block lg:hidden"
            alt="Screenshots of the dashboard project showing desktop version"
          />
        </div>
      </div>

      <footer>footer</footer>
    </main>
  );
}
