import React from 'react';
import Task from './components/Task';
import TaskInput from './components/TaskInput';
import store from './store';
import { observer } from 'mobx-react';
import Header from "./components/Header";
import Navbar from "./components/Navbar";

class App extends React.Component {

  render() {

    const { sortedTasks } = store;

    return (

            <div className="main">
                <Navbar/>
                <div className='main_content'>
                    <Header activeTaskks={store.activeTasksCount}/>
                    <div className='tasks'>
                        <h1 className="top">Active tasks: {store.activeTasksCount}</h1>
                        {sortedTasks.map(task => (
                            <Task
                                doneTask={() => store.doneTask(task.id)}
                                deleteTask={() => store.deleteTask(task.id)}
                                task={task}
                                key={task.id}
                            />
                        ))}
                        <TaskInput addTask={v => store.addTask(v)}/>
                    </div>
                </div>
            </div>

    );
  }
}

export default observer(App);
