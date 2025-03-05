import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('https://api.imgflip.com/get_memes', {
      params: {
        username: process.env.IMGFLIP_USER,
        password: process.env.IMGFLIP_PASS
      }
    });
    
    return NextResponse.json(response.data.data.memes.slice(0, 25));
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch templates' },
      { status: 500 }
    );
  }
}
