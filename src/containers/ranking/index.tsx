'use client'

import { useEffect, useState } from 'react'
import CategoryQueryTab from '@/components/CategoryTab/CategoryQueryTab'
// import DeliveryTab from '@/components/DeliveryFilter'
import NoItem from '@/components/products/NoItem'
// import ProductItem from '@/components/product/TwoItemProductList'
import useQuery from '@/hooks/useQuery'
import { CategoryType } from '@/types/categoryType'
import { IdListType } from '@/types/productType'
import { getCategoryL } from '@/utils/categoryApi'
import Realtime from './Realtime'

export default function Ranking() {
  const queryResult = useQuery('ranking')
  const query = queryResult === null ? 'all' : queryResult

  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  useEffect(() => {
    async function fetchDate() {
      const data = await getCategoryL()
      setCategoryList(data)
    }

    fetchDate()
  }, [])

  // const productItems: IdListType[] | [] = []
  const productItems: IdListType[] | [] = [
    {
      id: 0,
      productId: 0,
    },
    {
      id: 1,
      productId: 1,
    },
    {
      id: 2,
      productId: 2,
    },
  ]

  return (
    <>
      {query === 'realtime' ? (
        <div>
          <Realtime />
        </div>
      ) : (
        <>
          <div className="sticky z-[100] top-[46px] ">
            <CategoryQueryTab data={categoryList} type="large" />
          </div>
          {/* <DeliveryTab /> */}
        </>
      )}

      <div>
        {productItems.length ? (
          <div className="grid grid-cols-[repeat(2,1fr)] gap-[0_8px]">
            {/* {productItems.map((itemId) => (
              <ProductItem key={itemId.id} itemId={itemId.productId} tag="" />
            ))} */}
          </div>
        ) : (
          <NoItem />
        )}
      </div>
    </>
  )
}
