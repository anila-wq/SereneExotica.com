import { useState } from 'react';
import ContactFormModal from './components/ContactFormModal';
import ThankYouModal from './components/ThankYouModal';
import WhatsAppButton from './components/WhatsAppButton';
import ResponsiveLayout from './components/ResponsiveLayout';

const CRM_WEBHOOK = 'https://apps.cratiocrm.com/Customize/Webhooks/webhook.php?id=791080';
const CRM_ID = '791080';

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleFormSubmit = async (data: { name: string; number: string; email: string }) => {
    const cleanName = data.name.trim();
    const cleanPhone = data.number.replace(/\D/g, '');
    const cleanEmail = data.email.trim();

    const payload = new FormData();
    payload.append('id', CRM_ID);
    payload.append('name', cleanName);
    payload.append('phone', cleanPhone);
    payload.append('mobile', cleanPhone);
    payload.append('number', cleanPhone);
    payload.append('email', cleanEmail);
    payload.append('source', 'Website Form');
    payload.append('message', 'Lead from Serene website form');

    try {
      await fetch(CRM_WEBHOOK, {
        method: 'POST',
        body: payload,
        mode: 'no-cors',
      });
    } catch (error) {
      console.error('Webhook error:', error);
    }

    setIsFormOpen(false);
    setIsThankYouOpen(true);
  };

  const handleCloseThankYou = () => {
    setIsThankYouOpen(false);
  };

  return (
    <>
      <ResponsiveLayout onButtonClick={handleOpenForm} />
      <ContactFormModal
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        onSubmit={handleFormSubmit}
      />
      <ThankYouModal
        isOpen={isThankYouOpen}
        onClose={handleCloseThankYou}
      />
      <WhatsAppButton />
    </>
  );
}
