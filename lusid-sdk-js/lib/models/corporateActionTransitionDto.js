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
 * A 'transition' within a corporate action, representing a set of output
 * movements paired to a single input position
 *
 */
class CorporateActionTransitionDto {
  /**
   * Create a CorporateActionTransitionDto.
   * @member {object} [inputTransition]
   * @member {string} [inputTransition.securityUid]
   * @member {number} [inputTransition.unitsFactor]
   * @member {number} [inputTransition.costFactor]
   * @member {array} [outputTransitions]
   */
  constructor() {
  }

  /**
   * Defines the metadata of CorporateActionTransitionDto
   *
   * @returns {object} metadata of CorporateActionTransitionDto
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CorporateActionTransitionDto',
      type: {
        name: 'Composite',
        className: 'CorporateActionTransitionDto',
        modelProperties: {
          inputTransition: {
            required: false,
            serializedName: 'inputTransition',
            type: {
              name: 'Composite',
              className: 'CorporateActionTransitionComponentDto'
            }
          },
          outputTransitions: {
            required: false,
            serializedName: 'outputTransitions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'CorporateActionTransitionComponentDtoElementType',
                  type: {
                    name: 'Composite',
                    className: 'CorporateActionTransitionComponentDto'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = CorporateActionTransitionDto;
