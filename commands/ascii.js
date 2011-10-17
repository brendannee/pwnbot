
/**
 * Module dependencies.
 */

var asciimo = require('asciimo')

/**
 * Module exports.
 */

module.exports = ascii;

/**
 * Write utility. Wraps around the dummy async interface.
 *
 * @param {String} text to write in ascii
 * @param {String} font name (`banner`)
 * @api private
 */

function write (text, font, fn) {
  asciimo.Figlet.write(text, font || 'banner', fn);
}

/**
 * ASCIImo wrapper command.
 */

function ascii (bot) {

  return function ascii (text, options, say, user, channel) {
    write(text, options.font, say)
  };

};