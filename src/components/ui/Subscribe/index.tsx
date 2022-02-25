import * as React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Subscribe = () => {
  const { handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    onSubmit: async ({ name, email }) => {
      const msg = {
        to: 'me@jandir.co', // Change to your recipient
        from: 'me@jandir.co', // Change to your verified sender
        subject: 'Sending with SES is Fun. Updated!',
        text: 'and easy to do anywhere, even with Gatsby',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>'
      }

      // fetch(
      //   process.env.NODE_ENV === 'development'
      //     ? '/serverless/send-message'
      //     : 'https://omrbwzk4e2.execute-api.us-east-1.amazonaws.com/send-message',
      //   {
      //     method: 'POST',
      //     headers: {
      //       Accept: 'application/json',
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify(msg)
      //   }
      // )
      //   .then(console.log)
      //   .catch(console.log)
      await axios.post('/serverless/send-message', msg, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
    }
  })

  return (
    <form onSubmit={handleSubmit} action="/">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-2 w-full">
          <input
            id="name"
            type="text"
            placeholder="Your name"
            {...getFieldProps('name')}
            className="form-input rounded-md bg-slate-600 border-0 outline-slate-200 text-white w-full"
          />
        </label>
      </div>

      <div className="flex flex-col mb-4 mt-4">
        <label htmlFor="email" className="mb-2 w-full">
          <input
            id="email"
            type="email"
            placeholder="Your email"
            {...getFieldProps('email')}
            className="form-input rounded-md bg-slate-600 border-0 outline-slate-200 text-white w-full"
          />
        </label>
      </div>

      <button
        className="bg-white text-zinc-900 py-4 px-6 rounded-md"
        type="submit"
      >
        Subscribe{' '}
        <FontAwesomeIcon icon={['fas', 'bell']} size="lg" className="ml-6" />
      </button>
    </form>
  )
}
