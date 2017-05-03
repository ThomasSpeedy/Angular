const user = {
  name: 'John Doe'
};
const activateProperties = {
  active: true,
  deleted: false
};

const activatedUser = Object.assign(user, activateProperties);
console.log(user); // {'name':'John Doe','active':true,'deleted':false}
console.log(activatedUser); // {'name':'John Doe','active':true,'deleted':false}

const todo = {
  title: 'Aufräumen',
  description: 'Zuerst das Arbeitszimmer, dann die Küche...',
  status: 'BACKLOG'
};
const newTodo = Object.assign({}, todo, {
  status: 'IN_PROGRESS'
});
console.log(newTodo); // {'title':'Aufräumen','description':'Zuerst das Arbeitszimmer, dann die Küche...','status':'IN_PROGRESS'}
console.log(newTodo === todo); //false



