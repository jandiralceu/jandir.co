import * as React from 'react'
import { useFormik } from 'formik'

export const Subscribe = () => {
  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: ({ name, email }) => {
      const msg = {
        to: 'me@jandir.co', // Change to your recipient
        from: 'me@jandir.co', // Change to your verified sender
        subject: 'Sending with SES is Fun. Updated!',
        text: 'and easy to do anywhere, even with Gatsby',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
      }

      fetch('/serverless/send-message', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(msg)
      })
        .then(console.log)
        .catch(console.log)
    }
  })

  return (
    <form onSubmit={handleSubmit} action="/">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2">
          Your Name
        </label>
        <input
          type="text"
          {...getFieldProps('name')}
          className="form-input rounded-md bg-zinc-100 border-0 outline-slate-200 text-black"
        />
      </div>

      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="mb-2">
          Email
        </label>
        <input
          type="email"
          {...getFieldProps('email')}
          className="form-input rounded-md bg-zinc-100 border-0 outline-slate-200 text-black"
        />
      </div>

      <button className="mt-14" type="submit">
        Send{' '}
      </button>
    </form>
  )
}
