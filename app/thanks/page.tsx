export default function ThanksPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">You’re In! ✅</h1>

      <p className="text-lg text-gray-700 mb-6">
        Thanks for joining <strong>YardPlaybook</strong>.
      </p>

      <div className="mx-auto max-w-2xl text-left bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-3">What happens next?</h2>
        <ol className="list-decimal ml-6 space-y-2 text-gray-800">
          <li>
            <strong>Check your inbox</strong> for a confirmation email. Click the confirm button to finish subscribing.
          </li>
          <li>
            You’ll get the <strong>Seasonal Lawn Playbook</strong> download link right after confirmation.
          </li>
          <li>
            We’ll send <strong>timely yard reminders</strong> when it matters most — no fluff.
          </li>
        </ol>
      </div>

      <p className="text-sm text-gray-500 mt-6">
        Didn’t get the email? Check spam/promotions or add <em>coach@yardplaybook.com</em> to contacts.
      </p>
    </main>
  );
}
