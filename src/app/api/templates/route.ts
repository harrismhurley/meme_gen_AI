import { NextResponse } from 'next/server';
import type {MemeTemplate, ApiResponse } from '@/types/meme';

export async function GET() {
  try {
    const apiUrl = new URL('https://api.imgflip.com/get_memes');
    apiUrl.searchParams.set('username', process.env.IMGFLIP_USER!);
    apiUrl.searchParams.set('password', process.env.IMGFLIP_PASS!);

    const response = await fetch(apiUrl.toString());
    const data: ApiResponse<{ memes: MemeTemplate[] }> = await response.json();
    
    
    if (!data.success) {
      throw new Error(data.error_message || 'Failed to fetch templates');
    }

    const filtered = data.data.memes
      .filter(meme => meme.box_count <= 2) // Only templates with 1-2 text boxes
      .slice(0, 20);

    return NextResponse.json(filtered);
  } catch (error) {
    console.error('Template fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}