import React, { useRef, useState } from 'react';

export default function Subscribe() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState('');

  const subscribe = async (e) => {
    e.preventDefault();

    // 3. Send a request to our API with the user's email address.
    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = '';
    setMessage('Success! 🎉 You are now subscribed to the newsletter.');
  };

  return (
   <div class="antialiased text-gray-900 px-6">
    <div class="max-w-xl mx-auto py-12 md:max-w-4xl ">

    <form onSubmit={subscribe} class="space-y-4">
      <div>
        <label class="block" htmlFor="email-input">
          <span class="text-gray-700 ">Email Address</span>
        </label>
        <input
          id="email-input"
          name="email"
          placeholder="you@awesome.com"
          ref={inputEl}
          required
          type="email"
          multiple
          class="form-input mt-1 block"
        />
        </div>
        <div>
          <div class="text-gray-700">
            {message
              ? message
              : `I'll only send emails when new content is posted. No spam.`}
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">{'✨ Subscribe 💌'}</button>
      </div>
    </form>
    </div>
    </div>

  );
}