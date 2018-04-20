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

const models = require('./index');

/**
 * Class representing a TxnMetaDataDto.
 */
class TxnMetaDataDto {
  /**
   * Create a TxnMetaDataDto.
   * @member {array} aliases Representative movements for transaction code
   * @member {array} movements Representative movements for transaction code
   * @member {array} [properties]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TxnMetaDataDto
   *
   * @returns {object} metadata of TxnMetaDataDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TxnMetaDataDto',
      type: {
        name: 'Composite',
        className: 'TxnMetaDataDto',
        modelProperties: {
          aliases: {
            required: true,
            serializedName: 'aliases',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TxnTypeAliasDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'TxnTypeAliasDto'
                  }
              }
            }
          },
          movements: {
            required: true,
            serializedName: 'movements',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'TxnMovementMetaDataDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'TxnMovementMetaDataDto'
                  }
              }
            }
          },
          properties: {
            required: false,
            serializedName: 'properties',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'PropertyDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'PropertyDto'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TxnMetaDataDto;
