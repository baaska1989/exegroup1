import Aboutexe from "../components/Aboutexe";
import Domesticprojects from "../components/Domesticprojects";
import Projects from "../components/Projects";
import Recruitment from "../components/Recruitment";
import Sharedhouse from "../components/Sharedhouse";
import Slider from "../components/Slider";
import MainLayout from "../layout/MainLayout";
import Head from 'next/head';
import { useRouter } from 'next/router';

import en from '../locales/en';
import jp from '../locales/jp';
export default function Home() 
{
    const router = useRouter();
    const { locale } = router;
    const t = locale === 'jp' ? jp : en;
    
  return (
      <>
      <Head>
          <title>{t.home}</title>
      </Head>
      <MainLayout>
      <Slider />
      <Aboutexe />
      <Recruitment />
      <Domesticprojects />
      <Sharedhouse />
      <Projects />
    </MainLayout>
      </>
  );
}
