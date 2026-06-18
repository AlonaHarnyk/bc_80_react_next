import { NextRequest, NextResponse } from 'next/server';
import { api, ApiError } from '../../api';

interface UserByIdParams {
  params: Promise<{ id: string }>;
}

export const GET = async (request: NextRequest, { params }: UserByIdParams) => {
  const { id } = await params;
  console.log(id);

  try {
    const { data } = await api.get(`/users/${id}`);
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    const apiError = error as ApiError;
    return NextResponse.json({ status: apiError.status });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: UserByIdParams,
) => {
  const { id } = await params;
  console.log(id);

  try {
    const { data } = await api.delete(`/users/${id}`);
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    const apiError = error as ApiError;
    return NextResponse.json({ status: apiError.status });
  }
};
