import { NamesAuthPipe } from './names-auth.pipe';

describe('NamesAuthPipe', () => {
  it('create an instance', () => {
    const pipe = new NamesAuthPipe();
    expect(pipe).toBeTruthy();
  });
});
