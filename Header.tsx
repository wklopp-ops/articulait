import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <Logo />
          <span className="text-2xl font-bold tracking-tight">Articulait</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-10">
          <Link href="/pricing" className="text-sm uppercase tracking-wider">Pricing</Link>
          <Link href="/pro" className="text-sm uppercase tracking-wider">For Agents</Link>
          <Link href="/admin" className="text-sm uppercase tracking-wider">Login</Link>
        </nav>
      </div>
    </header>
  )
}
