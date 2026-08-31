import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import User from '@/lib/models/User';

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const conn = await connectToDatabase();

    if (conn) {
      const existing = await User.findOne({ email });
      if (existing) {
        return NextResponse.json({ success: false, message: 'User already exists' }, { status: 400 });
      }

      const newUser = await User.create({ name, email, password });
      return NextResponse.json({
        success: true,
        user: { name: newUser.name, email: newUser.email, avatar: newUser.avatar }
      }, { status: 201 });
    }

    return NextResponse.json({
      success: true,
      user: {
        name,
        email,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
      }
    }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
