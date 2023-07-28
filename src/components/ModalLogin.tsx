import { Dispatch, SetStateAction } from 'react'
import { Modal, Row } from 'antd'
import Text from './text'
import { BiSolidLock } from "react-icons/bi";
import {Input} from 'antd';
import { useNavigate } from 'react-router-dom';


interface TProps{
    openModal:boolean
    setOpenModal:Dispatch<SetStateAction<boolean>>
    path:string
}

const ModalLogin = ({openModal,setOpenModal,path}:TProps) => {
  const navigate = useNavigate()
  return (
    <Modal
    width={440}
    title={<div className='text-2xl flex items-center gap-2 text-[#0466C8]'><BiSolidLock/><Text className='text-2xl font-bold'>Locked</Text></div>}
    centered
    open={openModal}
    onOk={() => {navigate(path);setOpenModal(false)}}
    onCancel={() => setOpenModal(false)}
    okText="Continue"
  >
    <Text className='text-[19px]'>Please insert to continue</Text>
    <Row className='flex flex-col gap-4 my-10'>
        <Input type='text' placeholder='Username' className='py-2 px-4'/>
        <Input type='password' placeholder='Password' className='py-2 px-4'/>
    </Row>
  </Modal>
  )
}

export default ModalLogin