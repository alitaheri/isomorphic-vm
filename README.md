# [Isomorphic VM](https://github.com/alitaheri/isomorphic-vm)
[![npm](https://badge.fury.io/js/isomorphic-vm.svg)](https://badge.fury.io/js/isomorphic-vm)
[![Build Status](https://travis-ci.org/alitaheri/isomorphic-vm.svg?branch=master)](https://travis-ci.org/alitaheri/isomorphic-vm)

Based on [vm-browserify](https://github.com/substack/vm-browserify).

Provides an isomorphic api for node.js in browser. Uses the native `vm`
module in node.js environment.

## Installation

You can install this package with the following command:

```sh
npm install isomorphic-vm
```

## Using with webpack and browserify

It works with webpack and browserify out of box, but you will need to add `vm`
as external module to avoid errors (or warnings).

## Usage

This library mimics the node.js's [vm](https://nodejs.org/api/vm.html) module.

However, the shim ignores the `options` for every function.

Also keep in mind, there is a very subtle difference, this library doesn't
re-export the vm or shim, it exports one of them on the `default` export.
In other words, instead of doing this:

```js
import * as vm from 'vm';
```

you should do:

```js
import vm from 'isomorphic-vm';
```

## Typings

The typescript type definitions are also available and are installed via npm.

## License
This project is licensed under the [MIT license](https://github.com/alitaheri/isomorphic-vm/blob/master/LICENSE).
