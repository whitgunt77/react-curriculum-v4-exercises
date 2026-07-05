export const TaskItem = ({ task }) => (
  <li>
    {task.title} {task.completed ? '✅' : '⏳'}
  </li>
);
