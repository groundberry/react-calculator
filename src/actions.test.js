import { clickNumber, clickAllClear } from './actions';

describe('actions', () => {
  describe('clickNumber', () => {
    it('adds a number to the screen', () => {
      const prevState = {
        buffer: '0',
      };

      const newState = {
        buffer: '1',
      };

      expect(clickNumber(1, prevState)).toEqual(newState);
    });
  });

  describe('clickAllClear', () => {
    it('clears everything', () => {
      const prevState = {
        buffer: '1',
      };

      const newState = {
        buffer: '0',
      };

      expect(clickAllClear(prevState)).toEqual(newState);
    });
  });
});
