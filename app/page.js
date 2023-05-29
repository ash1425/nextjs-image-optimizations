import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Kashmiri House</p>
      <img src={"/images/PXL_20221228_063003891.jpg"} style={{paddingBottom: "200px"}}/>
      <p>Landscape</p>
      <img src={"/images/PXL_20221228_080557753.MP.jpg"} style={{paddingBottom: "200px"}}/>
      <p>Fields</p>
      <img src={"/images/PXL_20230129_024622777.jpg"} style={{paddingBottom: "200px"}}/>
    </main>
  )
}
