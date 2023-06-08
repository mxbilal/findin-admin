import { Avatar, Button, Divider, Rate, Select } from 'antd'
import { UserOutlined } from '@ant-design/icons';
import React from 'react'

const Reviews = () => {
  return (
    <div className='review-main'>
      <div className='review-header'>
        <p style={{ fontSize: '20px' }}>Review List</p>
        <Select
          defaultValue={0}
          style={{ width: 200 }}
          onChange={e => console.log(e)}
          options={[
            { value: 0, label: 'All time' },
            { value: 1, label: 'Latest' },
            { value: 2, label: 'Oldest' },
          ]}
        />
      </div>
      <Divider style={{ margin: '0' }} />
      <div className='review-item-container'>
        {[1, 2, 2, 2].map(a => <><div className='review-item-main'>
          <div className='review-col1'><Avatar size={64} icon={<UserOutlined />} /> </div>
          <div className='review-col2'>
            <div className='review-header'>
              <div className='review-item-name'>
                <h3>Hotel Mariot</h3>
                <p>by M.Twain</p>
              </div>
              <div className='review-item-rate'>
                <Rate allowHalf defaultValue={2.5} />
                <p>June 15 2017</p>
              </div>
            </div>
            <div className='review-para'>
              <p>
                Lorem ipsum dolor sit amet, dolores mandamus moderatius ea ius, sed civibus vivendum
                imperdiet ei, amet tritani sea id. Ut veri diceret fierent mei, qui facilisi suavitate
                euripidis ad. In vim mucius menandri convenire, an brute zril vis. Ancillae delectus
                necessitatibus no eam, at porro solet veniam mel, ad everti nostrud vim. Eam no menandri
                pertinacia deterruisset.
              </p>
            </div>
            <div>
              <Button>Reply to this view</Button>
            </div>
          </div>
        </div>
          <Divider /></>)}
      </div>
    </div>
  )
}

export default Reviews
