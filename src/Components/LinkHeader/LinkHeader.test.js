// import React from 'react';
// import { render } from '@testing-library/react';
// import LinkHeader from './LinkHeader.jsx';

describe("LinkHeader", () => {
    it("sum(1,2) to equal 3", () => {
        const sum = (a, b) => a + b;
        expect(sum(1,2)).toBe(3);
    })

    it("sum(10,1) to be greater than or equal 10", () => {
      const sum = (a, b) => a + b;
      expect(sum(10,1)).toBeGreaterThanOrEqual(10);
    })


});


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
