export function buildWaLink(intlNumber: string, message: string) {
  const digits = intlNumber.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function composeAppointmentMessage(opts: {
  locale: 'fr' | 'ar';
  name: string;
  phone: string;
  service: string;
  date: string;
  message: string;
}) {
  const { locale, name, phone, service, date, message } = opts;

  if (locale === 'ar') {
    const lines = [
      'مرحباً، أود حجز موعد في عيادة NOVA لطب الأسنان.',
      '',
      `• الاسم: ${name}`,
      `• الهاتف: ${phone}`,
      `• الخدمة: ${service}`,
      `• التاريخ المفضّل: ${date}`
    ];
    if (message.trim()) lines.push('', `رسالة: ${message}`);
    lines.push('', 'شكراً لكم.');
    return lines.join('\n');
  }

  const lines = [
    'Bonjour, je souhaite prendre rendez-vous au Cabinet Dentaire NOVA.',
    '',
    `• Nom : ${name}`,
    `• Téléphone : ${phone}`,
    `• Service : ${service}`,
    `• Date souhaitée : ${date}`
  ];
  if (message.trim()) lines.push('', `Message : ${message}`);
  lines.push('', 'Merci.');
  return lines.join('\n');
}

export function cn(...classes: (string | false | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}
