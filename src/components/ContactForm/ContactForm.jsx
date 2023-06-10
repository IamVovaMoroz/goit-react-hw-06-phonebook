import { useState } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import css from './ContactForm.module.css';


export default function ContactForm ({addContact}) {

const [name, setName] = useState("")
const [number, setNumber] = useState("")

const handleSubmit = e => {
  e.preventDefault();
  // вызов функции addContact и передаем ей обьект со свойствами name, number. Их берем из состояния 
  addContact({name, number});
  // после добавляения контакта мы очищаем строчки инпутов, вызовом setName и setNumber с аргументом пустой строкой 
  setName("")
  setNumber("")
  // this.props.addContact(this.state);
  // this.setState(() => ({ name: '', number: '' }));
};



//  handleChange = name => e => {
//   this.setState(() => ({ [name]: e.target.value }));
// };

const handleChange =  e => {
  // в зависимости от  name и добавляем его в setName или setNumber
  switch(e.target.name) {
case "name":
  setName(e.target.value);
  break;
  case "number":
    setNumber(e.target.value);
    break;
    // если никакой вариант не сработал e.target.value break - выходим из switch;
    default:
    break;

  }


};

  return (
    <form
            autoComplete="off"
            onSubmit={handleSubmit}
            className={css.list}
          >
            <label>
              <TextField
                inputProps={{
                  pattern:
                    "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
                }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                // должно быть name для switch
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </label>
            <label>
              <TextField
                inputProps={{
                  // inputMode: 'numeric',
                  pattern:
                    '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}',
                }}
                id="outlined-basic"
                label="Number"
                variant="outlined"
                type="tel"
                name="number"
                // value={this.state.number}
                value={number}
                onChange={handleChange}
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <Button variant="contained" type="submit">
              Add contact
            </Button>
          </form>
  )
}


