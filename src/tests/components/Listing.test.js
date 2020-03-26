import React from 'react'
import { Listing } from 'components'
import renderer from 'react-test-renderer'
describe('Listing component', () => {
  it('renders correctly', () => {
    const listingData = [
      'rand',
      {
        name: 'Big title',
        accomodates: '2',
        beds: '3',
        bedrooms: '11',
        bathrooms: '4',
        summary: 'This is a great place to live',
        listing_url: 'http://agreatlink.com'
      }
    ]
    const ListingComponent = renderer
      .create(<Listing listingData={listingData} />)
      .toJSON()

    expect(ListingComponent).toMatchSnapshot()
  })
})
