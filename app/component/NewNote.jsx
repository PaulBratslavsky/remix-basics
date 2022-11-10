import { Form, useTransition as useNavigation } from "@remix-run/react";

function NewNote({ errors }) {
  const { state } = useNavigation();

  const isLoading = state === "submitting" || state === "loading";

  return (
    <Form method="post">
      <div id="note-form">
        <fieldset disabled={isLoading}>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" />
            {errors?.title && <span>{errors.title.message}</span>}
          </p>
          <p>
            <label htmlFor="content">Content</label>
            <textarea id="content" name="content" rows="5" />
            {errors?.content && <span>{errors.content.message}</span>}
          </p>
          <div className="form-actions">
            {isLoading ? <span>Saving...</span> : <button>Add Note</button>}
          </div>
        </fieldset>
      </div>
    </Form>
  );
}

export default NewNote;
