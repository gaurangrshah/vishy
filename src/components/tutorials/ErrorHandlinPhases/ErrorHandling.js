import React from 'react';
import Twrap from '../../utils/Twrap/Twrap';
import Hero from './Hero';
import ErrorBoundary from './ErrorBoundary';



function ErrorHandling() {
  return (
    <Twrap
      title="ErrorHandlingPhases"
      source="http://www.youtube.com/watch?v=DNYXgtZBRPE"
    >
      <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>
      <p>Errors are thrown but the UI still renders, and returns the message sorry below. </p>
      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary>

    </Twrap>
  )
}

export default ErrorHandling

/*
* Error handling Phase in the component lifecyle provides us access to two methods:
  -- 1. static getDerivedStateFromError(error)
      -- used to render a fallback UI after an error is thrown.
  -- 2. componentDidCatch(error, info)
      -- used to log the error information

  these methods allow us to provide a fallback UI in case of errors. This avoids react's native behavior of unmounting the entire component tree in cases of errors.

  NOTE: Any class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.
*/

