import Person from './Person';
import persons from '../data/person';

const Persons = () => {
  return (
    <div className="cards">
      {persons.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </div>
  );
};

export default Persons;
