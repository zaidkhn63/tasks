import React from 'react';
import TaskList from './components/TaskList';
import { store } from './store/store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <TaskList />
    </Provider>
  );
};

export default App;
