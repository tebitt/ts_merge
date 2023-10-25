import { merge } from './merge';
import { test, expect } from 'bun:test';

test('The merge function should merge two sorted arrays into one sorted array.', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const expected = [1, 2, 3, 4, 5, 6];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual(expected);
});

test('The merge function should be able to handle empty arrays.', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const expected: number[] = [];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual(expected);
});

test('The merge function should be able to handle sorted arrays of different lengths.', () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4];
    const expected = [1, 2, 3, 4, 5];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual(expected);
});

test('The merge function should be able to handle duplicates.', () => {
    const collection_1 = [1, 3, 3, 5];
    const collection_2 = [2, 3, 4, 6];
    const expected = [1, 2, 3, 3, 3, 4, 5, 6];
    const result = merge(collection_1, collection_2);
    expect(result).toEqual(expected);
});