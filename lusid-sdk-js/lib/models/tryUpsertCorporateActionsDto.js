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
 * Class representing a TryUpsertCorporateActionsDto.
 */
class TryUpsertCorporateActionsDto {
  /**
   * Create a TryUpsertCorporateActionsDto.
   * @member {string} [href]
   * @member {array} [values]
   * @member {array} [failed]
   */
  constructor() {
  }

  /**
   * Defines the metadata of TryUpsertCorporateActionsDto
   *
   * @returns {object} metadata of TryUpsertCorporateActionsDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'TryUpsertCorporateActionsDto',
      type: {
        name: 'Composite',
        className: 'TryUpsertCorporateActionsDto',
        modelProperties: {
          href: {
            required: false,
            serializedName: 'href',
            type: {
              name: 'String'
            }
          },
          values: {
            required: false,
            serializedName: 'values',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CorporateActionEventDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'CorporateActionEventDto'
                  }
              }
            }
          },
          failed: {
            required: false,
            serializedName: 'failed',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ErrorDetailElementType',
                  type: {
                    name: 'Composite',
                    className: 'ErrorDetail'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = TryUpsertCorporateActionsDto;
