# Setting up Google Authentication

Since I cannot access your private Supabase dashboard, you will need to enable Google Authentication manually. Here is a step-by-step guide.

## Step 1: Get Google Cloud Credentials

1.  Go to the [Google Cloud Console](https://console.cloud.google.com/).
2.  Create a **New Project** (e.g., "Fitness App").
3.  **OAuth Consent Screen**:
    *   Go to **APIs & Services > OAuth consent screen**.
    *   Select **External** and click **Create**.
    *   Fill in the **App Name** (e.g., "TOBA-FIT"), **User Support Email**, and **Developer Contact Information**.
    *   Click **Save and Continue** (you can skip Scopes and Test Users for now).
4.  **Create Credentials**:
    *   Go to **APIs & Services > Credentials**.
    *   Click **Create Credentials** and select **OAuth client ID**.
    *   **Application type**: Web application.
    *   **Name**: "Supabase Auth".
    *   **Authorized redirect URIs**: Add the following URL:
        ```
        https://ztyqhqbskrcjjbidkogx.supabase.co/auth/v1/callback
        ```
    *   Click **Create**.
5.  **Copy Keys**:
    *   Copy the **Client ID**.
    *   Copy the **Client Secret**.

## Step 2: Enable Google in Supabase

1.  Go to your [Supabase Dashboard](https://supabase.com/dashboard).
2.  Select your project (**fitness-app**).
3.  In the sidebar, click the **Authentication** icon (looks like a users group).
4.  Click **Providers** in the Auth menu.
5.  Click on **Google** to expand the settings.
6.  **Toggle "Enable Google"** to ON.
7.  Paste the **Client ID** and **Client Secret** you copied from Google Cloud.
8.  Click **Save**.

## Step 3: Test It

1.  Restart your local dev server if it's not running:
    ```bash
    npm run dev
    ```
2.  Go to [http://localhost:5173/login](http://localhost:5173/login).
3.  Click **Continue with Google**.

You should now be able to log in with your Google account!
