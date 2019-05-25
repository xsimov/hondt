const getSessionId = () => {
  let sessionId = window.location.pathname
  if (sessionId.endsWith("/")) {
    sessionId = sessionId.slice(0, sessionId.length - 1)
  }
  if (sessionId.startsWith("/")) {
    sessionId = sessionId.slice(1, sessionId.length)
  }
  return sessionId.split("/")
}

export { getSessionId }
