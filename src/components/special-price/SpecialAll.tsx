'use client'

import { useEffect, useState } from 'react'
import CategoryQueryTab from '@/components/CategoryTab/CategoryQueryTab'
import DeliveryTab from '@/components/DeliveryTab'
import { CategoryType } from '@/types/categoryType'
import { getCategoryL } from '@/utils/categoryApi'
import ItemList from '../ui/OneItemBundleList'
import NoItem from './NoItem'

// TODO: 무한스크롤 어떻게?
export default function SpecialAll() {
  // TODO: 데이터 받아오기
  const bundleItems = [
    {
      id: 0,
      bundleId: 0,
    },
    {
      id: 1,
      bundleId: 1,
    },
    {
      id: 2,
      bundleId: 2,
    },
  ]
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])

  useEffect(() => {
    async function fetchData() {
      const data = await getCategoryL()
      if (data) {
        setCategoryList(data)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      <div className="sticky z-[100] top-[46px] ">
        <CategoryQueryTab data={categoryList} type="large" />
      </div>

      <DeliveryTab />
      <div>
        {bundleItems.length ? (
          bundleItems.map((itemId) => (
            <ItemList key={itemId.id} itemId={itemId.bundleId} />
          ))
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
