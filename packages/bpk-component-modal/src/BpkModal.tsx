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

import type { ReactNode } from 'react';
import { useEffect, useRef } from 'react';

// @ts-expect-error Untyped import. See `decisions/imports-ts-suppressions.md`.
import BpkCloseButton from '../../bpk-component-close-button';
import BpkText, { TEXT_STYLES } from '../../bpk-component-text';
import { cssModules, withDefaultProps } from '../../bpk-react-utils';

import STYLES from './BpkModal.module.scss';

const getClassName = cssModules(STYLES);

export type Props = {
  id: string | undefined;
  ariaLabelledby: string;
  children: ReactNode;
  closeLabel: string;
  fullScreenOnDesktop?: boolean;
  isOpen: boolean;
  noFullScreenOnMobile?: boolean;
  onClose: () => void | null;
  removePadding?: boolean;
  showHeader?: boolean;
  title?: string | null;
  wide?: boolean;
};

const Header = ({
  closeLabel,
  id,
  onClose,
  title,
}: {
  closeLabel: string;
  id: string | undefined;
  onClose: () => void | null;
  title?: string | null;
}) => {
  if (title) {
    return (
      <div id={id} className={getClassName('bpk-modal__header-title')}>
        <div className={getClassName('bpk-modal__header-title-container')}>
          <Heading>{title}</Heading>
        </div>
        <BpkCloseButton label={closeLabel} onClick={onClose} />
      </div>
    );
  }
  return (
    <div className={getClassName('bpk-modal__button-container')}>
      <BpkCloseButton label={closeLabel} onClick={onClose} />
    </div>
  );
};

const Heading = withDefaultProps(BpkText, {
  textStyle: TEXT_STYLES.label1,
  tagName: 'h2',
  className: getClassName('bpk-modal__title'),
});

type DialogProps = {
  isDialogOpen: boolean;
};

// TODO: this check if the browser support the HTML dialog element. We can remove it once we drop support as a business for Safari 14
const dialogSupported = typeof HTMLDialogElement === 'function';

const setPageProperties = ({ isDialogOpen }: DialogProps) => {
  document.body.style.overflowY = isDialogOpen ? 'hidden' : 'visible';

  if (!dialogSupported) {
    document.body.style.position = isDialogOpen ? 'fixed' : 'relative';
    document.body.style.width = isDialogOpen ? '100%' : 'auto';
  }
};

export const BpkModal = (props: Props) => {
  const {
    ariaLabelledby,
    children,
    closeLabel,
    fullScreenOnDesktop,
    id,
    isOpen,
    noFullScreenOnMobile,
    onClose,
    removePadding,
    showHeader = true,
    title,
    wide,
  } = props;

  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = document.getElementById(`${id}`);
    const dialogWithPolyfill = document.getElementById(`${id}-polyfill`);

    const handleBackdropClick = (modal: HTMLElement | null) => {
      if (modal) {
        modal.addEventListener('click', (event: Event) => {
          const { target } = event;

          if (target === modal) {
            modal === dialog ? ref.current?.close?.() : onClose();
          }
        });
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
          onClose();
      }
    };

    if (isOpen) {
      // There is a bug on older versions of browser using chromium (chrome, firefox, edge >114) where the dialog got an open attribute even before it is opened.
      // Therefore, when trying to open it, it crashes and log an error mentioning the dialog has already an open attribute.
      ref.current?.removeAttribute('open');
      ref.current?.showModal?.();

      if (dialogWithPolyfill) {
        handleBackdropClick(dialogWithPolyfill);
        window.addEventListener('keydown', handleKeyDown);
      }

      handleBackdropClick(dialog);
    } else {
      ref.current?.close?.();
    }

    setPageProperties({ isDialogOpen: isOpen });
    return () => {
      setPageProperties({ isDialogOpen: false })
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [id, isOpen, onClose]);

  const classNames = getClassName(
    'bpk-modal',
    fullScreenOnDesktop && 'bpk-modal--full-screen-desktop',
    noFullScreenOnMobile && 'bpk-modal--no-full-screen-mobile',
    wide && 'bpk-modal--wide',
  );

  const contentClassNames = getClassName(
    'bpk-modal__container',
    fullScreenOnDesktop && 'bpk-modal__container--full-screen-desktop',
    removePadding && 'bpk-modal__container--removePadding',
  );

  return isOpen ? (
    <div
      className={getClassName(
        'bpk-modal-wrapper',
        dialogSupported ? '' : 'bpk-modal-polyfill',
      )}
    >
      {!dialogSupported && (
        <div
          id={`${id}-polyfill`}
          className={getClassName('bpk-modal-backdrop')}
          data-open={isOpen}
        />
      )}
      <dialog
        id={id}
        className={classNames}
        onClose={onClose}
        aria-labelledby={ariaLabelledby}
        data-open={isOpen}
        ref={ref}
      >
        {showHeader && (
          <Header
            id={`${id}-title`}
            title={title}
            closeLabel={closeLabel}
            onClose={onClose}
          />
        )}
        <div className={contentClassNames}>{children}</div>
      </dialog>
    </div>
  ) : null;
};
