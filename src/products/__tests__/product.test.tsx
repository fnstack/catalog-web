import * as React from 'react';
import { shallow } from 'enzyme';
import { Products } from '../container/products';
import { MockedProvider } from 'react-apollo/test-utils';
import { products } from '../queries';

const mocks = [
    {
      request: {
        query: products,
      },
      result: {
        data: {
          dog: { id: '1', name: 'Buck', description: 'bulldog' },
        },
      },
    },
  ];
  

describe( '<Products/>', () => {
    it('should contains AddNewProduct', () => {
        const wrapper = shallow(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Products/> 
            </MockedProvider>
            );

        console.log(wrapper.debug())

        expect(wrapper.find('AddNewProduct')).toEqual(1);
    });    
});