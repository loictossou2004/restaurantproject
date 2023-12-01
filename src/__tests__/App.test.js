const AddByValue = (value, array = []) => {
    return  array.push(value)
  };
  
const deleteByValue = (value, array = []) => {
return array.filter(tasks => tasks !== value)
}
  
test('add new task', () => {
const myTasks = ['Add new card']
AddByValue("Make pull request", myTasks)
expect(myTasks).toEqual([ 'Add new card', 'Make pull request' ])
});

test('delete task', () => {
const myTasks = [ "Add new card", "Make pull request" ]
const NewTasks = deleteByValue("Make pull request", myTasks)
expect(NewTasks).toEqual([ 'Add new card' ])
});