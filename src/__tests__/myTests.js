/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/svelte'
import App from '../App'

test('shows proper heading when rendered', () => {
  const {getByText} = render(App, {name: 'World'})

  expect(getByText('Hello World!')).toBeInTheDocument()
})