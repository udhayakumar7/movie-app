import React from 'react'
import Skeleton,{ SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const RowLoader = () => {
  return (
    <div>

    <SkeletonTheme  height='200px' width='95%' baseColor="#0f172a" highlightColor="#2c374f">
        
          <Skeleton className='' />
       
      </SkeletonTheme>
    </div>
  )
}

export default RowLoader