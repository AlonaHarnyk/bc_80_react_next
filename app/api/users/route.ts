import { NextResponse } from 'next/server';
import { api, ApiError } from '../api';

export const GET = async () => {
  try {
    const { data } = await api.get('/users');
    return NextResponse.json(data);
  } catch (error) {
    const apiError = error as ApiError;
    return NextResponse.json({ status: apiError.status });
  }
};
export const POST = async (request: NextResponse) => {
  const body = await request.json();
  console.log(body);

  try {
    const { data } = await api.post('/users', body);
    return NextResponse.json(data);
  } catch (error) {
    const apiError = error as ApiError;
    return NextResponse.json({ status: apiError.status });
  }
};
