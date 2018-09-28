import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect' // provides custom matchers for expect
import Voting from '../';

test('Fetch makes an API call and returns the data', async () => {
  const container = render()
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const fetch = mockFetch(todo);

  const people = await (todo);
  expect(people).toEqual(todo);
})

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}