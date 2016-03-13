/*
What it does:
- Displays an error message (Toast)
- Displays an undo action (Snackbar)
*/

import { RESET_ERROR_MESSAGE } from '../../actions'

export function resetErrorMessage() {
  return {
    type: RESET_ERROR_MESSAGE
  }
}
