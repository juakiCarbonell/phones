import React from 'react'

export default function Error({error}) {
  return (
    <div className="d-flex justify-content-center">
      <h1>The following error has occur: {error}, please try again</h1>
    </div>
  );
}
