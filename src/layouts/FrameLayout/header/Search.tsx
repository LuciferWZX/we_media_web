import React, { FC } from 'react';
import { SearchComponent } from '@/layouts/FrameLayout/style';
import { AutoComplete, Input } from 'antd';
import { IconFont } from '@/components';
const SearchBlock: FC = () => {
  const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];

  return (
    <SearchComponent>
      <AutoComplete options={options} style={{ width: 300 }}>
        <Input
          allowClear={true}
          placeholder={'搜索视频，游戏，电影或者其他...'}
          className={'search-input'}
          prefix={<IconFont type={'icon-ziyuan'} />}
        />
      </AutoComplete>
    </SearchComponent>
  );
};
export default SearchBlock;
