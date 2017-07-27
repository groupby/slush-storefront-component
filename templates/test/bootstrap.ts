import * as chai from 'chai';
import * as mock from 'mock-require';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);

mock('../src/<%= component %>/index.html', {});
mock('../src/<%= component %>/index.css', {});
