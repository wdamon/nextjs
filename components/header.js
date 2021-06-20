import Link from 'next/link'

export default function Header() {
  return (
    <nav>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex space-x-4">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mr:px-8">
                <Link href="/">
                  <a className="hover:underline">Home</a>
                </Link>
              </h2>
              <h2 className="text-saffron text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mr:px-8">
                <Link href="/blog">
                  <a className="hover:underline">Blog</a>
                </Link>
              </h2>
        
            <h2 className="text-zen-green text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight border-top-width: 2px; ">
               <Link href="/podcast">
                <a className="hover:underline">Podcast</a>
              </Link>
            </h2>
           </div>
           <div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mr:px-8">
               <Link href="/signup">
                <a className="hover:underline">Newsletter</a>
              </Link>
            </h2>
           </div>
        </div>
      </div>
    </nav>
  )
}