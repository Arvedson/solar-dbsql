// src/app/api/test/route.ts

import { NextResponse } from 'next/server';

export async function GET() {
  // Definir el objeto JSON para testing
  const testObject = {
    id: 1,
    name: 'Sample Object',
    description: 'This is a sample object for testing purposes.'
  };

  // Enviar el objeto como respuesta en formato JSON
  return NextResponse.json(testObject);
}
