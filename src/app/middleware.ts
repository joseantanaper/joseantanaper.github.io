export const logger = (store: any) => (next: any) => (action: any) => {
  console.groupCollapsed(action.type, action.payload)
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

export const crashReporter = (store: any) => (next: any) => (action: any) => {
  try {
    return next(action)
  } catch (err) {
    console.error('Caught an exception!', err)
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState(),
    //   },
    // })
    throw err
  }
}
