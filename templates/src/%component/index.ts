import { tag, Tag } from '@storefront/core';

@tag('<%= prefix + component %>', require('./index.html'), require('./index.css'))
class <%= componentClass %> {}

interface <%= componentClass %> extends Tag<<%= componentClass %>.Props, <%= componentClass %>.State> {}
namespace <%= componentClass %> {
  export interface Props {}

  export interface State {}
}

export default <%= componentClass %>;
