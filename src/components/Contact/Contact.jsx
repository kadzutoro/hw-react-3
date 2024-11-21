import css from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';

export const Contact = ({ data: {id, name, number}, onDelete }) => {
  return (
    <div>
      <div>
        <div>
          <IoPerson />
          <p>{name}</p>
        </div>
        <div>
            <FaPhoneAlt/>
            <p>{number}</p>
        </div>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};
