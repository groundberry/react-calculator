import { clickNumber, clickAllClear } from './actions';

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
        entry: '1',
      };

      const newState = {
        entry: '0',
      };

      expect(clickAllClear(prevState)).toEqual(newState);
    });
  });
});
