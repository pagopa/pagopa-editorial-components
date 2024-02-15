import { Kpi } from './index';
import '@testing-library/jest-dom';
/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

it('renders correctly standard ', () => {
  const tree = renderer
    .create(
      <Kpi
        caption="Lorem ipsum dolor sit amet"
        kpiIcon={{
          icon: 'StarOutline',
        }}
        theme="light"
        value={6.087}
        id={''}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/* it('renders correctly custom icon ', () => { TODO
  const tree = renderer
    .create(
      <Kpi
        caption="Lorem ipsum dolor sit amet"
        kpiIcon={{
          color: 'primary',
          icon: <div>< />[object Object] />< />[object Object] color="error" /></div>
        }}
        theme="light"
        value={6.087} id={''} />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
}); */

it('renders correctly no icon ', () => {
  const tree = renderer
    .create(
      <Kpi
        caption="Lorem ipsum dolor sit amet"
        theme="light"
        value={6.087}
        id={''}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
