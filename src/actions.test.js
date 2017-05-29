import {
  clickNumber,
  clickAllClear,
  clickClearEntry,
  clickOperation,
  clickPercentage,
  clickEqual,
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

      expect(clickNumber('1', prevState)).toEqual(newState);
    });

    it('adds a decimal number to the screen', () => {
      const prevState = {
        entry: '0',
      };

      const newState = {
        entry: '0.',
      };

      expect(clickNumber('.', prevState)).toEqual(newState);
    });

    it('replaces the entry when there was an operation', () => {
      const prevState = {
        entry: '123',
        memory: '123',
        operation: '+',
      };

      const newState = {
        entry: '4',
      };

      expect(clickNumber('4', prevState)).toEqual(newState);
    });

    it('does not replace the entry when there was an operation and an entry', () => {
      const prevState = {
        entry: '4',
        memory: '123',
        operation: '+',
      };

      const newState = {
        entry: '45',
      };

      expect(clickNumber('5', prevState)).toEqual(newState);
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

  describe('clickOperation', () => {
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

      expect(clickOperation('+', prevState)).toEqual(newState);
    });

    it('saves the subtract operation', () => {
      const prevState = {
        entry: '123',
        memory: '0',
        operation: null,
      };

      const newState = {
        memory: '123',
        operation: '-',
      };

      expect(clickOperation('-', prevState)).toEqual(newState);
    });

    it('saves the multiply operation', () => {
      const prevState = {
        entry: '123',
        memory: '0',
        operation: null,
      };

      const newState = {
        memory: '123',
        operation: '*',
      };

      expect(clickOperation('*', prevState)).toEqual(newState);
    });

    it('saves the divide operation', () => {
      const prevState = {
        entry: '123',
        memory: '0',
        operation: null,
      };

      const newState = {
        memory: '123',
        operation: '/',
      };

      expect(clickOperation('/', prevState)).toEqual(newState);
    });
  });

  describe('clickPercentage', () => {
    it('saves the percentage operation', () => {
      const prevState = {
        entry: '100',
        memory: '0',
        operation: null,
      };

      const newState = {
        entry: '1',
        memory: '1',
        operation: null,
      };

      expect(clickPercentage(prevState)).toEqual(newState);
    });
  });

  describe('clickEqual', () => {
    it('applies the operation', () => {
      const prevState = {
        entry: '456',
        memory: '123',
        operation: '+',
      };

      const newState = {
        entry: '579',
        memory: '579',
        operation: null,
      };

      expect(clickEqual(prevState)).toEqual(newState);
    });
  });
});
