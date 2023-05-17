import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.subject}</h4>
          <p>
            {props.body}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Zavřít</Button>
        </Modal.Footer>
      </Modal>
    );
  }*/

function NewArticle(props) {
    const [modalShow, setModalShow] = useState(false);
    const showErrorMessage = () => {
        toast.error('Chyba! Doplňte všechny údaje', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const showSuccessMessage = () => {
        toast.success('Nahráno!', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const [name, setName] = useState("");
    const [subject, setSubject] = useState("");
    const [author, setAuthor] = useState("");
    const [text, setText] = useState("");

    const addItemButtonPressed = () => {
        if (name && subject && author && text) {
            props.save_item({name : name, subject : subject, author : author, text : text});
            setName("");
            setSubject("");
            setAuthor("");
            setText("");

            //setModalShow(true);
            showSuccessMessage();
        } else {
            showErrorMessage();
        }
    }



    return (
        <div className="container">
            <div className="row">
                <h2>Nový článek</h2>
            </div>
            <div className="row">
                <label htmlFor="name-filed">Název: </label>
                <input className="form-control" id="name-filed" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="subject-filed">Předmět: </label>
                <input className="form-control" id="subject-filed" type="text" value={subject} onChange={(e) => setSubject(e.target.value)}></input>
                <label htmlFor="author-filed">Autor: </label>
                <input className="form-control" id="author-filed" type="text" value={author} onChange={(e) => setAuthor(e.target.value)}></input>
                <label htmlFor="text-filed">Text: </label>
                <input className="form-control" id="text-filed" type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="row mt-3">
                <button className="btn btn-secondary" type="button" onClick={addItemButtonPressed}>Přidat</button>
            </div>
           

            <ToastContainer />
        </div>
        
    )
}
export default NewArticle;
/*
 <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title={"Hotovo"}
                body={"Uloženo"}
            />
*/