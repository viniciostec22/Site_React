import Head from 'next/head'
import { Inter } from 'next/font/google'
import Menu from '@/components/Menu'
import Footer from '@/components/Footer'
import ContactContent from '@/components/ContactContent/idex'
import styles from '@/components/ContactContent/ContactContent.module.css'
import ContactForm from '@/components/ContactForm'
const inter = Inter({ subsets: ['latin'] })

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato</title>
        <meta name="description" content="Site ... sobre ..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <section className={`${styles.content} ${styles.contact}`}>
          <div className={styles.maxWidth}>
              <h2 className={styles.title}>Contato</h2>
              <div className={styles.contactContent}>
                <ContactContent />
                <ContactForm />
              </div>
            </div>
        </section>
        <Footer />
      </main>
    </>
  )
}
