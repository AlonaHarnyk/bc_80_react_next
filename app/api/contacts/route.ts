import { Contact } from '@/type';
import { api, ApiError } from '../api';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const hasWork = request.nextUrl.searchParams.get('hasWork');

    const { data } = await api.get<Contact>(`/contacts`, {
      params: { hasWork },
    });

    return NextResponse.json(data);
  } catch (error) {
    const apiError = error as ApiError;
    return NextResponse.json({ status: apiError.status });
  }
}
