import React from 'react';

export default function FloatingWhatsappButton() {
  return (
    <button type="button" className="p-3 fixed bottom-5 right-5 bg-green-600 rounded-full">
      <img src="/whatsapp-icon.svg" alt="Contact us via Whatsapp" className="size-10" />
    </button>
  );
}
