import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useContent } from '@/context/LocaleContext'
import { Background } from '@/components/layout/Background'
import { BackToTop } from '@/components/layout/BackToTop'
import { Footer } from '@/components/layout/Footer'
import { Navbar } from '@/components/layout/Navbar'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

// Case-study pages are split into their own chunk so the home page stays light.
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'))

export default function App() {
  const { ui } = useContent()

  return (
    <>
      <a className="skip-link" href="#main">
        {ui.common.skipToContent}
      </a>
      <Background />
      <ScrollProgress />
      <Navbar />
      <ScrollManager />

      <main id="main" tabIndex={-1}>
        <Suspense fallback={<p className="container sr-only">{ui.common.loading}</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <BackToTop />
    </>
  )
}
