import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import User from '@/lib/models/User';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const user = await User.findOne({ email });
      if (user && user.password === password) {
        return NextResponse.json({ 
          success: true, 
          user: { name: user.name, email: user.email, avatar: user.avatar } 
        });
      }
    }

    // Fallback demo auth
    const nameFromEmail = email.split('@')[0];
    const formattedName = nameFromEmail.charAt(0).toUpperCase() + nameFromEmail.slice(1);

    return NextResponse.json({
      success: true,
      user: {
        name: formattedName,
        email,
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
      }
    });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
