import { init, Form } from '@feathery/react';

function Forms() {
  // Initialize Feathery
  init('80090750-0bb7-417d-8bfd-e37b61332753');
  // Show the `formName` Feathery form
  return <Form formName='NexusIA' />
}

export default Forms;