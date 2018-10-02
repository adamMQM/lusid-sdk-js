/*
 * Copyright © 2018 FINBOURNE TECHNOLOGY LTD
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

'use strict';

/**
 * Class representing a CreateResults.
 */
class CreateResults {
  /**
   * Create a CreateResults.
   * @member {object} [data]
   * @member {string} [scope]
   * @member {string} [key]
   * @member {date} [date]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CreateResults
   *
   * @returns {object} metadata of CreateResults
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CreateResults',
      type: {
        name: 'Composite',
        className: 'CreateResults',
        modelProperties: {
          data: {
            required: false,
            serializedName: 'data',
            type: {
              name: 'Object'
            }
          },
          scope: {
            required: false,
            serializedName: 'scope',
            type: {
              name: 'String'
            }
          },
          key: {
            required: false,
            serializedName: 'key',
            type: {
              name: 'String'
            }
          },
          date: {
            required: false,
            serializedName: 'date',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = CreateResults;
