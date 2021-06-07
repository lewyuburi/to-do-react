import React from 'react'

import DateTimeService from '@/services/datetime.service'

import HomeView from './home.view'

type HomeContainerProps = {
  path: string
}

const HomeContainer = (props: HomeContainerProps) => {

  const [currentTime, setCurrentTime] = React.useState<string | undefined>(undefined)

  const onMount = () => {
    setCurrentTime(DateTimeService.now().format('MMM D, YYYY'))
  }

  React.useEffect(() => {
    onMount()
  }, [])

  return (
    <HomeView
      currentTime={currentTime}
    />
  );
};

export default HomeContainer;