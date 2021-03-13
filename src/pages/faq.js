/** @jsx h */
import { h } from 'preact'
import FAQ from '../../faq.js'
import SEO from '../components/seo.js'

export default function IndexPage() {
  return (
    <div>
      <SEO title="FAQ" />
      <FAQ />
    </div>
  )
}