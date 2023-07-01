import LEVELS from './levels.enum.js';

class Task {
  name = '';
  description = '';
  completed = false;
  level = LEVELS.NORMAL;

  constructor({ name, description, completed, level }) {
    this.name = name || this.name;
    this.description = description || this.description;
    this.completed = completed || this.completed;
    this.level = level || this.level;
  }
}

export default Task;
