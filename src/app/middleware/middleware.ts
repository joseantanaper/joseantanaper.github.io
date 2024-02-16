export const logger = (store: any) => (next: any) => (action: any) => {
  console.groupCollapsed('Middleware', action.type, action.payload)
  console.log('Middleware', 'dispatching', action)
  let result = next(action)
  console.log('Middleware', 'next state', store.getState())
  console.groupEnd()
  return result
}

export const crashReporter = (store: any) => (next: any) => (action: any) => {
  try {
    console.log('Middleware', 'CrashReporter', action.type)
    return next(action)
  } catch (err) {
    console.error('Middleware', 'Caught an exception!', err)
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState(),
    //   },
    // })
    throw err
  }
}
