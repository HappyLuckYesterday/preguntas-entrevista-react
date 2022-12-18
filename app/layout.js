import './globals.css'
import { Space_Grotesk as SpaceGrotesk } from '@next/font/google'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

const spaceGrotesk = SpaceGrotesk({ weight: ['400', '700'], subsets: ['latin'] })

const fetchGitHubStars = () => {
  return fetch('https://api.github.com/repos/midudev/preguntas-entrevista-react')
    .then(res => res.json())
    .then(response => response.stargazers_count)
}

export default async function RootLayout ({ children }) {
  const stars = await fetchGitHubStars()

  return (
    <html>
      <head />
      <body className={`${spaceGrotesk.className} overscroll-none`}>
        <div aria-hidden='true' className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
          <div className='absolute top-0 scale-150 rounded-full bg-blue-gradient-radial w-96 h-96 left-14 opacity-20' />
        </div>
        <main className='block w-full max-w-6xl p-4 pb-32 m-auto'>
          <Header stars={stars} />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
