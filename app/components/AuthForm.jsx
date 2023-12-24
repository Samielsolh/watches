'use client';

import { Auth } from '@supabase/auth-ui-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export default function AuthForm() {
    const supabase = createClientComponentClient();
    return (
        <Auth
            supabaseClient={supabase}
            view="magic_link"
            showLinks={false}
            providers={[]}
            redirectTo='http://localhost:3000/auth/callback'
            appearance={{
                theme: 'dark',
                button: {
                    className: 'text-gray-900 hover:bg-gray-600',
                    style: {
                        background: 'linear-gradient(to bottom, #323c57, #ffffff)'
                    }
                },
                input: {
                    className: 'bg-gray-700 border-gray-600 text-white'
                }
            }}
        />
    )
}
