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
      <head>
        <title>React.js Wiki - Preguntas típicas con respuesta y solución</title>
        <meta name='description' content='Preguntas típicas sobre React.js con respuesta y solución' />
        <meta name='viewport' content='width=device-width,minimum-scale=1,initial-scale=1' />
        <meta property='og:title' content='React.js Wiki - Preguntas típicas con respuesta y solución' />
        <meta property='og:description' content='Preguntas típicas sobre React.js con respuesta y solución' />
        <meta property='og:image' content='https://reactjs.wiki/og.png' />
        <meta property='og:url' content='https://reactjs.wiki' />
        <meta property='og:site_name' content='React.js Wiki' />
        <meta property='og:type' content='website' />
        <meta property='og:locale' content='es_ES' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:creator' content='@midudev' />
        <meta name='twitter:title' content='React.js Wiki - Preguntas típicas con respuesta y solución' />
      </head>
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
