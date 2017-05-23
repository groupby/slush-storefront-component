import * as pkg from '../../src';
import <%= componentClass %> from '../../src/<%= component %>';
import suite from './_suite';

suite('package', ({ expect }) => {
  it('should expose <%= componentClass %>', () => {
    expect(pkg.<%= componentClass %>).to.eq(<%= componentClass %>);
  });
});
