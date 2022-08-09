import { useEffect, useRef } from 'react'

export default function useSEO ({ title, description, ogTitle, ogImage, ogDescription }) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(document.querySelector('meta[name="description"]'))
  const prevOgTitle = useRef(document.querySelector('meta[property="og:title"]'))
  const prevOgImage = useRef(document.querySelector('meta[property="og:image"]'))
  const prevOgDescription = useRef(document.querySelector('meta[property="og:description"]'))

  useEffect(() => {
    const previousTitle = prevTitle.current
    if (title) {
      document.title = `${title}`
    }

    return () => {
      document.title = previousTitle
    }
  }, [title])

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    const previousDescription = prevDescription.current
    if (description) {
      metaDescription.setAttribute('content', description)
    }

    return () => {
      metaDescription.setAttribute('content', previousDescription)
    }
  }, [description])

  useEffect(() => {
    const metaOgTitle = document.querySelector('meta[property="og:title"]')
    const previousOgTitle = prevOgTitle.current
    if (ogTitle) {
      metaOgTitle.setAttribute('content', ogTitle)
    }

    return () => {
      metaOgTitle.setAttribute('content', previousOgTitle)
    }
  }, [ogTitle])

  useEffect(() => {
    const metaOgImage = document.querySelector('meta[property="og:image"]')
    const previousOgImage = prevOgImage.current
    if (ogImage) {
      metaOgImage.setAttribute('content', ogImage)
    }

    return () => {
      metaOgImage.setAttribute('content', previousOgImage)
    }
  }, [ogImage])

  useEffect(() => {
    const metaOgDescription = document.querySelector('meta[property="og:description"]')
    const previousOgDescription = prevOgDescription.current
    if (ogDescription) {
      metaOgDescription.setAttribute('content', ogDescription)
    }

    return () => {
      metaOgDescription.setAttribute('content', previousOgDescription)
    }
  }, [ogDescription])
}
