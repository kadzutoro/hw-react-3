import { useState } from 'react'
import './App.css'
import { UserForm }from './components/UserForm/UserForm.jsx'
import { TextImput } from './components/TextInput/TextInput.jsx'
import { LangSwitcher } from './components/LangSwitcher/LangSwitcher.jsx'

export const App = () => {
  const [text, setText] = useState('qwerty');
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  }
  return (
   <div>
    {user && <div>
      <p>{user.username}</p>
      <p>{user.role}</p>
    </div> }
    <UserForm onSubmit = {saveUser}/>
    <TextImput value={text} onChange = {setText}/>
    <p>{text}</p>
    <LangSwitcher lang={lang} onChange ={setLang}/>
    <p>Current lang: {lang}</p>
   </div>
  )
}

