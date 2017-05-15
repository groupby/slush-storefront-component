import { view, Component } from '@storefront/core';

@view('<%= prefix + component %>', require('./index.html'), require('./index.css'))
class <%= componentClass %> extends Component {}

export default <%= componentClass %>;
