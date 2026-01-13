# Supabase Authentication Setup

## Configuration Complete ✅

Your fitness app now has persistent authentication with Supabase.

### Environment Variables

Add these to your `.env.local` file (already configured):

```
VITE_SUPABASE_URL=https://ztyqhqbskrcjjbidkogx.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_ZXAYE_1kLVFurvV8ss73Ww_azrrLUOh
```

### Google OAuth Setup (Next Steps)

To enable Google sign-in, you need to:

1. **Go to Supabase Console**
   - Navigate to: https://app.supabase.com
   - Select your project: `ztyqhqbskrcjjbidkogx`

2. **Enable Google Provider**
   - Go to: Authentication → Providers
   - Find and enable "Google"
   - Add your OAuth credentials from Google Cloud Console

3. **Google Cloud Console Setup**
   - Create OAuth 2.0 credentials (Client ID)
   - Add redirect URIs:
     - `http://localhost:5174/auth/callback` (development)
     - `http://localhost:5174/` (fallback)
     - Your production URL + `/auth/callback`

4. **Add credentials to Supabase**
   - Copy Client ID and Client Secret from Google Cloud
   - Paste into Supabase Google provider settings
   - Save

### Features

✅ **Persistent Login** - Users stay logged in across browser sessions
✅ **Auto Token Refresh** - Session tokens automatically refresh
✅ **Session Detection** - Detects OAuth redirects from Google
✅ **LocalStorage** - Sessions stored in browser localStorage
✅ **Auth Callback** - `/auth/callback` route handles OAuth completion
✅ **Error Handling** - Improved error messages and logging

### How It Works

1. **Login with Email/Password**
   - User enters credentials → AuthContext.signIn()
   - Supabase validates and returns session
   - Session stored in localStorage (auto)
   - User redirected to `/dashboard`

2. **Login with Google**
   - User clicks "Continue with Google"
   - Redirected to Supabase OAuth flow
   - Google authenticates user
   - Supabase creates session
   - Redirected back to `/auth/callback`
   - App detects session and redirects to `/dashboard`

3. **Persistent Session**
   - On app load, AuthContext checks localStorage
   - If valid session found, user automatically logged in
   - Session tokens auto-refresh before expiration

### Testing

1. **Email/Password Login**
   ```
   Go to /login
   Enter credentials
   Should redirect to /dashboard
   Refresh page - should stay logged in
   ```

2. **Google Sign-In**
   ```
   Go to /login
   Click "Continue with Google"
   Complete Google authentication
   Should redirect to /dashboard
   Refresh page - should stay logged in
   ```

3. **Logout**
   ```
   Click logout in dashboard
   Redirected to home page
   Session cleared from localStorage
   ```

### Troubleshooting

**Issue**: Google sign-in shows error
- **Solution**: Check Google OAuth credentials are added to Supabase

**Issue**: Session not persisting after page refresh
- **Solution**: Check browser localStorage is enabled
- **Check**: Open DevTools → Application → LocalStorage → Look for `sb-*` keys

**Issue**: Can't sign up (needs email verification)
- **Note**: Supabase requires email verification by default
- **Dev workaround**: Disable email confirmation in Supabase settings

### Code Structure

```
src/
├── context/AuthContext.jsx          # Auth state management
├── pages/
│   ├── Login.jsx                    # Login form
│   ├── Signup.jsx                   # Signup form
│   ├── AuthCallback.jsx             # OAuth callback handler
│   └── Dashboard.jsx                # Protected route
├── components/ProtectedRoute.jsx    # Route protection
└── supabaseClient.js                # Supabase client config
```

### API Keys Permissions

Your publishable key (`sb_publishable_*`) is for:
- Public authentication endpoints
- Safe to expose in frontend code

Never expose your `service_role` key on the frontend!
