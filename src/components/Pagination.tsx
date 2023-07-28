import { Popover } from 'antd'
import Button from "./Button";
import Text from './text';
import { useEffect, useState } from 'react';

export const Page =({pages,setActive,setOpenPop}:any)=>{
return (
<div className='flex flex-col gap-2'>
   {pages.map((el:any)=>(
     <Button key={el} type='default' onClick={()=>{
        setActive(el)
        setOpenPop(false)
     }}>{el}</Button>
   ))}
</div>
)
}


const Pagination = ({data}:{data:any}) => {
    // const [pages,setPage]= useState<any>([])
    const [active,setActive]= useState(1)
    const [isOpenPop,setIsOpenPop]= useState(false)

    let pages:any = []
    // useEffect(()=>{
      for (let i = 1; i <= data.length; i++) {
        pages.push(i)
      }
    // },[])

  return (
    <div className="flex items-center gap-4">
        <Popover open={isOpenPop} placement="top" title={"Page"} content={<Page pages={pages} setActive={setActive} setOpenPop={setIsOpenPop}/>} trigger="click">

        <Button type="default" className="px-8" onClick={()=>setIsOpenPop(true)}>
          Page
        </Button>
        </Popover>
        <Text className="text-lg font-semibold">{active}/{pages.length}</Text>
        </div>
  )
}

export default Pagination