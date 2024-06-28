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

import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';

import BpkCheckbox from './BpkCheckbox';

describe('BpkCheckbox accessibility tests', () => {
  it('should not have programmatically-detectable accessibility issues', async () => {
    const { container } = render(
      <BpkCheckbox name="checkbox" label="Prefer directs" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should render using label as aria-label if no ariaLabel prop provided', async () => {
    render(<BpkCheckbox name="checkbox" label="Prefer directs" />);
    const label = screen.getByLabelText('Prefer directs');
    expect(label).toBeInTheDocument();
  });

  it('should render using ariaLabel prop as aria-label if prop provided', async () => {
    render(<BpkCheckbox name="checkbox" label="Prefer directs" ariaLabel="aria label test string"/>);
    const ariaLabel = screen.getByLabelText('aria label test string');
    expect(ariaLabel).toBeInTheDocument();
  });
});
