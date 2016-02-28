Marriage Sencha Touch and Node.js 

## Installation

As far as ExtJS and Sencha Touch can not be redistibuted with this module (see License section), you will not be able to install it from npm repository directly 

However, installation via npm is easily done manually: 

1. Download Sencha Touch from https://www.sencha.com/products/touch
2. Extract it
3. Copy contents of `src/` into `lib/Ext/` in here
4. `npm install .`


## Usage

Basically, all it takes is `require('extjs')`. <b>Warning:</b> a common mistake is to do `Ext=require('extjs')`. Don't. 

See also `test/` folder for usage examples (you'll need nodeunit to run them).


## Acknowledgments

* Sencha Touch is (c) 2016 [Sencha](http://sencha.com/)


## Thanks

There several implementations of this idea, loading core Ext library inside NodeJs environment.

  [n-ext](https://github.com/xcambar/n-ext) 
  [touch-node](https://github.com/ModusCreateOrg/touch-node)
  [node-extjs](git@github.com:egorFiNE/node-extjs)

Thanks all for the idea and implementation.


## License

Do whatever you want with software as long as you are in compliance with [Sencha Touch license](https://www.sencha.com/legal/#Sencha_Touch). 


## Author

Oleg Taranenko <olegtaranenko@gmail.com>

