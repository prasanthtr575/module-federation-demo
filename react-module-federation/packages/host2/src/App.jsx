import React, { Suspense } from 'react'
const RemoteButton = React.lazy(() => import('remote/Button'));

function App() {
  return (
    <div>
      <h2>Host2</h2>
      <hr/>
      <Suspense fallback={ <h3>Loading...</h3>}>
        <RemoteButton>Host-2 Button</RemoteButton>
      </Suspense>
    </div>
  )
}

export default App