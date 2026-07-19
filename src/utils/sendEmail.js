import emailjs from "@emailjs/browser";

const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
};

export async function sendEmail(formData) {
  return await emailjs.send(
    emailConfig.serviceId,
    emailConfig.templateId,
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    emailConfig.publicKey,
  );
}
