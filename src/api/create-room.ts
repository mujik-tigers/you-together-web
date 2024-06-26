import axios, { AxiosResponse } from 'axios';
import { TRoomCreationPayload } from '@/schemas/room-creation';

export const createRoom = async ({
  title,
  password,
  capacity,
}: TRoomCreationPayload): Promise<AxiosResponse<TRoomCreationResponse>> => {
  try {
    const response = await axios.post<TRoomCreationResponse>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/rooms`,
      {
        title,
        capacity,
        password: password || null,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      }
    );

    return response;
  } catch (error) {
    throw error;
  }
};
