import React from 'react'
import { PageLayout } from '@/components/layout/PageLayout'
import Title from '@/components/widgets/Title'
import { useTranslation } from 'react-i18next'
import { IconMap } from '@/components/widgets/Icon'
import { Linko } from '@/components/widgets/Linko'
import YTVideo from './Iframe'

const Creation = () => {
  const { t } = useTranslation()
  const iconmap = IconMap.Hobbies
  const toolbar = (
    <>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.MusicPlayer}
          label="app:creation:creationMusic"
          href="#creationMusic"
        />
      </li>
      <li className="nav-item">
        <Linko
          iconmap={IconMap.RetroGaming}
          label="app:creation:creationRetrogaming"
          href="#creationRetrogaming"
        />
      </li>
      <div className="vr"></div>
      <li className="nav-item">
        <Linko iconmap={IconMap.Code} label={`${t('Footer')}`} href="#footer" />{' '}
      </li>
    </>
  )

  return (
    <PageLayout subnavbar={true} toolbar={toolbar}>
      <div className="row">
        <Title
          id="creationMusic"
          h="h2"
          label="app:creation:creationMusic"
          iconmap={IconMap.MusicPlayer}
        />
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <YTVideo
            title="jperformer · Introspection"
            url="https://www.youtube.com/embed/qe0uJkU3lws"
            aspectRatio="16/9"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="jperformer · Before Dawn"
            url="https://www.youtube.com/embed/T0qKCsP4Mw8"
            aspectRatio="16/9"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="jperformer - Liquid Surrender"
            url="https://www.youtube.com/embed/Av2-thWndRI"
            aspectRatio="16/9"
          />
        </div>
      </div>
      <div className="row">
        <Title
          id="creationRetrogaming"
          h="h2"
          label="app:creation:creationRetrogaming"
          iconmap={IconMap.RetroGaming}
        />
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <YTVideo
            title="Metal Gear · メタルギア. MSX2. Konami 1987. Full Playthrough"
            url="https://www.youtube.com/embed/VI1mJxG7DYA"
            aspectRatio="4/3"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="Space Manbow · スペースマンボウ (FRS' TurboFix Patch v1.1).
            MSX2/SCC. Konami 1989. Full Playthrough (3 Laps)"
            url="https://www.youtube.com/embed/PJAUc2hqsZw"
            aspectRatio="4/3"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="The Treasure Of Uşas ウシャス. MSX2. Konami 1987. Full Playthrough"
            url="https://www.youtube.com/embed/DbAKZ8G8uhM"
            aspectRatio="4/3"
          />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col-md-4">
          <YTVideo
            title="Vampire Killer · Akumajō Dracula · 悪魔城ドラキュラ. MSX2/SCC. Konami 1986. Full Playthrough"
            url="https://www.youtube.com/embed/gFqhOmwS9AQ"
            aspectRatio="4/3"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="Metal Gear 2 Solid Snake · メタルギア２　ソリッドスネーク. MSX2/SCC. Konami 1990. Full Playthrough"
            url="https://www.youtube.com/embed/CerGHPH1Yak"
            aspectRatio="4/3"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="Head Over Heels (MSX2 Remake). MSX2. Ocean 1987 / FX Software 2016. Full Playthrough (Good Ending)"
            url="https://www.youtube.com/embed/Dft1I4vS3-4"
            aspectRatio="4/3"
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-4">
          <YTVideo
            title="Nemesis 2 · Gradius II · グラディウス2. MSX/SCC. Konami 1987. Full Playthrough"
            url="https://www.youtube.com/embed/yt5GF4cEeNI"
            aspectRatio="4/3"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="Rastan Saga ラスタンサーガ. MSX2. TAITO 1988. My Full Playthrough"
            url="https://www.youtube.com/embed/xQfYs5RPsSo"
            aspectRatio="4/3"
          />
        </div>
        <div className="col-md-4">
          <YTVideo
            title="Salamander (Enhanced Version) · サラマンダ. MSX/SCC. Konami 1987. Full Playthrough"
            url="https://www.youtube.com/embed/Y6x0jfEiwn4"
            aspectRatio="4/3"
          />
        </div>
      </div>
    </PageLayout>
  )
}

export default Creation
