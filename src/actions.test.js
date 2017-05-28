import { clickNumber } from './actions';

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
});
