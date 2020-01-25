import React, { useState, useEffect, useReducer } from 'react';

const notesReducer = (state, action) => {
switch(action.type){
  case 'POPULATE_NOTES': return action.type;
  default: return state;
}
}

const NoteApp = () => {

  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(notesReducer,[]);
  const [title, setTitle] = useState('')
  const [notesBody, setBody] = useState('')

  const addNote = (e) => {
    e.preventDefault();
    // setNotes([
    //   ...notes,
    //   { title, notesBody }
    // ])
    setTitle('')
  };

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      // setNotes(notes);
      dispatch({ type: 'POPULATE_NOTES', notes});
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    console.log('usefeffect into');
  }, [notes]);

  const removeNote = (title) => {
    //  setNotes(notes.filter((note) => note.title != title))
  };


  return (
    <div>
      <h1>Notes</h1>
      {notes.map((note) => (
        
          <Note key={note.title} note = {note} removeNote= {removeNote}/>
        
      ))}
      <p>Add note</p>
      <form onSubmit={addNote}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={notesBody} onChange={(e) => setBody(e.target.value)}></textarea>
        <button>add note</button>
      </form>
    </div>
  );

};

const Note = ({note, removeNote}) => {
  useEffect(()=>{
    console.log('setting up effect');

    return () =>{
      console.log('cleaning up effect');
    }
  },[]);
  return (
    <div>
      <h3>{note.title}</h3>
      <p>{note.notesBody}</p>
      <button onClick={() => removeNote(note.title)}>x</button>
    </div>
  )
}



const App = (props) => {
  const [count, setCount] = useState(props.count)
  const [text, setText] = useState('')


  useEffect(() => {
    console.log('useEffect ran');
    document.title = count;
  });

  return (
    <div>
      <p>The current {text || 'count'} is {count}</p>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(props.count)}>Reset</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <input value={text} onChange={(e) => setText(e.target.value)}></input>
    </div>
  )

}
App.defaultProps = {
  count: 12
};


export default NoteApp;
