import React from 'react'
import PageCardSkeleton from './pageCardSkeleton'
import PageItemSkeleton from './pageItemSkeleton'

export const ExperiencePageSkeleton = ():React.ReactElement => {
  return (
          <div className="flex flex-1 flex-col gap-6">
            <PageCardSkeleton>
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <PageItemSkeleton key={i} />
                ))}
              </div>
            </PageCardSkeleton>
          </div>
  )
}