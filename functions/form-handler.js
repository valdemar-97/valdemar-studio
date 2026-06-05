export async function onRequest(context) {
  if (context.request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const formData = await context.request.formData();
    
    const nombre = formData.get('nombre');
    const email = formData.get('email');
    const telefono = formData.get('telefono');
    const empresa = formData.get('empresa');
    const servicio = formData.get('servicio');
    const mensaje = formData.get('mensaje');

    // Enviar email con Mailgun o servicio similar
    // Por ahora, retornar éxito
    
    return new Response(JSON.stringify({
      success: true,
      message: 'Formulario enviado correctamente'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      success: false,
      error: error.message
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
