import React, { useEffect, useState } from 'react';
import './NoteList.scss';
import twitter from '../../images/twitter.svg';
import facebook from '../../images/facebook.svg';

export const NoteList = () => {
  const [noteList, setNoteList] = useState([]);
  const [note, setNote] = useState({});
  const [newNote, setNewNote] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleString())
    setNote({
      id: Math.random(),
      subject: noteTitle,
      note: newNote,
      day: date,
    })
  }, [noteTitle, newNote, date]);

  useEffect(() => {
    setNewNote('');
    setNoteTitle('');
    setDate('');
  }, [noteList]);

  const addNote = () => {
    if (note.subject.length === 0) {
      return;
    }

    setNoteList([...noteList, note])
  }

  return (
    <div className="NoteList">
      <div className="NoteList__wrapper">
        <h2 className="NoteList__title">
          Notes:
        </h2>
        <div className="NoteList__creator creator">
          <div className="creator__title">
            <h3 className="creator__title-text">
              Create new note
            </h3>
            <button
              type="button"
              className="button is-primary"
              onClick={() => addNote()}
            >
              DONE
            </button>
          </div>
          <div className="creator__subject">
            <form className="creator__form">
              <input
                type="text"
                placeholder="Subject"
                className="input"
                value={noteTitle}
                onChange={(event) => setNoteTitle(event.target.value)}
              />
              <hr className="m-0"/>
              <textarea
                type="text"
                placeholder="Note"
                className="textarea has-fixed-size"
                value={newNote}
                onChange={(event) => setNewNote(event.target.value)}
              />
            </form>
          </div>
        </div>
        {noteList.length > 0 && (
          <div className="NoteList__notes">
          {noteList.map(note => (
            <div className="NoteList__note card" key={note.id}>
              <div className="card__title">
                {note.subject}
              </div>
              <div className="card__note">
                <div className="card__text mb-3">
                  {note.note.length > 1000 ? note.note.substr(0, 1000) : note.note}
                </div>
                <div className="card__date">
                  {note.day}
                </div>
                <hr className="m-0"/>
                <div className="card__social">
                  <a
                    href="https://twitter.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={twitter}
                      alt="Twitter icon"
                      className="card__image"
                    />
                  </a>
                  <a
                    href="https://twitter.com/?lang=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={facebook}
                      alt="Twitter icon"
                      className="card__image"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>
    </div>
  );
};
