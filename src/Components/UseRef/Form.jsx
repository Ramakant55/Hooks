// import React, { useRef } from 'react'

// const Form = () => {
// const inputRef=useRef(null);
//   const handleClick = () => {
//     inputRef.current.focus();
//   };
//   return (
//     <div className='text-center mt-40'>
//  <input className='border-2 text-center font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' ref={inputRef} type="text" />
//  <button className='font-bold bg-white ml-3 border-b-2 border-black p-3 text-sm rounded-xl shadow-inner shadow-black' onClick={handleClick}>Focus Input</button>
// </div>
//   )
// }

// export default Form


import React, { useRef } from 'react';

function FocusForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleNextFocus = (currentRef) => {
    switch (currentRef) {
      case nameRef:
        emailRef.current.focus();
        break;
      case emailRef:
        passwordRef.current.focus();
        break;
      case passwordRef:
        alert('Form submitted');

        nameRef.current.focus();
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event, currentRef) => {
    event.preventDefault();
    handleNextFocus(currentRef);
  };

  return (
    <form>
      <div>
        <label>
          Name:
          <input
            type="text"
            ref={nameRef}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e, nameRef)}
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            ref={emailRef}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e, emailRef)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            ref={passwordRef}
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e, passwordRef)}
          />
        </label>
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e, passwordRef)}>
        Submit
      </button>
    </form>
  );
}

export default FocusForm;
