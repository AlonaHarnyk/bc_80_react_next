import { Contact } from '@/type';
import { api, ApiError } from '../../api';
import { NextRequest, NextResponse } from 'next/server';

interface ContactByIdProps {
  params: Promise<{ id: string }>;
}

export async function GET(request: NextRequest, { params }: ContactByIdProps) {
  try {
    const { id } = await params;

    const { data } = await api.get<Contact>(`/contacts/${id}`);

    return NextResponse.json(data);
  } catch (error) {
    const apiError = error as ApiError;
    return NextResponse.json({ status: apiError.status });
  }
}
