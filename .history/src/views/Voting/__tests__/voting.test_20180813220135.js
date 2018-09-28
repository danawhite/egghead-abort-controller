import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import 'jest-dom/extend-expect' // provides custom matchers for expect

test('Fetch makes an API call and returns the data', async () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const fetchPeople = jest.fn();

  
})

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data
    })
  );
}

test('fetchPerson()', async () => {
  fetch = mockFetch(someJson); // or window.fetch

  const person = await fetchPerson('whatever id');
  expect(person).toEqual(someJson);

  // Make sure fetch has been called exactly once
  expect(fetch).toHaveBeenCalledTimes(1);
});