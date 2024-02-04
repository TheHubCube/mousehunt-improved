import { addHudStyles, onRequest } from '@utils';

import styles from './styles.css';

const undisableCheese = () => {
  const armButtons = document.querySelectorAll('.halloweenBoilingCauldronHUD-bait');
  armButtons.forEach((armButton) => {
    armButton.classList.remove('disabled');
    const link = armButton.querySelector('a.disabled');
    if (link) {
      link.classList.remove('disabled');
    }

    const tooltipLink = armButton.querySelector('.halloweenBoilingCauldronHUD-bait-tooltipContent a.disabled');
    if (tooltipLink) {
      tooltipLink.classList.remove('disabled');
    }
  });
};

const halloweenGlobal = async () => {
  // no-op.
};

/**
 * Initialize the module.
 */
const halloweenLocation = async () => {
  addHudStyles(styles);
  undisableCheese();
  onRequest(undisableCheese);
};

export {
  halloweenGlobal,
  halloweenLocation
};