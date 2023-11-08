/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import BpkPageIndicator from '../../bpk-component-page-indicator';
import { cssModules } from '../../bpk-react-utils';

import STYLES from './BpkCardList.module.scss';

const getClassName = cssModules(STYLES);

const BpkCardListRow = ({
  accessory, // PAGE INDICATOR
  buttonText,
  cardList,
}: any) => (
  <>
    <div className={getClassName('bpk-card-list--row')}>{cardList}</div>

    {!buttonText && (
      <BpkPageIndicator
        currentIndex={currentIndex}
        totalIndicators={totalIndicators}
        indicatorLabel=""
        prevNabLabel=""
        nextNavLabel=""
        showNav
        onClick={(
          e: MouseEvent<HTMLButtonElement>,
          newIndex: number,
          direction: string,
        ) => {
          setCurrentIndex(newIndex);
        }}
      />
    )}
  </>
);

export default BpkCardListRow;
