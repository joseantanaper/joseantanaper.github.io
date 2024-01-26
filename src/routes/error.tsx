import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { PageLayout } from '@/components/layout/PageLayout'

const ErrorPage = () => {
  const error = useRouteError()
  let errorMessage

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.statusText
  } else if (error instanceof Error) {
    errorMessage = error.message
  } else if (typeof error === 'string') {
    errorMessage = error
  } else {
    errorMessage = 'Unknown error'
  }

  return (
    <PageLayout>
      <div className="text-danger border-top p-5 fs-2 fw-bold text-center">
        {errorMessage}
      </div>
      <div className="border-top p-5 text-center fs-3">
        Return to{' '}
        <a href="/" className="fw-bold">
          Home
        </a>
      </div>
    </PageLayout>
  )
}

export default ErrorPage
