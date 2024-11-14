import { useId } from "react";

export const UserForm = ({ onSubmit }) => {
    const userNameField = useId();
    const roleField = useId();
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({
      username: e.target.elements.username.value,
      role: e.target.elements.role.value,
    });
    e.target.reset();
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor={userNameField}>Username</label>
          <input type="text" name="username" id={userNameField} />
        </div>
        <div>
            <label htmlFor={roleField}>Role</label>
          <select name="role" id={roleField}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
