/**
 * @component App
 * @summary Root application component
 * @description Wraps application with all necessary providers
 * @domain core
 * @type root-component
 * @category application
 */

import { AppProviders } from './providers';
import { AppRouter } from './router';

export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};

export default App;
