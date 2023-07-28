import { Select } from 'antd';
import Text from './text';

interface TProps{
  onChange:any
}

const InputSelect = ({onChange}:TProps) => {

  const change = (value: string) => {
    onChange(`${value}`);
  };
  
  const onSearch = (value: string) => {
    onChange(`${value}`);
  };
  return (
    <Select
    onChange={change}
    onSearch={onSearch}
    showSearch
    style={{ width: 200 }}
    placeholder={<Text className='text-[#0466C8CC] text-[16px]'>Supplier</Text>}
    optionFilterProp="children"
    filterOption={(input, option) => (option?.label ?? '').includes(input)}
    filterSort={(optionA, optionB) =>
      (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
    }
    options={[
      {
        value: 'lucky',
        label: 'Lucky',
      },
      {
        value: 'marwan',
        label: 'Marwan',
      },
      {
        value: 'nashir',
        label: 'Nashir',
      },
      {
        value: 'lidya',
        label: 'Lidya',
      },
      {
        value: 'permana',
        label: 'Permana',
      },
    ]}
  />
  )
}

export default InputSelect