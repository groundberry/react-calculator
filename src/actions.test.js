import {
  clickNumber,
  clickAllClear,
  clickClearEntry,
  clickSum,
} from './actions';

describe('actions', () => {
  describe('clickNumber', () => {
    it('adds a number to the screen', () => {
      const prevState = {
        entry: '0',
      };

      const newState = {
        entry: '1',
      };

      expect(clickNumber(1, prevState)).toEqual(newState);
    });
  });

  describe('clickAllClear', () => {
    it('clears everything', () => {
      const prevState = {
        entry: '45',
        memory: '123',
        operation: '+',
      };

      const newState = {
        entry: '0',
        memory: '0',
        operation: null,
      };

      expect(clickAllClear(prevState)).toEqual(newState);
    });
  });

  describe('clickClearEntry', () => {
    it('clears entry', () => {
      const prevState = {
        entry: '45',
        memory: '123',
        operation: '+',
      };

      const newState = {
        entry: '0',
      };

      expect(clickClearEntry(prevState)).toEqual(newState);
    });
  });

  describe('clickSum', () => {
    it('saves the sum operation', () => {
      const prevState = {
        entry: '123',
        memory: '0',
        operation: null,
      };

      const newState = {
        memory: '123',
        operation: '+',
      };

      expect(clickSum(prevState)).toEqual(newState);
    });
  });
});
