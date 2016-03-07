/// <reference path="../typings/main.d.ts" />

import {expect} from 'chai';
import * as jsdom from 'jsdom';

import vm, {shim} from '../src';

(global as any).document = jsdom.jsdom('<html><body><div id="root"></div></body></html>');
(global as any).window = (document as any).defaultView;

describe('native vm', () => {

  it('should export Script', () => {
    const context = vm.createContext({ hello: null }) as any;
    const script = new vm.Script('hello = "world";');
    script.runInContext(context);
    expect(context.hello).to.be.equals('world');
    script.runInNewContext();
    script.runInThisContext();
    expect((global as any).hello).to.be.equals('world');
    expect(() => { new vm.Script(' = "world";').runInNewContext(); }).to.throw();
  });

  it('should export createContext and isContext', () => {
    const context = vm.createContext({ hello: null }) as any;
    expect(vm.isContext(context)).to.be.true;
  });

  it('should export runInContext and runInDebugContext', () => {
    const context = vm.createContext({ hello: null }) as any;
    vm.runInContext('hello = "world";', context);
    expect(vm.runInDebugContext('1+1;')).to.be.equals(2);
    expect(context.hello).to.be.equals('world');
  });

  it('should export runInNewContext', () => {
    expect(vm.runInNewContext('hello = "world";')).to.be.equals('world');
  });

  it('should export runInThisContext', () => {
    vm.runInThisContext('foo = "bar";');
    expect((global as any).foo).to.be.equals('bar');
  });

});

describe('shim vm', () => {

  it('should export Script', () => {
    const context = shim.createContext({ hello: null }) as any;
    const script = new shim.Script('hello = "world";');
    script.runInContext(context);
    expect(context.hello).to.be.equals('world');
    script.runInNewContext();
    script.runInThisContext();
    expect((global as any).hello).to.be.equals('world');
    expect(() => { new shim.Script(' = "world";').runInNewContext(); }).to.throw();
  });

  it('should export createContext and isContext', () => {
    const context = shim.createContext({ hello: null }) as any;
    expect(shim.isContext(context)).to.be.true;
  });

  it('should export runInContext and runInDebugContext', () => {
    const context = shim.createContext({ hello: null }) as any;
    shim.runInContext('hello = "world";', context);
    expect(shim.runInDebugContext('1+1;')).to.be.equals(2);
    expect(context.hello).to.be.equals('world');
  });

  it('should export runInNewContext', () => {
    expect(shim.runInNewContext('hello = "world";')).to.be.equals('world');
  });

  it('should export runInThisContext', () => {
    shim.runInThisContext('bar = "baz";');
    expect((global as any).bar).to.be.equals('baz');
  });

});
