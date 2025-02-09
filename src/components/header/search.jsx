import { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function SearchBar() {
      const [show, setShow] = useState(false);
      const [inputValue, setInput] = useState('')
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      const navigate = useNavigate();

      const handleSubmit = (e) => {
            e.preventDefault(); // Prevent default form submission
            if (inputValue.trim()) {
                  navigate(`/city-page?${encodeURIComponent(inputValue)}`);
            }
      };
      return (
            <div>
                  <Button onClick={handleShow} className='bg-none btn'
                        style={{
                              
                              background: "none",
                              border: "none",
                              fontSize: "1.5rem",
                              color: "white",
                              cursor: "pointer"
                        }}
                  >
                        <FaSearch />
                  </Button>
                  <Offcanvas show={show} placement={'top'} onHide={handleClose} className="h-100 mt-5">
                        <Offcanvas.Header closeButton>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                              <form onSubmit={handleSubmit}>
                                    <input
                                          value={inputValue}
                                          onChange={(e) => setInput(e.target.value)}
                                          type="text"
                                          className='sm-w-50 w-75 search-input'
                                          placeholder='Enter a search term'
                                          style={{
                                                border: "none",
                                                padding: "5px",
                                                fontSize: "large",
                                                fontWeight: "bold",

                                          }}
                                    />
                                    <button
                                          style={{
                                                border: "none",
                                                color: "red",
                                                background: "none"
                                          }}
                                    >
                                          search
                                    </button>
                              </form>

                        </Offcanvas.Body>
                  </Offcanvas>
            </div>
      );
}

export default SearchBar