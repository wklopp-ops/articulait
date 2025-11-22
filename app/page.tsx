import UploadZone from '@/components/UploadZone'
import StylePacks from '@/components/StylePacks'
import ArtisteChat from '@/components/ArtisteChat'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-6 py-20">
        <UploadZone />
        <StylePacks />
        <ArtisteChat />
      </div>
    </>
  )
}
