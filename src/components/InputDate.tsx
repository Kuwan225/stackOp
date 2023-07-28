import { DatePicker, DatePickerProps } from 'antd'

const InputDate = ({onChange}:{onChange:any}) => {

    const change: DatePickerProps['onChange'] = (date, dateString) => {
        onChange(dateString)
      };
      
  return (
    <DatePicker onChange={change} placeholder='Jadwal'/>
  )
}

export default InputDate